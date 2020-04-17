//JavaScript on the web lives inside the HTML document.
//In HTML, JavaScript code must be inserted between <script> and </script> tags:
<script>
  ...
</script>

//You can place any number of scripts in an HTML document.
//Typically, the script tag is placed in the head of the HTML document.
//There is also a <noscript> tag, its content will be shown if the client's browser doesn't support JS scripts.
//It's a good idea to place scripts at the bottom of the <body> element.
//This can improve page load, because HTML display is not blocked by scripts loading.

//JavaScript can be placed in the HTML page's <body> and <head> sections.
//Remember that the script, which is placed in the head section, will be executed before the <body> is rendered.
//If you want to get elements in the body, it's a good idea to place your script at the end of the body tag.

//The <script> tag can take two attributes, language and type, which specify the script's type.
//The language attribute is deprecated, and should not be used.
//The type attribute is also no longer required, as JavaScript is the default HTML scripting language
 <script type="text/javascript">
       alert("This is an alert box!");
 </script>
//In this example, we created an alert box inside the script tag, using the alert() function

//Scripts can also be placed in external files.
//External scripts cannot contain <script> tags.
//External scripts are useful and practical when the same code is used in a number of different web pages.
//Having JS scripts in separate files makes your code much readable and clearer.
//JavaScript files have the file extension .js.
//To use an external script, put the name of the script file in the src (source) attribute of the <script> tag.
 <script src="demo.js"></script>
//The result of the previous example will be identical to the result when we included the JavaScript within the HTML file

//You can place an external script reference in <head> or <body>, whichever you prefer.
//The script will behave as if it were located exactly where the <script> tag is located.
/*
Placing a JavaScript in an external file has the following advantages:
- It separates HTML and code.
- It makes HTML and JavaScript easier to read and maintain.
- Cached JavaScript files can speed up page loads.
*/
