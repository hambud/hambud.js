# hambud.JS
Small Javascript library for fun

https://cdn.jsdelivr.net/gh/hambud/hambud.js@main/utilities.js


### How to use it?

Copy and save this code to html file:
```
<html><body></body>
<script type="application/javascript" src="https://cdn.jsdelivr.net/gh/hambud/hambud.js@main/utilities.js"></script>
<script>
// Place your code here
</script></html>
```

Simple Counter with hambud.JS:
```
<html><body></body>
<script type="application/javascript" src="https://cdn.jsdelivr.net/gh/hambud/hambud.js@main/utilities.js"></script>
<script>
pageTitle("Welcome");
set("body",{css:{
			backgroundColor: "#123",
			color: "#def"
		}
	},[
    h1({text: "hambud.JS"}),
    div({},[
        input({id: "counter", type: "text", value: 0, css:{
			height: "50px",
			width: "50px",
			fontSize: "20pt",
			textAlign: "center",
			margin: "5px"
		}}),
        button({text: "Counter", css:{
			borderRadius: "10px",
			padding: "15px"
		},events:{
			click: () => {
				counter.value = parseInt(get("#counter").value) + 1;
			}
		}})
    ])]);
</script></html>
```