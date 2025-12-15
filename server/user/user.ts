import express from 'express'

const userRouter = express.Router()

userRouter.post('/signup', (req, res) => {
  const userInfo = req.body
  console.log(userInfo)
  res.json(userInfo)
})
userRouter.post('/login', (req, res) => {
  const userInfo = req.body
  console.log(userInfo)
  res.json(userInfo)
})

export default userRouter
