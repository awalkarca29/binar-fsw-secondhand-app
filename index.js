const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const formidable = require("express-formidable-v2");
const notifRouter = require("./routes/notif.routes.js");
const userRoutes = require("./routes/user.routes.js");
const productRoutes = require("./routes/product.routes.js");
const bargainRoutes = require("./routes/bargain.routes.js");
const PORT = process.env.PORT || 8001;

const corsOptions = {
  origin: "*",
};

app.use(formidable());

app.use(notifRouter);

app.use(userRoutes);

app.use(productRoutes);

app.use(bargainRoutes);
// CORS configuration
app.use(cors(corsOptions));

// Load env variable
dotenv.config();

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
