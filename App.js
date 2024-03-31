import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTML Element (when we render into dom)

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// console.log(heading);

// JSX - HTML like syntax or more like XML but not HTML or XML. JSX is a react element. which creates a object.
// JSX transpiled before it reaches the JS Engine. What is transpiled? Tranpiled means this code will converted to the code which browser can understand
// Transpiling is done by PARCEL. PARCEL has bable. and bable job is to transpiled JSX into ReactElement.

// JSX => React.createElement => ReactElement-JS Object => HTML Element (when we render into dom)
// React Element

const Title = () => (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);

// console.log(heading);

// Reacct Component
// Class based component - OLD
// Functional Component - NEW

// React Functional Component - Just a normal javascript function which return a React Element. Afunction which is returing some JSX is functional component.

const number = 1000;
const HeadingComponent = () => {
  return (
    <div id="ccontainer">
      <Title />
      {Title()}
      {console.log(number, "Test2")}
      <h1>Namaste React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent />);
