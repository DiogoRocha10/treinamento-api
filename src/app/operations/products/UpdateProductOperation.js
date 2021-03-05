module.exports = ({ productService }) => ({
    execute: async ({ id }, body) => {
        return await productService.updateProduct(id, body);
    }
});
