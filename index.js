const express =  require('express')
const color = require('colors')
const app = express()
const porfolio = require('./routes/routePorfolio')


app.use('/builder/v1', porfolio )



const PORT = process.env.PORT || 2000

const server =app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} MODE ON PORT ${PORT}`.yellow.bold))
// Handle Unhandle promise rejection
process.on('unhandleRejection', (err, promise) => {
    console.log(`Error: ${err.message.red.bold}`)
    // close the server
    server.close(() => process.exit(1))
})