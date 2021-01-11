import svgCaptcha from 'svg-captcha';
class DemoController {
  constructor() { }
  async getCaptcha (ctx) {
    const newC = svgCaptcha.create({
      color: true,
      height: 38
    });
    ctx.body = {
      value: newC.data,
      code: 200,
    }
  }
}

export default new DemoController()
