import Cat from "../../models/CatSchema";

export default (router) => {
    router
        // Get all cats
        .get('/cats', async ctx => {
            const cats = await Cat.find();
            if (cats) ctx.body = cats;
        })
        // Increase a cat's vote by one
        .put('/cats/:id', async ctx => {
            ctx.body = await Cat.updateOne({_id: ctx.params.id}, {votes: ctx.body.votes})
        });
};
