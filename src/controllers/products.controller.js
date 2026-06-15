import * as ProductService from "../services/products.service.js";

export async function getAllProducts(req, res) {
    try{
        const products = await ProductService.getAllProducts();

        return res.status(200).json(products);
    } catch(error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export async function getProductById(req, res) {
    try{
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({
                message: "ID Requerido."
            });
        }

        const product = await ProductService.getProductById(id);

        return res.status(200).json(product);
    
    } catch(error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export async function createProduct(req, res) {
    try{
        const { name, price, stock, category } = req.body;

        if(
            !name ||
            price === undefined ||
            stock === undefined ||
            category === undefined
        ) {
            return res.status(400).json({
                message: "Faltan campos obligatorios."
            });
        }

        const product = await ProductService.createProduct(req.body);

        return res.status(201).json(product);
    
    } catch(error) {
        return res.status(500).json({
            message: error.message
        })
    }
};

export async function updateProduct(req, res) {
    try{
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({
                message: "ID Requerido."
            });
        }

        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "Debe enviar datos para actualizar."
            });
        }

        const updatedProduct = await ProductService.updateProduct(
            id,
            req.body
        );

        return res.status(200).json(updatedProduct);

    } catch(error) {
        return res.status(500).json({
            message: error.message
        })
    }
};

export async function deleteProduct(req, res) {
    try{
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({
                message: "ID Requerido."
            });
        }

        await ProductService.deleteProduct(id);

        return res.status(200).json({
            message: "Producto eliminado."
        });

    } catch(error) {
        return res.status(500).json({
            message: error.message
        });
    }
};