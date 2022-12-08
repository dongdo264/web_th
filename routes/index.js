const studentRouter = require("./student");

function route(app) {
    app.use("/", studentRouter);
    
}
module.exports = route;