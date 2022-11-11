<script>
  import { onMount } from "svelte";
  import { v4 as uuidv4 } from "uuid";
  import Quill from "quill";
  import Toolbar from "quill/modules/toolbar";
  import BlotFormatter from "quill-blot-formatter";
  import { ImageDrop } from "quill-image-drop-module";
  import QuillBetterTable from "quill-better-table";
  import "quill-better-table/dist/quill-better-table.css";
  import "./Editor.css";
  import Grid from "./grid";

  const editorID = `f` + uuidv4();
  let editorObj = {};
  export let value = "";
  export let placeholder = "";
  export let width, height;
  let setSize = "";
  let widthUnit = width && width.includes("%") ? "" : "px";
  let heightUnit = height && height.includes("%") ? "" : "px";
  setSize += width && width.length > 0 ? `width:${width}${widthUnit};` : "";
  setSize +=
    height && height.length > 0 ? `height:${height}${heightUnit};` : "";

  export let toolbarOptions = [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }, "insert-table", "insert-grid"],
    ["link", "image", "video"],
  ];

  let options = {
    debug: "info",
    modules: {
      toolbar: toolbarOptions,
      blotFormatter: {},
      imageDrop: true,
      table: false,
      "better-table": {
        operationMenu: {
          items: {
            unmergeCells: {
              text: "Another unmerge cells name",
            },
          },
        },
      },
      grid: true,
    },
    keyboard: {
      bindings: QuillBetterTable.keyboardBindings,
    },
    placeholder: placeholder,
    theme: "snow",
  };

  Quill.register("modules/toolbar", Toolbar);
  Quill.register("modules/blotFormatter", BlotFormatter);
  Quill.register("modules/imageDrop", ImageDrop);
  Quill.register("modules/better-table", QuillBetterTable);
  Quill.register("modules/grid", Grid);

  onMount(async () => {
    editorObj[`${editorID}`] = await new Quill(`.${editorID}`, options);

    if (height && height.length > 0) {
      let toolbarHeight =
        document.querySelector(`#${editorID} .ql-toolbar`).offsetHeight + 5;
      setSize += `margin-bottom:${toolbarHeight}px;`;
    }

    editorObj[`${editorID}`].root.innerHTML = value;
    editorObj[`${editorID}`].on("text-change", function () {
      value = document.querySelector(`.${editorID} .ql-editor`).innerHTML;
    });
    document
      .querySelector(`#${editorID} .ql-insert-table`)
      .addEventListener("click", () => {
        let tableModule = editorObj[`${editorID}`].getModule("better-table");
        tableModule.insertTable(3, 3);
      });
    document
      .querySelector(`#${editorID} .ql-insert-grid`)
      .addEventListener("click", () => {
        let gridModule = editorObj[`${editorID}`].getModule("grid");
        gridModule.insertGrid(1, 2);
      });
  });
</script>

<div id={editorID} style={setSize} class="ql-area">
  <div class={editorID} />
</div>

<style lang="scss"></style>
