<script>
	import { onMount } from 'svelte';
	import { v4 as uuidv4 } from 'uuid';
	import suneditor from 'suneditor';
	//import lang from "suneditor/src/lang";
	import {
		blockquote,
		align,
		font,
		fontSize,
		fontColor,
		hiliteColor,
		horizontalRule,
		list,
		formatBlock,
		lineHeight,
		template,
		paragraphStyle,
		textStyle,
		link,
		image,
		video,
		audio,
		math,
		imageGallery
	} from 'suneditor/src/plugins';
	import table from './editor/table';
	import 'suneditor/dist/css/suneditor.min.css';
	import '$scss/suneditor.scss';

	const editorID = `f` + uuidv4();
	let editorObj = {};
	export let value = '';
	export let placeholder = '';
	export let width = '100%';
	export let height = 'auto';
	export let toolbar = [
		['undo', 'redo'],
		['formatBlock', 'bold', 'underline', 'strike'],
		['fontColor', 'hiliteColor'],
		['align', 'list', 'table'],
		['link', 'image', 'video'],
		['fullScreen', 'codeView']
	];

	let editorOptions = {
		//lang: lang.ko,
		plugins: {
			blockquote,
			align,
			font,
			fontSize,
			fontColor,
			hiliteColor,
			horizontalRule,
			list,
			formatBlock,
			lineHeight,
			template,
			paragraphStyle,
			textStyle,
			link,
			image,
			video,
			audio,
			math,
			imageGallery,
			table
		},
		placeholder: placeholder,
		width: width,
		height: height,
		buttonList: toolbar,
		formats: [
			'h1',
			'h2',
			'h3',
			{
				tag: 'p',
				name: 'normal' || null,
				command: 'replace',
				class: ''
			}
		],
		icons: {
			undo: '<i class="fas fa-undo"></i>',
			redo: '<i class="fas fa-redo"></i>',
			bold: '<i class="fas fa-bold"></i>',
			underline: '<i class="fas fa-underline"></i>',
			italic: '<i class="fas fa-italic"></i>',
			strike: '<i class="fas fa-strikethrough"></i>',
			font_color: '<i class="fas fa-font"></i>',
			highlight_color: '<i class="fas fa-highlighter"></i>',
			align_left: '<i class="fas fa-align-left"></i>',
			align_center: '<i class="fas fa-align-center"></i>',
			align_right: '<i class="fas fa-align-right"></i>',
			align_justify: '<i class="fas fa-align-justify"></i>',

			list_bullets: '<i class="fas fa-list-ul"></i>',
			list_number: '<i class="fas fa-list-ol"></i>',
			table: '<i class="fas fa-table"></i>',
			link: '<i class="fas fa-link"></i>',
			image: '<i class="fas fa-image"></i>',
			video: '<i class="fas fa-video"></i>',
			expansion: '<i class="fas fa-expand"></i>',
			code_view: '<i class="fas fa-code"></i>'
		},
		resizingBar: false
	};

	onMount(async () => {
		let editor = `${editorID}`;
		editorObj[editor] = suneditor.create(editorID, editorOptions);
		editorObj[`${editorID}`].onChange = function (/** @type {string} */ contents) {
			value = contents;
		};
	});
</script>

<textarea id={editorID}>{value}</textarea>

<style lang="scss"></style>