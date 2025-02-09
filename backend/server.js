import express from 'express'
import authRoutes from './routes/auth.route.js' 
import userRoutes from './routes/user.route.js' 
import dotenv from 'dotenv'
import connectMongoDB from './db/connectMongoDB.js'
import cookieParser from 'cookie-parser'
import {v2 as cloudinary} from 'cloudinary'
import postRoutes from './routes/post.route.js'
import notifcationRoutes from './routes/notifications.route.js'




dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
const app = express()
const PORT=process.env.PORT || 5000

app.use(express.json()) //to get data from body
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())



app.use("/api/auth",authRoutes)
app.use("api/users",userRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/notifications",notifcationRoutes)



app.listen(PORT, () => { 
    console.log(`app listening on port ${PORT}!`)
    connectMongoDB()
    
})
