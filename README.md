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

The same Simple Counter with plain Javascript:
```
<html><body></body>
<script type="application/javascript">
document.title = "Welcome";
document.body.style.backgroundColor = "#123";
document.body.style.color = "#def";
const h1 = document.createElement("h1");
h1.textContent = "Native JavaScript";
document.body.appendChild(h1);
const div = document.createElement("div");
const input = document.createElement("input");
input.id = "counter";
input.type = "text";
input.value = 0;
input.style.height = "50px";
input.style.width = "50px";
input.style.fontSize = "20pt";
input.style.textAlign = "center";
input.style.margin = "5px";
div.appendChild(input);
const button = document.createElement("button");
button.textContent = "Counter";
button.style.borderRadius = "10px";
button.style.padding = "15px";
button.onclick = () => {
  const counter = document.querySelector("#counter");
  counter.value = parseInt(counter.value) + 1;
};
div.appendChild(button);
document.body.appendChild(div);
</script></html>
```