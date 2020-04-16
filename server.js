const Vue = require('vue')
const Koa = require('koa')
const renderer = require('vue-server-renderer').createRenderer()

const server = new Koa()

server.use(async (ctx, next) => {
    const { request, response } = ctx
    const vue = new Vue({
        data: {
            url: request.url
        },
        template: `<div>url: {{url}}</div>`
    })
    await renderer.renderToString(vue).then(html=>{
        ctx.body = html
    })
})



server.listen(8080, () => {
    console.log('app is listening 8080')
})