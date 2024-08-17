import { Router } from 'express'
import { registerUser, login, studentsForm } from '../controllers/user.js'
import { ensureAuth } from '../middleware/auth.js'

const router = Router()

// Routes
router.post('/register',  registerUser)
router.post('/login', login)
router.get('/students/:document', ensureAuth, studentsForm)

export default router