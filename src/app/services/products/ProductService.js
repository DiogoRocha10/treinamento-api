module.exports = ({ productRepository }) => ({
    createProduct: async (data) => {
        return await productRepository.createProduct(data);
    },

    getProduct: async (data) => {
        return await productRepository.getProduct(data);
    },
    
    getProductId: async (id) => {
        return await productRepository.getProductId(id);
    }
});