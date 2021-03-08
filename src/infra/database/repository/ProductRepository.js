class ProductRepository {
    constructor({ productModel, logger}) {
        this.productModel = productModel;
        this.logger = logger
    }

    async createProduct(data) {
        try {
            return await this.productModel.create(data);

        } catch (error) {
            return await this.logger.error(error)
        }
    }

    async getProduct(data) {
        try {
            return await this.productModel.find(data);

        } catch (error) {
            return await this.logger.error(error)
        }
    }

    async getProductId(id) {
        try {
            const query = { 'id': id };
            return await this.productModel.findOne(query);

        } catch (error) {
            return await this.logger.error(error)
        }
    }

    async updateProduct(id, data) {
        try {
            const query = { 'id': id };
            return await this.productModel.findOneAndUpdate({id}, data)

        } catch (error) {
            return await this.logger.error(error)
        }
    }

    async deleteProduct(id) {
        try {
            const query = { 'id': id };
            return await this.productModel.findByIdAndDelete(query);

        } catch (error) {
            return await this.logger.error(error)
        }
    }
}

module.exports = ProductRepository;
