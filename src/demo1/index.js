const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  // ctx.set('X-Response-Time', `${ms}ms`);
});

// logger
app.context.xx = 'xy';

app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method}--${ctx.url} : ${ctx.xx} - ${ms}`);
});

// response

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
console.log('server started at http://localhost:3000');
