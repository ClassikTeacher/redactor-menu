
import { PrismaClient } from '@prisma/client'
const express = require('express')
const router = require('./router/index.ts')
const busboy = require('busboy')
const fileupload = require("express-fileupload");



const PORT = process.env.PORT || 5000
const app = express()
const prisma = new PrismaClient()
app.use(express.json())
app.use(fileupload());
app.use(express.static('images_menu'))
app.use('/api', router)


app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))

