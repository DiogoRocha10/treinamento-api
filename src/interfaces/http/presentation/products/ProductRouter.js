module.exports = ({ container }) => {
    const ctx = container.cradle;

    return [
        /**
         * @swagger
         *  users/:
         *   post:
         *      tags:
         *          - User
         *      summary: This should create users.
         *      consumes:
         *        - application/json
         *      responses:
         *        200:
         *          description: User return with success.
         *        400:
         *          description: Bad Request.
         */
        {
            method: 'post',
            path: '/products',
            validation: {
                body: ctx.productSchema.create,
            },
            handler: ctx.productController.createProduct
        },
        {
            method: 'get',
            path: '/products',
            validation: {
                body: ctx.productSchema.create,
            },
            handler: ctx.productController.getProduct
        },
        {
            method: 'get',
            path: '/products/:products_id',
            validation: {
                body: ctx.productSchema.getProductId,
            },
            handler: ctx.productController.getProductId
        },
    ];
};
