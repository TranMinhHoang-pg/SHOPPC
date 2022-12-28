import express from 'express'
import configViewEngine from './configs/viewEngine';
import routes from './routes/home';
import connection from './configs/connectDB'
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000



// config view engine ejs
configViewEngine(app);
routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})