const express = require('express');
const mongoose = require('mongoose'); // Import mongoose
const app = express();
const PORT = 5000;
const cors = require('cors');
// MongoDB connection setup
mongoose.connect('mongodb+srv://fizaamjad377:ZWN3Ratp5VqzEqoA@cluster0.6uqkd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database connected'))
.catch(err => console.error('Database connection error:', err));

app.use(express.json());
app.use(cors());

// Importing routes
const authRoutes = require('./routes/auth');       // User authentication routes
const productRoutes = require('./routes/products'); // Product CRUD routes

// Setting up routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);

// Example route to test server
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
