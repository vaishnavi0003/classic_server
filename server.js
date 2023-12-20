const products = require("./models/products")
const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
const port = process.env.PORT || 3001;
app.get("/products", async (req, res) => {
    try {
        const allProducts = await products.find({});
        res.json(allProducts);
    } catch (e) {
        console.log("Product fetch error:", e);
        res.status(500).json({ error: "Error fetching product data" });
    }
});

app.listen(port, () => {
    console.log("Server listening on port 3001")
})