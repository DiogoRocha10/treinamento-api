const AsyncMiddleware = require('src/interfaces/http/presentation/middlewares/AsyncMiddleware');


module.exports = opts => ({
    createProduct: AsyncMiddleware(async ctx => {
        const response = await opts.createProductOperation.execute(ctx.body);
        return ctx.res.status(opts.httpConstants.code.CREATED).json(response);
    }),
    getProduct: AsyncMiddleware(async ctx => {
        const response = await opts.getProductOperation.execute(ctx.params);
        return ctx.res.status(opts.httpConstants.code.OK).json(response);
    }),
    getProductId: AsyncMiddleware(async ctx => {
        const response = await opts.getProductIdOperation.execute(ctx.params);
        return ctx.res.status(opts.httpConstants.code.OK).json(response);
    }),
    updateProduct: AsyncMiddleware(async ctx => {
        const response = await opts.updateProductOperation.execute(ctx.params);
        return ctx.res.status(opts.httpConstants.code.OK).json(response);
    }),
    deleteProduct: AsyncMiddleware(async ctx => {
        const response = await opts.deleteProductOperation.execute(ctx.params);
        return ctx.res.status(opts.httpConstants.code.OK).json(response);
    }),
});
