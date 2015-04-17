module.exports = function(BaseModel)
{
    /**
     * Add "created" date to all new objects
     */
    BaseModel.observe('before save', function(ctx, next)
    {
        if (ctx.instance) 	ctx.instance.modified = Date.now();
        else 				ctx.data.modified = Date.now();

        next();
    });
};