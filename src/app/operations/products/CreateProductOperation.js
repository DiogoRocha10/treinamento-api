module.exports = ({ productService }) => ({
    execute: async body => {  
        return await productService.createProduct(body);
    }
});