const express = require("express");
const app = express();
const cors = require('cors');
const orderSummary=require("./order_summary.json")
app.use(cors());
app.use(express.json())



app.get("/userInformation", (req, res)=>{

       res.json(orderSummary.user)

})

app.get("/orderDetails", (req, res)=>{

  res.json(orderSummary)

})








module.exports = app