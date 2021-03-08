const AsyncMiddleware = require('src/interfaces/http/presentation/middlewares/AsyncMiddleware');


module.exports = opts => ({
    createProduct: AsyncMiddleware(async ctx => {
        const response = await opts.createProductOperation.execute(ctx.body);
        const serialize = opts.productSerialize.createProduct(response);
        return ctx.res.status(opts.httpConstants.code.CREATED).json(serialize);
    }),

    getProduct: AsyncMiddleware(async ctx => {
        const response = await opts.getProductOperation.execute(ctx.params);
        // const serialize = opts.productSerialize.getProduct(response);
        return ctx.res.status(opts.httpConstants.code.OK).json(response);
    }),
    
    getProductId: AsyncMiddleware(async ctx => {
        const response = await opts.getProductIdOperation.execute(ctx.params);
        const serialize = opts.productSerialize.getProductId(response);
        return ctx.res.status(opts.httpConstants.code.OK).json(serialize);
    }),

    updateProduct: AsyncMiddleware(async ctx => {
        const response = await opts.updateProductOperation.execute(ctx.params, ctx.body);
        const serialize = opts.productSerialize.updateProduct(response);
        return ctx.res.status(opts.httpConstants.code.OK).json(serialize);
    }),

    deleteProduct: AsyncMiddleware(async ctx => {
        const response = await opts.deleteProductOperation.execute(ctx.params);
        return ctx.res.status(opts.httpConstants.code.OK).json(response);
    }),
});
