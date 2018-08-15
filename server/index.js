const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(express.static("./public/build"));

const mc = require("./controllers/message_controller");

app.post("/api/messages", mc.create);
app.get("/api/messages", mc.read);
app.put("/api/messages/:id", mc.update);
app.delete("/api/messages/:id", mc.delete);

app.listen(port, () => console.log(`Server listening at port ${port}`));
