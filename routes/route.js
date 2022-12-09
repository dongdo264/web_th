const studentRouter = require("./studentRouter");

function route(app) {
    app.use("/", studentRouter);
}

module.exports = route;