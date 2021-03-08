const createProduct = response => {    
    const { id, name, valueUnitary, amount } = response;    
    return { id, name, valueUnitary, amount };
};

// const getProduct = response => {
//     const { id, name, valueUnitary, amount } = response;    
//     return { id, name, valueUnitary, amount };
// };

const getProductId = response => {
    const { id, name, valueUnitary, amount } = response;    
    return { id, name, valueUnitary, amount };
};

const updateProduct = response => {
    const { id, name, valueUnitary, amount } = response;    
    return { id, name, valueUnitary, amount };
};



module.exports = () => ({ 
    createProduct,
    getProductId,
    // getProduct,
    updateProduct
});