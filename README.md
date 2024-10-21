# hambud.JS
Small Javascript library for fun

https://cdn.jsdelivr.net/gh/hambud/hambud.js@main/utilities.js


### How to use it?

Copy and save this code to html file:
```
<html><body></body><script type="application/javascript" src="https://cdn.jsdelivr.net/gh/hambud/hambud.js@main/utilities.js"></script>
<script>
// Place your code here
</script></html>
```

Small example:
```
<html><body></body><script type="application/javascript" src="https://cdn.jsdelivr.net/gh/hambud/hambud.js@main/utilities.js"></script>
<script>
pageTitle("Welcome");
set("body",{
	css:{
		backgroundColor: "#123",
		color: "#def"
	}
	},[
    h1({text: "hambud.JS"}),
    div({},[
        input({type: "text", placeholder: "Write something"}),
        button({text: "Click Me", events:{
			click: () => {
				alert("Hello");
			}
		}})
    ])]);
</script></html>
```