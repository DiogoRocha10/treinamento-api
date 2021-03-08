module.exports = ({ productService, logger }) => ({
    execute: async (data) => {
        try {
            return await productService.getProduct(data);

        } catch (error) {
            logger.error(error)
            throw error
        }
    }
});