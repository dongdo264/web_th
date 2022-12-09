const express = require('express');
const route = require("./routes/route");
var bodyParser = require('body-parser');

const app = express();


app.use(express.urlencoded());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


route(app);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
