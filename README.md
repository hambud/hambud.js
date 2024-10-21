# hambud.JS
Small Javascript library for fun

https://cdn.jsdelivr.net/gh/hambud/hambud.js@main/utilities.js


# Comparison:

In HTML:
```
<body>
<h1>hambud.JS</h1>
<div>
    <input type="text" placeholder="Write something" />
    <button>Click Me</button>
</div>
</body>
```

In hambud.JS:
```
addChild("body",[
    h1({text: "hambud.JS"}),
    div({},[
        input({type: "text", placeholder="Write something"}),
        button({text: "Click Me"})
    ])
]);
```