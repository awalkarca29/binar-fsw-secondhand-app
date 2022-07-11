const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const formidable = require("express-formidable-v2");
const notifRouter = require("./routes/notif.routes.js");
const productRoutes = require("./routes/product.routes.js");
const PORT = process.env.PORT || 8001;

const corsOptions = {
  origin: "*",
};

app.use(formidable());

app.use(notifRouter);

// CORS configuration
app.use(cors(corsOptions));

// Load env variable
dotenv.config();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//Routing
app.get("/", (req, res) => {
  res.json({
    message: "Index API",
  });
});

app.listen(PORT, () => {
  console.log(`App listen to port: ${PORT}`);
});

module.exports = app;
