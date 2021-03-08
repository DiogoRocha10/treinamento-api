module.exports = ({ productService, logger }) => ({
    execute: async ({ id }, body) => {
        try {
            return await productService.updateProduct(id, body);

        } catch (error) {
            logger.error(error)
            throw error
        } 
    }
});
