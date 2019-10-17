angularjstexteditor v1.1.0
===========

## Release notes

Now you can now add multiple platforms videos that have the ability to embed

## Requirements

1. `AngularJS` ≥ `1.3.x`
2. `Rangy` ≥ `1.3.x`, Both rangy-core and rangy-selectionsaverestore are required. (There is a minified combination of these two included in the dist folder)
3. `Font-Awesome` ≥ `4.x` for the default icons on the toolbar
1. `Bootstrap` ≥ `3.x` for the default styles (Can use `bootstrap-css-only`, you must add this to your bower or include this manually)
5. NOTE: please check the requirements for earlier releases, if these are an issue.

### Where to get it

**NOTE:** Our `angularjstexteditor-sanitize.js` and angular.js's `angular-sanitize.js` are the SAME file, you must include one or the other but not both. We highly recommend using `angularjstexteditor-sanitize.js` as it loosens some parts of the sanitizer that are far too strict for our uses and adds some more features we need.

**Via Bower:**

Run `bower install angularjstexteditor` from the command line.
Include script tags similar to the following:
```html
<link rel='stylesheet' href='/bower_components/angularjstexteditor/dist/angularjstexteditor.css'>
<script src='/bower_components/angularjstexteditor/dist/angularjstexteditor-rangy.min.js'></script>
<script src='/bower_components/angularjstexteditor/dist/angularjstexteditor-sanitize.min.js'></script>
<script src='/bower_components/angularjstexteditor/dist/angularjstexteditor.min.js'></script>
```

**Via NPM:**

Run `npm install angularjstexteditor` from the command line.
Include script tags similar to the following:
```html
<link rel='stylesheet' href='/node_modules/angularjstexteditor/dist/angularjstexteditor.css'>
<script src='/node_modules/angularjstexteditor/dist/angularjstexteditor-rangy.min.js'></script>
<script src='/node_modules/angularjstexteditor/dist/angularjstexteditor-sanitize.min.js'></script>
<script src='/node_modules/angularjstexteditor/dist/angularjstexteditor.min.js'></script>
```
Install using commonjs (eg componentjs, Webpack, Browserify):
```
angular.module('myModule', [require('angular-sanitize'), require('angularjstexteditor')]);
```
Optionally, install angularjstexteditor-sanitize.min.js by requiring it BEFORE requring angularjstexteditor:
```
require('angularjstexteditor/dist/angularjstexteditor-sanitize.min');
angular.module('myModule', [require('angularjstexteditor')]);
```
For CSS support with Webpack, install the style-loader, css-loader (and postcss-loader) and configure the loader in your webpack.config.js similar to the following:
```
loaders: [
  {test: /\.css$/, loader: 'style!css!postcss'}
]
```

**Via CDNJS:**

Include script tags similar to the following:
```html
<script src='http://cdnjs.cloudflare.com/ajax/libs/angularjstexteditor/1.5.0/angularjstexteditor-rangy.min.js'></script>
<script src='http://cdnjs.cloudflare.com/ajax/libs/angularjstexteditor/1.5.0/angularjstexteditor-sanitize.min.js'></script>
<script src='http://cdnjs.cloudflare.com/ajax/libs/angularjstexteditor/1.5.0/angularjstexteditor.min.js'></script>
```

**Via jsDelivr:**

Include script tag similar to the following: (For details on how this works see: [https://github.com/jsdelivr/jsdelivr#load-multiple-files-with-single-http-request](https://github.com/jsdelivr/jsdelivr#load-multiple-files-with-single-http-request))
```html
<script src='http://cdn.jsdelivr.net/g/angular.angularjstexteditor@1.5.0(angularjstexteditor-rangy.min.js+angularjstexteditor-sanitize.min.js+angularjstexteditor.min.js)'></script>
```

**Via Github**

Download the code from [https://github.com/vbauermann/angularjstexteditor/releases/latest](https://github.com/vbauermann/angularjstexteditor/releases/latest), unzip the files then add script tags similar to the following:
```html
<link rel='stylesheet' href='/path/to/unzipped/files/dist/angularjstexteditor.min.css'>
<script src='/path/to/unzipped/files/dist/angularjstexteditor-rangy.min.js'></script>
<script src='/path/to/unzipped/files/dist/angularjstexteditor-sanitize.min.js'></script>
<script src='/path/to/unzipped/files/dist/angularjstexteditor.min.js'></script>
```

### Usage

1. Include (`rangy-core.js` and `rangy-selectionsaverestore.js`) or `angularjstexteditor-rangy.min.js` in your project using script tags
2. Include `angularjstexteditor-sanitize.js` or `angularjstexteditor-sanitize.min.js` in your project using script tags
3. Include (`angularjstexteditorSetup.js` and `angularjstexteditor.js`) or `angularjstexteditor.min.js` (angularjstexteditorSetup.js is included inside angularjstexteditor.min.js)
4. Add a dependency to `angularjstexteditor` in your app module, for example: ```angular.module('myModule', ['angularjstexteditor'])```.
5. Create an element to hold the editor and add an `ng-model="htmlVariable"` attribute where `htmlVariable` is the scope variable that will hold the HTML entered into the editor:
```html
<div angularjstexteditor ng-model="htmlVariable"></div>
```
OR
```html
<angularjstexteditor ng-model="htmlVariable"></angularjstexteditor>
```
This acts similar to a regular AngularJS / form input if you give it a name attribute, allowing for form submission and AngularJS form validation.

Have fun!

**Important Note:** Though angularjstexteditor supports the use of all attributes in it's input, please note that angulars ng-bind-html **WILL** strip out all of your style attributes if you are using `angular-sanitize.js`.

For Additional options see the [github Wiki](https://github.com/vbauermann/angularjstexteditor/wiki).

### Issues?

angularjstexteditor uses ```execCommand``` for the rich-text functionality.
That being said, its still a fairly experimental browser feature-set, and may not behave the same in all browsers - see http://tifftiff.de/contenteditable/compliance_test.html for a full compliance list.
It has been tested to work on Chrome, Safari, Opera, Firefox and Internet Explorer 8+.
If you find something, please let me know - throw me a message, or submit an issue request!

### FAQ

1. **Toolbar shows up with some being blank instead of icons**<br/>
You need to include font-awesome on your page or nothing will show up.
1. **Youtube Insert embeds a ```<img>``` tag and aren't showing the video.**<br/>
The problems with iFrames are that they are a security risk so the sanitizer by default strips them out. Instead of changing the sanitizer to allow iFrames we use a placeholder for youtube videos which has the added advantage of allowing you to edit their size and placement in the editor. To display the youtube videos when you aren't in the editor use the following html: ```<div ta-bind ng-model="data.htmlcontent"></div>```. This invokes our custom renderers to convert the ```<img>``` tags back into the youtube video you expect.
2. **But I want to use Youtube outside of angular**<br/>
You'll have to apply the renderers manually, see comment in issue [#469](https://github.com/vbauermann/angularjstexteditor/issues/469#issuecomment-68650506) for details.
3. **IE Is automatically converting typed links to `<a href...>` tags**<br/>
This is a known issue with IE, to prevent this run the following javascript after page load: `document.execCommand("AutoUrlDetect", false, false)`. See [#475](https://github.com/vbauermann/angularjstexteditor/issues/475) for details.
4. **Error `"angularjstexteditor Error: An editor with the name already exists"` occurs**<br/>
See Issue [#240](https://github.com/vbauermann/angularjstexteditor/issues/240) for specific details on why this occurs and how to resolve it.

## Developer Notes

When checking out, you need a node.js installation, running `npm install` and then `bower install` will get you setup with everything to run the unit tests and minification.
All changes should be done in the src folder, running `grunt compile` to compile the app or use `grunt watch` to compile the files as you save them.
When you are ready to create A PR check that `grunt` passes without errors and you have created tests for your feature if necessary.

## Customization

It is possible to override the toolbar by using a decorator in the module's .config block. Simply set the taOptions.toolbar to an array of arrays comprised of button names. Each array of button names represents a button group. The default toolbar can be represented like so:
```html
  taOptions.toolbar = [
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
      ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
      ['html', 'insertImage','insertLink', 'insertVideo', 'wordcount', 'charcount']
  ];
```
New buttons can be created using taRegisterTool. Examples can be found inside demo/static-demo.html

## License

This project is licensed under the [MIT license](http://opensource.org/licenses/MIT).


## Contributers

Special thanks to all the contributions thus far!

For a full list see: https://github.com/vbauermann/angularjstexteditor/graphs/contributors


