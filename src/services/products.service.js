import * as ProductModel from "../models/products.model";

//GET ALL PRODUCTS
export async function getAllProducts() {
    return await ProductModel.getAllProducts();
}

//GET PRODUCT BY ID
export async function getProductById(id) {
    const product = await ProductModel.getProductById(id);

    if(!product){
        throw new Error("Producto no encontrado.");
    }

    return product;
}

//CREATE NEW PRODUCT
export async function createProduct(productData) {
    const { name, price, stock, category } = productData;

    if(!name) {
        throw new Error("El nombre es obligatorio.");
    }

    if(price <= 0) {
        throw new Error("El precio del producto debe ser mayor a 0.");
    }

    if(stock < 0) {
        throw new Error("El stock no puede ser negativo.");
    }

    return await ProductModel.createProduct(productData);
};

//UPDATE PRODUCT BY ID
export async function updateProduct(id, productData) {
    const existingProduct = await ProductModel.getProductById(id);

    if(!existingProduct) {
        throw new Error("Producto no encontrado.");
    }

    return await ProductModel.updateProduct(
        id,
        productData
    );
}

//DELETE PRODUCT
export async function deleteProduct(id) {
    const existingProduct = await ProductModel.getProductById(id);

    if(!existingProduct) {
        throw new Error("Producto no encontrado.");
    }

    await ProductModel.deleteProduct(id);
}