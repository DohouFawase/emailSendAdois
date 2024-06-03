import type { HttpContext } from '@adonisjs/core/http'

import SendMail from '#models/send_mail'
import { creatPostValidator } from '#validators/post'

export default class SendMailsController {
  
  async store({request, response}: HttpContext) {
  
    const payload = await request.validateUsing(creatPostValidator)
    const store = SendMail.create(payload)
    return response.status(201).json(store)
  }


  async index({response}: HttpContext) {
  
    const mails = await SendMail.all()
    return response.json(mails)
  }
  

  
}












