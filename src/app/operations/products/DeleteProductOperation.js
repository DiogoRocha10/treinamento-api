module.exports = ({ productService }) => ({
    execute: async ({ id }) => {
        return await productService.deleteProduct(id);
    }
});
