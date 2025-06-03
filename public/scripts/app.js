console.log("App.js is running")

var template = React.createElement(
    "h1",
    {id: "someid"},
    "This is JSX From app.js"
)

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot)