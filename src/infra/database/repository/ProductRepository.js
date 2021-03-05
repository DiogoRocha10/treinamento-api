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
        const query = { 'id': id };
        return await this.productModel.find(query);
    }

    async updateProduct(id, data) {
        const query = { 'id': id };
        return await this.productModel.findOneAndUpdate({id}, data)
    }

    async deleteProduct(id) {
        const query = { 'id': id };
        return await this.productModel.remove(query);
    }
}

module.exports = ProductRepository;
