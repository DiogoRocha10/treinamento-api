module.exports = ({ productService }) => ({
    execute: async (data) => {
        return await productService.get(data);
    }
});