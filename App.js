/**
 *
 * <div id="parentDiv">
 *    <div id="childDiv">
 *      <h1 id="heading">Hello World in React!</h1>
 *    </div>
 * </div
 *
 */

const parent = React.createElement(
  "div",
  { id: "parentDiv" },
  React.createElement("div", { id: "childDiv" }, [
    React.createElement("h1", { id: "heading" }, "I'm the h1 tag!"),
    React.createElement("h2", { id: "heading2" }, "I'm the h1 tag!"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "Navnath" },
//   "Hello World in React!"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
