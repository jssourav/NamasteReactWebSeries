/**
   <div id="parent">
        <div id="child">
            <h1></h1>
        </div>
        <div id="child2">
            <h1></h1>
        </div>
    </div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World from React"), // make it array to pass siblings
    React.createElement("h1", { id: "heading2" }, "This is a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello World from React - child 2"), // make it array to pass siblings
    React.createElement("h1", {}, "This is a h2 tag - child 2"),
  ]),
]);

// creating React Element
// What is React Element? => It is a javaScript Object!
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // this render method will convert the 'heading' object into a h1 tag and put inside dom
