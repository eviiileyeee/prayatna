const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const authRoutes = require("./routes/authRoutes");
const searchRoutes = require("./routes/searchRoutes");
const notificationRoutes = require("./routes/notificationRoutes")
const findRoutes = require("./routes/findRoutes");
require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.use('/api/notifications', notificationRoutes);
app.use("/api/users",authRoutes);
app.use("/find",findRoutes);
app.use("/search",searchRoutes);
app.get("/",(req,res)=>   res.send("this is backend of Harendra prayatna prokject"));

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
