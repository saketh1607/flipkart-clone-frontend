import productModel from "../../models/productModel.js";

const getAllProducts = async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await productModel.find({}).sort({ createdAt: -1 });
        
        if (!products || products.length === 0) {
            return res.status(404).send({
                success: false,
                message: "No Products Found!",
                errorType: "productNotFound",
            });
        }
        
        // Return all products with success status
        res.status(200).send({ 
            success: true, 
            products,
            count: products.length
        });
    } catch (error) {
        console.log("Get All Products Error: " + error);
        res.status(500).send({
            success: false,
            message: "Error in getting All Products",
            error,
        });
    }
};

export default getAllProducts;