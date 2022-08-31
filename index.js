/*
Author: Christopher Josepher
Descriptions: Web PORFOLIO BUILDER 
Company: Orbitechnology Inic
*/
const express =  require('express')
const color = require('colors')
const app = express()
// @desc importing route file to app
const porfolio = require('./routes/routePorfolio')
//@desc   - Database connection function call from the config enviroment variables
builderDB()

app.use('/builder/v1', porfolio )

// @desc  inintializing the port sing 2000 as a fall back port
const PORT = process.env.PORT || 2000



const server =app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} MODE ON PORT ${PORT}`.yellow.bold))
// Handle Unhandle promise rejection
process.on('unhandleRejection', (err, promise) => {
    console.log(`Error: ${err.message.red.bold}`)
    // close the server
    server.close(() => process.exit(1))
})