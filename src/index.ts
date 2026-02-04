import "dotenv/config";
import "reflect-metadata";
import express, { Request, Response } from 'express';
import router from './routers/web.router';
import { AppDataSource } from "./models/DataSource";

const app = express();
const port = process.env.PORT || 3000;
// Middleware for parsing JSON bodies (e.g., application/json)
app.use(express.json());

// Middleware for parsing URL-encoded bodies (e.g., application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true })); // `extended: true` uses the qs library for rich objects
// config static file

app.use(express.static('public'))

// config view 
app.set('view engine', 'ejs'); // Set EJS as the engine
app.set('views', './src/views');   // cau hinh thu muc view

app.use(router)

try {
    AppDataSource.initialize().then((conn) => {
        console.log("Data Source has been initialized!")
    }).catch(err => {
        console.log(err.message)
    })
} catch (error) {
    console.error("Error during Data Source initialization", error)
}


app.listen(port, () => {
    console.log(`server runing on: http://localhost:${port}`)
})