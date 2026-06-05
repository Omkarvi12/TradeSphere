const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const HoldingsModel = require("./model/HoldingsModel");

const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");
const UserModel = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "TradeSphere Backend is Running 🚀"
  });
});

 app.get("/addHoldings", async (req, res) => {
  let tempHoldings = [
    {
      name: "BHARTIARTL",
      qty: 2,
      avg: 538.05,
      price: 541.15,
      net: "+0.58%",
      day: "+2.99%",
    },
    {
      name: "HDFCBANK",
      qty: 2,
      avg: 1383.4,
      price: 1522.35,
      net: "+10.04%",
      day: "+0.11%",
    },
    {
      name: "HINDUNILVR",
      qty: 1,
      avg: 2335.85,
      price: 2417.4,
      net: "+3.49%",
      day: "+0.21%",
    },
    {
      name: "INFY",
      qty: 1,
      avg: 1350.5,
      price: 1555.45,
      net: "+15.18%",
      day: "-1.60%",
      isLoss: true,
    },
    {
      name: "ITC",
      qty: 5,
      avg: 202.0,
      price: 207.9,
      net: "+2.92%",
      day: "+0.80%",
    },
    {
      name: "KPITTECH",
      qty: 5,
      avg: 250.3,
      price: 266.45,
      net: "+6.45%",
      day: "+3.54%",
    },
    {
      name: "M&M",
      qty: 2,
      avg: 809.9,
      price: 779.8,
      net: "-3.72%",
      day: "-0.01%",
      isLoss: true,
    },
    {
      name: "RELIANCE",
      qty: 1,
      avg: 2193.7,
      price: 2112.4,
      net: "-3.71%",
      day: "+1.44%",
    },
    {
      name: "SBIN",
      qty: 4,
      avg: 324.35,
      price: 430.2,
      net: "+32.63%",
      day: "-0.34%",
      isLoss: true,
    },
    {
      name: "SGBMAY29",
      qty: 2,
      avg: 4727.0,
      price: 4719.0,
      net: "-0.17%",
      day: "+0.15%",
    },
    {
      name: "TATAPOWER",
      qty: 5,
      avg: 104.2,
      price: 124.15,
      net: "+19.15%",
      day: "-0.24%",
      isLoss: true,
    },
    {
      name: "TCS",
      qty: 1,
      avg: 3041.7,
      price: 3194.8,
      net: "+5.03%",
      day: "-0.25%",
      isLoss: true,
    },
    {
      name: "WIPRO",
      qty: 4,
      avg: 489.3,
      price: 577.75,
      net: "+18.08%",
      day: "+0.32%",
    },
  ];

  try {
    for (const item of tempHoldings) {
      const newHolding = new HoldingsModel({
        name: item.name,
        qty: item.qty,
        avg: item.avg,
        price: item.price,
        net: item.net,
        day: item.day,
      });

      await newHolding.save();
    }

    res.send("Done!");
  } catch (err) {
    console.error("Error adding holdings:", err);
    res.status(500).send("Failed to add holdings");
  }
});

app.get("/addPositions", async (req, res) => {
  let tempPositions = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];

  try {
    for (const item of tempPositions) {
      const newPosition = new PositionsModel({
        product: item.product,
        name: item.name,
        qty: item.qty,
        avg: item.avg,
        price: item.price,
        net: item.net,
        day: item.day,
        isLoss: item.isLoss,
      });

      await newPosition.save();
    }

    res.send("Done!");
  } catch (err) {
    console.error("Error adding positions:", err);
    res.status(500).send("Failed to add positions");
  }
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// Get single documents
app.get('/holdings/:id', async (req, res) => {
  try {
    const doc = await HoldingsModel.findById(req.params.id);
    if (!doc) return res.status(404).send('Not found');
    res.json(doc);
  } catch (err) {
    res.status(500).send('Error');
  }
});

app.get('/positions/:id', async (req, res) => {
  try {
    const doc = await PositionsModel.findById(req.params.id);
    if (!doc) return res.status(404).send('Not found');
    res.json(doc);
  } catch (err) {
    res.status(500).send('Error');
  }
});

app.get('/orders/:id', async (req, res) => {
  try {
    const doc = await OrdersModel.findById(req.params.id);
    if (!doc) return res.status(404).send('Not found');
    res.json(doc);
  } catch (err) {
    res.status(500).send('Error');
  }
});

// Update single documents
app.put('/holdings/:id', async (req, res) => {
  try {
    const updated = await HoldingsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).send('Not found');
    res.json(updated);
  } catch (err) {
    res.status(500).send('Error');
  }
});

app.put('/positions/:id', async (req, res) => {
  try {
    const updated = await PositionsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).send('Not found');
    res.json(updated);
  } catch (err) {
    res.status(500).send('Error');
  }
});

app.put('/orders/:id', async (req, res) => {
  try {
    const updated = await OrdersModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).send('Not found');
    res.json(updated);
  } catch (err) {
    res.status(500).send('Error');
  }
});

// Delete single documents
app.delete('/holdings/:id', async (req, res) => {
  try {
    const removed = await HoldingsModel.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).send('Not found');
    res.send('Deleted');
  } catch (err) {
    res.status(500).send('Error');
  }
});

app.delete('/positions/:id', async (req, res) => {
  try {
    const removed = await PositionsModel.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).send('Not found');
    res.send('Deleted');
  } catch (err) {
    res.status(500).send('Error');
  }
});

app.delete('/orders/:id', async (req, res) => {
  try {
    const removed = await OrdersModel.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).send('Not found');
    res.send('Deleted');
  } catch (err) {
    res.status(500).send('Error');
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("Order saved!");
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).send("Failed to save order");
  }
});

// Simple signup endpoint used by the frontend
app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password || !name) return res.status(400).json({ message: 'name, email and password required' });

    const existing = await UserModel.findOne({ email });
    if (existing) return res.status(409).json({ message: 'User already exists' });

    const user = new UserModel({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'internal error' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'email and password required' });

    const user = await UserModel.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    // Compare password using bcrypt if available
    let match = false;
    try {
      const bcrypt = require('bcryptjs');
      match = await bcrypt.compare(password, user.password);
    } catch (err) {
      match = password === user.password;
    }

    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    // For now return basic JSON (token/session not implemented)
    res.json({ message: 'Login successful', user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'internal error' });
  }
});

async function startServer() {
  try {
    if (uri) {
      await mongoose.connect(uri);
      console.log("DB connected!");
    } else {
      console.warn("MONGO_URL is not set. Skipping DB connection.");
    }

    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

startServer();