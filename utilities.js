const get = (strElement, parent = document) => {
    try {
        switch (strElement.charAt(0)) {
            case '#': // ID selector (always returns a single element)
                return parent.querySelector(strElement); // Single element
            case '.': // Class selector (could return multiple)
            case '&': // Name selector
            case '@': // TagNameNS selector
            default: // Tag selector (could return multiple)
                const elements = parent.querySelectorAll(strElement);
                return elements.length === 1 ? elements[0] : elements; // Return single element if only one match, otherwise return NodeList
        }
    } catch (error) {
        console.error(`Error retrieving element: ${error.message}`);
        return null;
    }
};

const parent = (targetElement, parentLevel = 1) => {
    if (!targetElement || !targetElement.parentNode || parentLevel < 0) {
        console.warn("Invalid input for parent function.");
        return null;
    }
    if (parentLevel === 0) {
        return targetElement;
    }
    return parent(targetElement.parentNode, parentLevel - 1); // Recursive call
};

const set = (element, options = {}, children = []) => {
    if (element === null) {
        throw new Error("Invalid element provided to set function.");
    }
    element = typeof element === "string" ? document.querySelector(element) : element;
    // Handle element attributes (options)
    for (const [key, value] of Object.entries(options)) {
        switch (key) {
            case 'css':
                Object.assign(element.style, value);
                break;
            case 'text':
                element.textContent = value;
                break;
            case 'class':
                if (Array.isArray(value)) {
                    element.classList.add(...value); // Spread for array of classes
                } else {
                    element.classList.add(...value.split(" ")); // Split class string
                }
                break;
            case 'editable':
                element.contentEditable = value;
                break;
            case 'events':
                if (typeof value === 'object' && value !== null) {
                    for (const [eventType, handler] of Object.entries(value)) {
                        element.addEventListener(eventType, handler);
                    }
                }
                break;
            default:
                element.setAttribute(key, value);
        }
    }
    // Ensure children is always an array
    if (!Array.isArray(children)) {
        children = [children];
    }
    // Append child elements
    children.forEach((child) => {
        if (typeof child === 'string' || typeof child === 'number') {
            // Convert strings or numbers to text nodes
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            // Append if the child is a valid DOM node
            element.appendChild(child);
        } else if (typeof child === 'function') {
            // If the child is a function, execute it and append the result if it's a Node
            const result = child();
            if (result instanceof Node) {
                element.appendChild(result);
            } else {
                console.warn("Function did not return a valid node:", result);
            }
        } else {
            console.warn("Invalid child element: ", child);
        }
    });
    return element;
};

const create = (strElement, options = {}, children = []) => {
    const element = document.createElement(strElement);
    set(element, options, children);
    return element;
};

const addChild = (element, children) => {
    if (element === null) {
        throw new Error("Invalid element provided to set function.");
    }
    element = typeof element === "string" ? get(element) : element;
    // Ensure children is an array, even if it's a single element or null/undefined
    if (!Array.isArray(children)) {
        children = children ? [children] : [];
    }
    children.forEach((child) => {
        if (typeof child === "string" || typeof child === "number") {
            // Convert strings or numbers to text nodes
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            // Append only valid DOM nodes
            element.appendChild(child);
        } else {
            console.warn("Invalid child element: ", child);
        }
    });
};

const importJs = (jsFileName) => {
if(document.head.innerHTML.indexOf(jsFileName) == -1){    
    const jsScript = create("script", {src: jsFileName, defer:""});
    document.head.appendChild(jsScript);
}
};

/*** All of the HTML tags ***/
const a = (options = {}, children = []) => create("a", options, children);
const abbr = (options = {}, children = []) => create("abbr", options, children);
const address = (options = {}, children = []) => create("address", options, children);
const area = (options = {}) => create("area", options);
const article = (options = {}, children = []) => create("article", options, children);
const aside = (options = {}, children = []) => create("aside", options, children);
const audio = (options = {}, children = []) => create("audio", options, children);
const b = (options = {}, children = []) => create("b", options, children);
const base = (options = {}) => create("base", options);
const bdi = (options = {}, children = []) => create("bdi", options, children);
const bdo = (options = {}, children = []) => create("bdo", options, children);
const blockquote = (options = {}, children = []) => create("blockquote", options, children);
const body = (options = {}, children = []) => create("body", options, children);
const br = (options = {}) => create("br", options);
const button = (options = {}, children = []) => create("button", options, children);
const canvas = (options = {}, children = []) => create("canvas", options, children);
const caption = (options = {}, children = []) => create("caption", options, children);
const cite = (options = {}, children = []) => create("cite", options, children);
const code = (options = {}, children = []) => create("code", options, children);
const col = (options = {}) => create("col", options);
const colgroup = (options = {}, children = []) => create("colgroup", options, children);
const data = (options = {}, children = []) => create("data", options, children);
const datalist = (options = {}, children = []) => create("datalist", options, children);
const dd = (options = {}, children = []) => create("dd", options, children);
const del = (options = {}, children = []) => create("del", options, children);
const details = (options = {}, children = []) => create("details", options, children);
const dfn = (options = {}, children = []) => create("dfn", options, children);
const dialog = (options = {}, children = []) => create("dialog", options, children);
const div = (options = {}, children = []) => create("div", options, children);
const dl = (options = {}, children = []) => create("dl", options, children);
const dt = (options = {}, children = []) => create("dt", options, children);
const em = (options = {}, children = []) => create("em", options, children);
const embed = (options = {}) => create("embed", options);
const fieldset = (options = {}, children = []) => create("fieldset", options, children);
const figcaption = (options = {}, children = []) => create("figcaption", options, children);
const figure = (options = {}, children = []) => create("figure", options, children);
const footer = (options = {}, children = []) => create("footer", options, children);
const form = (options = {}, children = []) => create("form", options, children);
const h1 = (options = {}, children = []) => create("h1", options, children);
const h2 = (options = {}, children = []) => create("h2", options, children);
const h3 = (options = {}, children = []) => create("h3", options, children);
const h4 = (options = {}, children = []) => create("h4", options, children);
const h5 = (options = {}, children = []) => create("h5", options, children);
const h6 = (options = {}, children = []) => create("h6", options, children);
const head = (options = {}, children = []) => create("head", options, children);
const header = (options = {}, children = []) => create("header", options, children);
const hr = (options = {}) => create("hr", options);
const html = (options = {}, children = []) => create("html", options, children);
const i = (options = {}, children = []) => create("i", options, children);
const iframe = (options = {}, children = []) => create("iframe", options, children);
const img = (options = {}) => create("img", options);
const input = (options = {}) => create("input", options);
const ins = (options = {}, children = []) => create("ins", options, children);
const kbd = (options = {}, children = []) => create("kbd", options, children);
const labelTag = (options = {}, children = []) => create("label", options, children);
const legend = (options = {}, children = []) => create("legend", options, children);
const li = (options = {}, children = []) => create("li", options, children);
const link = (options = {}) => create("link", options);
const main = (options = {}, children = []) => create("main", options, children);
const map = (options = {}, children = []) => create("map", options, children);
const mark = (options = {}, children = []) => create("mark", options, children);
const meta = (options = {}) => create("meta", options);
const meter = (options = {}, children = []) => create("meter", options, children);
const nav = (options = {}, children = []) => create("nav", options, children);
const noscript = (options = {}, children = []) => create("noscript", options, children);
const object = (options = {}, children = []) => create("object", options, children);
const ol = (options = {}, children = []) => create("ol", options, children);
const optgroup = (options = {}, children = []) => create("optgroup", options, children);
const option = (options = {}, children = []) => create("option", options, children);
const output = (options = {}, children = []) => create("output", options, children);
const p = (options = {}, children = []) => create("p", options, children);
const param = (options = {}) => create("param", options);
const picture = (options = {}, children = []) => create("picture", options, children);
const pre = (options = {}, children = []) => create("pre", options, children);
const progress = (options = {}, children = []) => create("progress", options, children);
const q = (options = {}, children = []) => create("q", options, children);
const rp = (options = {}, children = []) => create("rp", options, children);
const rt = (options = {}, children = []) => create("rt", options, children);
const ruby = (options = {}, children = []) => create("ruby", options, children);
const s = (options = {}, children = []) => create("s", options, children);
const samp = (options = {}, children = []) => create("samp", options, children);
const script = (options = {}, children = []) => create("script", options, children);
const section = (options = {}, children = []) => create("section", options, children);
const select = (options = {}, children = []) => create("select", options, children);
const small = (options = {}, children = []) => create("small", options, children);
const source = (options = {}) => create("source", options);
const span = (options = {}, children = []) => create("span", options, children);
const strong = (options = {}, children = []) => create("strong", options, children);
const style = (options = {}, children = []) => create("style", options, children);
const sub = (options = {}, children = []) => create("sub", options, children);
const summary = (options = {}, children = []) => create("summary", options, children);
const sup = (options = {}, children = []) => create("sup", options, children);
const svg = (options = {}, children = []) => create("svg", options, children);
const table = (options = {}, children = []) => create("table", options, children);
const tbody = (options = {}, children = []) => create("tbody", options, children);
const td = (options = {}, children = []) => create("td", options, children);
const template = (options = {}, children = []) => create("template", options, children);
const textarea = (options = {}, children = []) => create("textarea", options, children);
const tfoot = (options = {}, children = []) => create("tfoot", options, children);
const th = (options = {}, children = []) => create("th", options, children);
const thead = (options = {}, children = []) => create("thead", options, children);
const time = (options = {}, children = []) => create("time", options, children);
const title = (options = {}, children = []) => create("title", options, children);
const tr = (options = {}, children = []) => create("tr", options, children);
const track = (options = {}) => create("track", options);
const u = (options = {}, children = []) => create("u", options, children);
const ul = (options = {}, children = []) => create("ul", options, children);
const variable = (options = {}, children = []) => create("var", options, children);
const video = (options = {}, children = []) => create("video", options, children);
const wbr = (options = {}) => create("wbr", options);
/******************************************************************************************************/

// const ajax = (url, doneFunction, isAsync = true, sendMethod = "GET", formData = null, headers = {}) => {
// const xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = () => {
//     if (xhttp.readyState === XMLHttpRequest.DONE) {
//     if (xhttp.status === 200) {
//         doneFunction(xhttp.responseText);
//     } else {
//         console.error(`Request to ${url} failed with status ${xhttp.status}`);
//     }
//     }
// };

// xhttp.open(sendMethod, url, isAsync);

// Object.entries(headers).forEach(([name, value]) => {
//     xhttp.setRequestHeader(name, value);
// });

// xhttp.send(formData);
// };
/******************************************************************************************************/
// const ajax = (url, doneFunction, isAsync = true, sendMethod = "GET", formData = null, headers = {}) => {
//     const options = {
//         method: sendMethod,
//         headers: headers,
//     };
//     if (formData) {
//         options.body = formData;
//     }
//     if (isAsync) {
//         fetch(url, options)
//         .then(response => {
//             if (!response.ok) {
//             throw new Error(`Request to ${url} failed with status ${response.status}`);
//             }
//             return response.text();
//         })
//         .then(doneFunction)
//         .catch(error => console.error(error));
//     } else {
//         (async () => {
//         try {
//             const response = await fetch(url, options);
//             if (!response.ok) {
//             throw new Error(`Request to ${url} failed with status ${response.status}`);
//             }
//             const data = await response.text();
//             doneFunction(data);
//         } catch (error) {
//             console.error(error);
//         }
//         })();
//     }
// };

const ajax = ({
        url,
        doneFunction,
        method = 'GET',
        async = true,
        body = null,
        headers = { 'Content-Type': 'application/json' },
    }) => {
    const options = {
        method: method,
        headers: headers,
    };
    if (body) {
        options.body = JSON.stringify(body);
    }
    const fetchPromise = fetch(url, options)
        .then(response => {
        if (!response.ok) {
            throw new Error(`Request to ${url} failed with status ${response.status}`);
        }
        return response.json();  // Automatically parse JSON
        })
        .then(doneFunction)
        .catch(error => console.error('Error:', error));
    // If the request should be async, return the promise
    if (async) {
        return fetchPromise;
    } else {
        // If synchronous, we use the async/await syntax (not generally recommended)
        (async () => {
        try {
            const response = await fetchPromise;
            doneFunction(response);
        } catch (error) {
            console.error('Error:', error);
        }
        })();
    }
};  

const getCellFromTable = (tblElement, intRow, intCol) => {
    const table = elmId(tblElement);
    if (table && table.rows && table.rows[intRow] && table.rows[intRow].cells) {
        return table.rows[intRow].cells[intCol];
    }
    return null;
};

const initParameter = (initFunction) => {
    if (location.search !== "") {
        const arrPar = location.search.replace("?", "").split("&");
        const arrParLen = arrPar.length;
        const arrParVal = [];
        for (let i = 0; i < arrParLen; i++) {
        arrParVal.push(arrPar[i].split("=")[1]);
        }
        initFunction(arrParVal);
    }
};

const getKeyCode = () => window.event.keyCode;

const IntervalTimer = (repeatFunction, intervalSeconds) => {
    let interval = null;
    let status = false;
    let runCount = 0;
    const start = () => {
        interval = setInterval(() => {
        repeatFunction();
        runCount++;
        }, intervalSeconds);
        status = true;
    };
    const stop = () => {
        clearInterval(interval);
        status = false;
        runCount = 0;
    };
    return { start, stop };
};

const displayWindowSize = () => [
    document.body.clientWidth,
    document.body.clientHeight,
];

const pageTitle = (strTitle) => {
    document.title = strTitle;
};

const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const isNotEmptyEnter = (stringVar, event) => {
    return stringVar.trim() !== "" && event.key === "Enter";
};

const getUnique2DArray = (inputArray) => {
    const uniqueElements = [...new Set(inputArray.map(JSON.stringify))].map(JSON.parse);
    return uniqueElements;
};