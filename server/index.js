const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()

app.use(express.json({extended: true}))
mongoose.set('strictQuery', true)

//app.use('/api/slider', require('./routes/slider.routes'))

const PORT = config.get('port')

const start = async () => {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => console.log(`Port: ${PORT}`))
    } catch (e) {
        process.exit(1)
    }
}

start()
