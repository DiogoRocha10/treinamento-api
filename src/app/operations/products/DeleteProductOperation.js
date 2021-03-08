module.exports = ({ productService, logger }) => ({
    execute: async ({ id }) => {
        try {
            return await productService.deleteProduct(id);

        } catch (error) {
            logger.error(error)
            throw error
        }
        
    }
});
