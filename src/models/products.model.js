import  db  from "../config/firebase.js";

const productsCollection = db.collection("products");

//ALL PRODUCTS
export const getAllProducts = async () => {
    const snapshot = await productsCollection.get();

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};

//GET PRODUCT BY ID
export const getProductById = async (id) => {
    const doc = await productsCollection.doc(id).get();

    if(!doc.exists) {
        return null;
    }

    return {
        id: doc.id,
        ...doc.data()
    };
};

//NEW PRODUCT
export const createProduct = async (product) => {
    const docRef = await productsCollection.add(product);

    return await getProductById(docRef.id);
};

//UPDATE PRODUCT
export const updateProduct = async (id, data) => {
    await productsCollection.doc(id).update(data);

    return getProductById(id);
}

//DELETE PRODUCT
export const deleteProduct = async (id) => {
    await productsCollection.doc(id).delete();
}