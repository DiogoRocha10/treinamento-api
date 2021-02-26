module.exports = ({ productService }) => ({
    execute: async (data) => {
        return await productService.getProduct(data);
    }
});