const express = require("express");
const fs = require("fs");
const js2xmlparser = require("js2xmlparser");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});

app.post("/submit-bill", (req, res) => {
  //Parse the incoming data from the request body
  const data = req.body;

  //convert the json data to xml format using js2xmlparser
  const xml = js2xmlparser.parse("bill", data);

  //Open or create the XML file, and append the new data to it
  fs.appendFile("bill.xml", xml, (err) => {
    if (err) throw err;
    console.log("The Bill data was appended to file!");
  });

  //Send the response to the client side
  res.status(200).send("Bill added successfully");
});
