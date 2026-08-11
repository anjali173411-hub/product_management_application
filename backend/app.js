const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.disable("x-powered-by");

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const productRoutes = require("./routes/productRoutes");

app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
