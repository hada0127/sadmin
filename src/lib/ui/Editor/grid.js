/* eslint-disable no-unused-vars */
import Quill from 'quill'
import GridSelection from './modules/grid-selection'

// import grid node matchers
import {
  matchGridCell,
  matchGridHeader,
  matchGrid
} from './utils/node-matchers'

import { getEventComposedPath } from './utils/index'

const Module = Quill.import('core/module')
const Delta = Quill.import('delta')

import {
  GridCol,
  GridColGroup,
  GridCellLine,
  GridCell,
  GridRow,
  GridBody,
  GridContainer,
  GridViewWrapper,
  rowId,
  cellId
} from './formats/grid';

class Grid extends Module {
  static register() {
    Quill.register(GridCol, true);
    Quill.register(GridColGroup, true);
    Quill.register(GridCellLine, true);
    Quill.register(GridCell, true);
    Quill.register(GridRow, true);
    Quill.register(GridBody, true);
    Quill.register(GridContainer, true);
    Quill.register(GridViewWrapper, true);
    Quill.register(GridViewWrapper, true);
    // register customized Header，overwriting quill built-in Header
    // Quill.register('formats/header', Header, true);
  }

  constructor(quill, options) {
    super(quill, options);

    // handle click on quill-grid
    this.quill.root.addEventListener('click', (evt) => {
      // bugfix: evt.path is undefined in Safari, FF, Micro Edge
      const path = getEventComposedPath(evt)

      if (!path || path.length <= 0) return

      const gridNode = path.filter(node => {
        return node.tagName &&
          node.tagName.toUpperCase() === 'TABLE' &&
          node.classList.contains('quill-grid')
      })[0]

      if (gridNode) {
        // current grid clicked
        if (this.grid === gridNode) return
        // other grid clicked
        if (this.grid) this.hideGridTools()
        this.showGridTools(gridNode, quill, options)
      } else if (this.grid) {
        // other clicked
        this.hideGridTools()
      }
    }, false)

    // handle right click on quill-grid
    this.quill.root.addEventListener('contextmenu', (evt) => {
      if (!this.grid) return true
      evt.preventDefault()

      // bugfix: evt.path is undefined in Safari, FF, Micro Edge
      const path = getEventComposedPath(evt)
      if (!path || path.length <= 0) return

      const gridNode = path.filter(node => {
        return node.tagName &&
          node.tagName.toUpperCase() === 'TABLE' &&
          node.classList.contains('quill-grid')
      })[0]

      const rowNode = path.filter(node => {
        return node.tagName &&
          node.tagName.toUpperCase() === 'TR' &&
          node.getAttribute('data-row')
      })[0]

      const cellNode = path.filter(node => {
        return node.tagName &&
          node.tagName.toUpperCase() === 'TD' &&
          node.getAttribute('data-row')
      })[0]

      let isTargetCellSelected = this.gridSelection.selectedTds
        .map(gridCell => gridCell.domNode)
        .includes(cellNode)

      if (this.gridSelection.selectedTds.length <= 0 ||
        !isTargetCellSelected) {
        this.gridSelection.setSelection(
          cellNode.getBoundingClientRect(),
          cellNode.getBoundingClientRect()
        )
      }

      if (this.gridOperationMenu)
        this.gridOperationMenu = this.gridOperationMenu.destroy()


    }, false)

    // add keyboard binding：Backspace
    // prevent user hits backspace to delete grid cell
    const KeyBoard = quill.getModule('keyboard')
    quill.keyboard.addBinding(
      { key: 'Backspace' },
      {},
      function (range, context) {
        if (range.index === 0 || this.quill.getLength() <= 1) return true;
        const [line] = this.quill.getLine(range.index);
        if (context.offset === 0) {
          const [prev] = this.quill.getLine(range.index - 1);
          if (prev != null) {
            if (prev.statics.blotName === 'grid-cell-line' &&
              line.statics.blotName !== 'grid-cell-line') return false;
          }
        }
        return true
      })
    // since only one matched bindings callback will excute.
    // expected my binding callback excute first
    // I changed the order of binding callbacks
    let thisBinding = quill.keyboard.bindings['Backspace'].pop()
    quill.keyboard.bindings['Backspace'].splice(0, 1, thisBinding)

    // add Matchers to match and render quill-grid for initialization
    // or pasting
    quill.clipboard.addMatcher('td', matchGridCell)
    quill.clipboard.addMatcher('th', matchGridHeader)
    quill.clipboard.addMatcher('table', matchGrid)
    // quill.clipboard.addMatcher('h1, h2, h3, h4, h5, h6', matchHeader)

    // remove matcher for tr tag
    quill.clipboard.matchers = quill.clipboard.matchers.filter(matcher => {
      return matcher[0] !== 'tr'
    })
  }

  getGrid(range = this.quill.getSelection()) {
    if (range == null) return [null, null, null, -1];
    const [cellLine, offset] = this.quill.getLine(range.index);
    if (cellLine == null || cellLine.statics.blotName !== GridCellLine.blotName) {
      return [null, null, null, -1];
    }
    const cell = cellLine.gridCell();
    const row = cell.row();
    const grid = row.grid();
    return [grid, row, cell, offset];
  }

  insertGrid(rows, columns) {
    const range = this.quill.getSelection(true)
    if (range == null) return
    let currentBlot = this.quill.getLeaf(range.index)[0]
    let delta = new Delta().retain(range.index)

    if (isInGridCell(currentBlot)) {
      console.warn(`Can not insert grid into a grid cell.`)
      return;
    }

    delta.insert('\n')
    // insert grid column
    delta = new Array(columns).fill('\n').reduce((memo, text) => {
      memo.insert(text, { 'grid-col': true })
      return memo
    }, delta)
    // insert grid cell line with empty line
    delta = new Array(rows).fill(0).reduce(memo => {
      let gridRowId = rowId()
      return new Array(columns).fill('\n').reduce((memo, text) => {
        memo.insert(text, { 'grid-cell-line': {row: gridRowId, cell: cellId()} });
        return memo
      }, memo)
    }, delta)

    this.quill.updateContents(delta, Quill.sources.USER)
    this.quill.setSelection(range.index + columns + 1, Quill.sources.API)
  }

  showGridTools (grid, quill, options) {
    this.grid = grid
    this.gridSelection = new GridSelection(grid, quill, options)
  }

  hideGridTools () {
    this.gridSelection && this.gridSelection.destroy()
    this.gridOperationMenu && this.gridOperationMenu.destroy()
    this.gridSelection = null
    this.gridOperationMenu = null
    this.grid = null
  }
}

Grid.keyboardBindings = {
  'grid-cell-line backspace': {
    key: 'Backspace',
    format: ['grid-cell-line'],
    collapsed: true,
    offset: 0,
    handler(range, context) {
      const [line, offset] = this.quill.getLine(range.index)
      if (!line.prev || line.prev.statics.blotName !== 'grid-cell-line') {
        return false
      }
      return true
    },
  },

  'grid-cell-line delete': {
    key: 'Delete',
    format: ['grid-cell-line'],
    collapsed: true,
    suffix: /^$/,
    handler() {},
  },

  'grid-cell-line enter': {
    key: 'Enter',
    shiftKey: null,
    format: ['grid-cell-line'],
    handler(range, context) {
      // bugfix: a unexpected new line inserted when user compositionend with hitting Enter
      if (this.quill.selection && this.quill.selection.composing) return
      const Scope = Quill.imports.parchment.Scope
      if (range.length > 0) {
        this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change
      }
      const lineFormats = Object.keys(context.format).reduce((formats, format) => {
        if (
          this.quill.scroll.query(format, Scope.BLOCK) &&
          !Array.isArray(context.format[format])
        ) {
          formats[format] = context.format[format];
        }
        return formats;
      }, {});
      // insert new cellLine with lineFormats
      this.quill.insertText(range.index, '\n', lineFormats['grid-cell-line'], Quill.sources.USER);
      // Earlier scroll.deleteAt might have messed up our selection,
      // so insertText's built in selection preservation is not reliable
      this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
      this.quill.focus();
      Object.keys(context.format).forEach(name => {
        if (lineFormats[name] != null) return;
        if (Array.isArray(context.format[name])) return;
        if (name === 'link') return;
        this.quill.format(name, context.format[name], Quill.sources.USER);
      });
    },
  },

  'grid-cell-line up': makeGridArrowHandler(true),
  'grid-cell-line down': makeGridArrowHandler(false),
  'down-to-grid': {
    key: 'ArrowDown',
    collapsed: true,
    handler(range, context) {
      const target = context.line.next
      if (target && target.statics.blotName === 'grid-view') {
        const targetCell = target.grid().rows()[0].children.head
        const targetLine = targetCell.children.head
        
        this.quill.setSelection(
          targetLine.offset(this.quill.scroll),
          0,
          Quill.sources.USER
        )

        return false
      }
      return true
    }
  },
  'up-to-grid': {
    key: 'ArrowUp',
    collapsed: true,
    handler(range, context) {
      const target = context.line.prev
      if (target && target.statics.blotName === 'grid-view') {
        const rows = target.grid().rows()
        const targetCell = rows[rows.length - 1].children.head
        const targetLine = targetCell.children.head
        
        this.quill.setSelection(
          targetLine.offset(this.quill.scroll),
          0,
          Quill.sources.USER
        )

        return false
      }
      return true
    }
  }
}

function makeGridArrowHandler (up) {
  return {
    key: up ? 'ArrowUp' : 'ArrowDown',
    collapsed: true,
    format: ['grid-cell-line'],
    handler(range, context) {
      // TODO move to grid module
      const key = up ? 'prev' : 'next'
      const targetLine = context.line[key]
      if (targetLine != null) return true

      const cell = context.line.parent
      const targetRow = cell.parent[key]

      if (targetRow != null && targetRow.statics.blotName === 'grid-row') {
        let targetCell = targetRow.children.head
        let totalColspanOfTargetCell = parseInt(targetCell.formats()['colspan'], 10)
        let cur = cell
        let totalColspanOfCur = parseInt(cur.formats()['colspan'], 10)

        // get targetCell above current cell depends on colspan
        while (cur.prev != null) {
          cur = cur.prev
          totalColspanOfCur += parseInt(cur.formats()['colspan'], 10)
        }
        
        while (targetCell.next != null && totalColspanOfTargetCell < totalColspanOfCur) {
          targetCell = targetCell.next
          totalColspanOfTargetCell += parseInt(targetCell.formats()['colspan'], 10)
        }

        const index = targetCell.offset(this.quill.scroll)
        this.quill.setSelection(index, 0, Quill.sources.USER)
      } else {
        const targetLine = cell.grid().parent[key]
        if (targetLine != null) {
          if (up) {
            this.quill.setSelection(
              targetLine.offset(this.quill.scroll) + targetLine.length() - 1,
              0,
              Quill.sources.USER
            )
          } else {
            this.quill.setSelection(
              targetLine.offset(this.quill.scroll),
              0,
              Quill.sources.USER
            )
          }
        }
      }
      return false;
    },
  };
}

function isGridCell (blot) {
  return blot.statics.blotName === GridCell.blotName
}

function isInGridCell (current) {
  return current && current.parent
    ? isGridCell(current.parent)
      ? true
      : isInGridCell(current.parent)
    : false
}

export default Grid;
