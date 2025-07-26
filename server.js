require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const imageSearchRoutes = require('./routes/imageSearch');

const app = express();
app.use(cors());
app.use('/', imageSearchRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error(err));
