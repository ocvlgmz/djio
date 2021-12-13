const Vue = require('vue')
const { discoveryCallBody, growWithUsBody } = require('./body')
const mjml2html = require('mjml')
const renderer = require('vue-server-renderer').createRenderer({
  template: `
  <mjml>
    <mj-head>
      <mj-attributes>
        <mj-class name="blue" background-color="#4C6070" />
        <mj-class name="big" color="#FFF" font-size="20px" />
      </mj-attributes>
    </mj-head>
    <mj-body>
      <!--vue-ssr-outlet-->
    </mj-body>
  </mjml>
  `
})
// const context = {
//   title: 'vue ssr',
//   meta: `
//       <meta name="keyword" content="vue,ssr">
//       <meta name="description" content="vue srr demo">
//   `,
// }
// will return as a string, the full page with app content injected.

const renderHtml = async (req,res, next) => {
  console.log('renderHtml function..')
  let body = null
  let payload = req.body
  //if Discovery Call, let's format date of event for freindly email display
  if(req.body.sched){
    let { sched } = req.body
    let date = new Date(sched).toString()
    const time = new Date(date).getHours()
    const hour = date.search(time)
    const gmt = hour+8
    const offset = gmt+6
    sched = date.substr(0,hour)+'at '+date.substr(hour,5)+date.substr(gmt,5)+date.substr(offset,1)+' (Central European Time)'
    payload.sched = sched
    body = discoveryCallBody
  } 
  body = growWithUsBody
  console.log(payload)

  const app = new Vue({
    data: {
      payload: payload 
    },
    components: {
      Body: body,
    },
    template: `<Body :payload="payload" />`,
  })

  const html = await renderer.renderToString(app).then(html => {
      const final = html.replace(`data-server-rendered="true"`, '')
      return mjml2html(final)
    }).catch(err =>console.error(err))

  res.locals.string = html.html
  next()
}
module.exports = { renderHtml }