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
            path: '/',
            validation: {
                body: ctx.productSchema.create,
            },
            handler: ctx.productController.createProduct
        },
        {
            method: 'get',
            path: '/',
            validation: {},
            handler: ctx.productController.getProduct
        },
        {
            method: 'get',
            path: '/:id',
            validation: {},
            handler: ctx.productController.getProductId
        },
        {
            method: 'put',
            path: '/:id',
            validation: {},
            handler: ctx.productController.updateProduct
        },
        {
            method: 'delete',
            path: '/:id',
            validation: {},
            handler: ctx.productController.deleteProduct
        },
    ];
};
