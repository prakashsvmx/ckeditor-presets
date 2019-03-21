/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.allowedContent = true;
	config.pasteFilter='plain-text';
	config.basicEntities = false;
	config.fillEmptyBlocks = false;
	config.tabSpaces = 0;
	config.forcePasteAsPlainText = true;
	config.entities = false;
	config.extraPlugins='htmlwriter,textmatch,autocomplete,codemirror,clipboard,textwatcher,placeholder,widget,widgetselection,notification,lineutils,dialogui,sourcedialog';
	config.codemirror = {
	// Define the language specific mode 'htmlmixed' for html  including (css, xml, javascript), 'application/x-httpd-php' for php mode including html, or 'text/javascript' for using java script only 
	mode: 'htmlmixed',
     // Set this to the theme you wish to use (codemirror themes)
	theme: 'material',
	lineNumbers:true,
	// Whether or not you want Brackets to automatically close themselves
	autoCloseBrackets: true,

     // Whether or not you want tags to automatically close themselves
	autoCloseTags: true,

     // Whether or not to automatically format code should be done when the editor is loaded
	autoFormatOnStart: true, 
	
	// Whether or not to automatically format code which has just been uncommented
	autoFormatOnUncomment: true,
	
	// Whether or not to continue a comment when you press Enter inside a comment block
	continueComments: true,

     // Whether or not you wish to enable code folding (requires 'lineNumbers' to be set to 'true')
	enableCodeFolding: true,
	
	// Whether or not to enable code formatting
	enableCodeFormatting: true,
	
	// Whether or not to enable search tools, CTRL+F (Find), CTRL+SHIFT+F (Replace), CTRL+SHIFT+R (Replace All), CTRL+G (Find Next), CTRL+SHIFT+G (Find Previous)
	enableSearchTools: false,
	
	// Whether or not to highlight all matches of current word/selection
	highlightMatches: true,

     // Whether, when indenting, the first N*tabSize spaces should be replaced by N tabs
	indentWithTabs: false,

     // Whether or not you want to show line numbers
	lineNumbers: true,
	
	// Whether or not you want to use line wrapping
	lineWrapping: true,

	// Whether or not you want to highlight matching braces
	matchBrackets: true,
	
	// Whether or not you want to highlight matching tags
	matchTags: true,

	// Whether or not to show the showAutoCompleteButton   button on the toolbar
	showAutoCompleteButton: true,
     
     // Whether or not to show the comment button on the toolbar
	showCommentButton: true,

	// Whether or not to show the format button on the toolbar
	showFormatButton: true,

     // Whether or not to show the search Code button on the toolbar
	showSearchButton: true,

     // Whether or not to show Trailing Spaces
	showTrailingSpace: true,
	
	// Whether or not to show the uncomment button on the toolbar
	showUncommentButton: true,

     // Whether or not to highlight the currently active line
	styleActiveLine: true,
	
	// "Whether or not to use Beautify for auto formatting On start
	useBeautifyOnStart: false,
	};
};
