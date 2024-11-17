const express = require('express');
const app = express();
require("dotenv").config();
const PORT = 3000;

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

const mockData = [
    { id: 1, name: "Laptop", price: 20000 },
    { id: 2, name: "Computer", price: 40000 },
    { id: 3, name: "Keyboard", price: 10000 },
  ];

  
  // to get all product
  app.get("/mockData", (req, res) => {
    res.json(mockData); // to send the products array as a response
  });

  // to get a product by id
  app.get("/mockData/:id", (req, res) => {
    const mockData = mockData.find((b) => b.id === parseInt(req.params.id)); // to find the product by id
    if (!mockData) return res.status(404).json({ message: "Product not found" }); // to send a 404 status code and a message if the product is not found
    res.json(mockData); // to send the product as a response
  });


// to create a new product
app.post("/mockData", (req, res) => {
    const { name, price } = req.body; // to get the name and price from the request body
    const newProduct = { id: mockData.length + 1, name, price }; // to create a new product object
    mockData.push(newProduct); // to add the new product to the products array
    res.status(201).json(newProduct); // to send the new product as a response
  });
  
  // to update a book
  app.put("/mockData/:id", (req, res) => {
    const mockData = mockData.find((b) => b.id === parseInt(req.params.id)); // to find the product by id
    if (!mockData) return res.status(404).json({ message: "Product not found" }); // to send a 404 status code and a message if the book is not found
  
    const { name, price } = req.body; // to get the name and price from the request body
    mockData.name = name; // to update the name of the product
    mockData.price = price; // to update the price of the product
    res.json(mockData); // to send the updated product as a response
  });
  
  // to delete a product
  app.delete("/mockData/:id", (req, res) => {
    const index = mockData.findIndex((b) => b.id === parseInt(req.params.id)); // to find the index of the product by id
    if (index === -1) return res.status(404).json({ message: "Book not found" }); // to send a 404 status code and a message if the product is not found
  
    mockData.splice(index, 1); // to delete the product from the books array
    res.status

  });