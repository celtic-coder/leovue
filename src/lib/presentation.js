function presentation(name, data, index, theme, codeTheme) {

  if (!name) { name = 'default' }
  if (!index) { index = 0 }
  if (!codeTheme) { codeTheme = 'zenburn'}
  if (!theme) { theme = 'black'}

  const html = `
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<base href="/static/reveal/"
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<title>${name}</title>
		<link rel="stylesheet" href="css/reveal.css">
		<link rel="stylesheet" href="css/theme/${theme}.css">

		<!-- Theme used for syntax highlighting of code -->
		<link rel="stylesheet" href="lib/css/${codeTheme}.css">

  <script>
    window.lconfig = {
      "presentationName": '${name}',
      "index": ${index},
      "appBase": true,
      "showAppTitle": true,
      "showHeader": true,
      "docTitle": "",
      "filename": "docs",
      "firstNodeAsTitle": true,
      "baseMode": "t",
      "viewTypes": [
        {"name": "Outline", "type": "t"},
        {"name": "Inline", "type": "a"},
        {"name": "Graphic Tree", "type": "d"},
        {"name": "Dendrogram", "type": "z"},
        {"name": "Nested Menu", "type": "n"}
      ]
    }
  </script>
  	</head>
	<body>
	  <script type="template" id="slideContent">
	  
        <section>
          <h2>Marvelous List</h2>
          <ul>
            <li>No order here</li>
            <li>Or here</li>
            <li>Or here</li>
            <li>Or here</li>
          </ul>
        </section>

        <section>
          <h2>Fantastic Ordered List</h2>
          <ol>
            <li>One is smaller than...</li>
            <li>Two is smaller than...</li>
            <li>Three!</li>
          </ol>
        </section>	  
	  
    </script>
	  <div id="app-base"></div>
		<script src="js/reveal.js"></script>
		<script src="lib/js/head.min.js"></script>
		<script src="js/manifest.js"></script>
		<script src="js/vendor.js"></script>
		<script src="js/app.js"></script>
		<script>
			// More info about config & dependencies:
			// - https://github.com/hakimel/reveal.js#configuration
			// - https://github.com/hakimel/reveal.js#dependencies
			// Reveal.initialize({});
		</script>
	</body>
</html>


  `
  return html
}

export {
  presentation
}
