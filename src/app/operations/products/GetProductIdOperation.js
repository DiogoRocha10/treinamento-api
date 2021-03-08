module.exports = ({ productService, logger }) => ({
    execute: async ({ id }) => {
        try {
            return await productService.getProductId(id);

        } catch (error) {
            logger.error(error)
            throw error
        }
        
    }
});
