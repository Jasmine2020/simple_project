import Router from 'koa-router'
import demoController from '../api/DemoController'

const router = new Router()

router.get('/demo', demoController.getCaptcha)

export default router
