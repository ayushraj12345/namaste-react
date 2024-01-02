// const heading = React.createElement(
//     "h1",
//     {id: "heading",className: "abc"},
//     "First React, Hello world!!"
//     );

// create nested structure
/*
<div id="parent">
    <div id="child">
        <h1>"nested h1 tag"</h1>
    </div>
</div>
*/

// ReactElement(object) 
const parent = React.createElement("div",{id:"parent"},
                React.createElement("div",{id: "child"},
                [React.createElement("h1",{},"nested h1 Tags"),
            React.createElement("h2",{},"Hello h2")]));
console.log(parent) //object
const rootNode = ReactDOM.createRoot(document.getElementById("root"));
rootNode.render(parent);