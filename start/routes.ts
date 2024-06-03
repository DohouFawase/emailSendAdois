/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import SendMailsController from '#controllers/send_mails_controller'
import router from '@adonisjs/core/services/router'

// router.get('/', async () => {
//   return {
//     hello: 'world',
//   }
// })

router.post('sendMail', [SendMailsController, 'store']).as('api')
router.get('sendMail', [SendMailsController, 'index'])

