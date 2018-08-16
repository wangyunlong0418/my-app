var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: '鞠翰雪好漂亮',
    name: '鞠翰雪'
  };

  await ctx.render('index', {
  });
})
module.exports = router;
