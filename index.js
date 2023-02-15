//Step 1 require expressjs
const express = require("express");
const cors = require("cors");

// Step 2
const app = express();
require('dotenv').config()
require("./models/db")();

//parse request of content-type - application/json
app.use(express.json());
app.use(cors({
  cors: "*"
}))
// parse request of content-type - x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

const productRoutes = require("./routes/product.routes");
const userRoutes = require("./routes/user.routes");

//STEP 3 
const PORT = 4000;


app.use((req, res, next) => {
  console.log("method:  %s url: %s", req.method, req.url);
  next()
})

app.get("/", (req, res) => {
  res.send("Hello People of the Earth");  
});

app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);

//STEP 4
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})