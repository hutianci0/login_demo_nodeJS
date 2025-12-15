import cors from 'cors'
import express from 'express'
import userRouter from './user/user.ts'

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use(userRouter)

app.listen(port, () => console.log('http://localhost:3001'))
