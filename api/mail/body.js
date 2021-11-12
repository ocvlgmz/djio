// const css = require('./global.css')
const body = {
    //attributes coming from req.body like { theme, name, email, job, purpose, date, time, link }
  props: {
      payload: {type:Object, required: true}
  },
  template: `
  <mj-wrapper full-width="full-width" background-color="#e2e2e2">
    <mj-section mj-class="blue">
        <mj-column>
            <mj-text mj-class="big">
                Hello {{payload.name}},
            </mj-text>
            <mj-text mj-class="big">
                Thanks for scheduling the {{payload.theme}}. <br>
                We'll focus on the particular interest you selected during the registration: {{payload.purpose}}
            </mj-text>
            <mj-text mj-class="big">
                Our call is scheduled for {{payload.sched}}
            </mj-text>
            <mj-text mj-class="big">
                <a style="color:#FABB28;" :href="payload.link">Click here to join the call</a>
            </mj-text>
            <mj-text mj-class="big">
                In order to maximize the value of our call, here a list of things you could prepare:
                    <ul>
                        <li>
                        The #1 priority for your business
                        </li>
                        <li>
                        2 or 3 essential questions you might have about digital trend
                        </li>
                        <li>
                        ROI timeline & expectation for your digital strategy efforts
                        </li>
                    </ul>
            </mj-text>
            <mj-text mj-class="big">
                That's it for now {{payload.name}}. <br> Looking forward to hearing from you soon!
            </mj-text>
            <mj-text mj-class="big">
                Best regards,<br> Oliver<br> 
                <a style="color:#e2e2e2;text-decoration:none;" href="https://digitaljam.io">DigitalJam.io</a>
            </mj-text>
        </mj-column>
    </mj-section>
</mj-wrapper>
`
}

module.exports = { body }