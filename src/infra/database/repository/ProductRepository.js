class ProductRepository {
    constructor({ productModel }) {
        this.productModel = productModel;
    }

    async createProduct(data) {
        return await this.productModel.create(data);
    }

    async getProduct(data) {
        return await this.productModel.find(data);
    }

    async getProductId(id) {
        return await this.productModel.find(id);
    }
}

module.exports = ProductRepository;
