module.exports = ({ productService, logger }) => ({
    execute: async body => { 
        try {
            return await productService.createProduct(body);

        } catch (error) {
            logger.error(error)
            throw error
        }
        
    }
});