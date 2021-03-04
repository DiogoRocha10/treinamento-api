module.exports = ({ productService }) => ({
    execute: async ({ id }) => {
        return await productService.updateProduct(id);
    }
});
