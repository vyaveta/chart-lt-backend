import express from "express"
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import compression from "compression"
import cors from "cors"
const defaultRouter = require("./routes/default")


const app = express()
 
app.use(cors({
    credentials: true,
}))

app.use(compression());
app.use(cookieParser())
app.use(bodyParser.json())

app.options("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, Content-Length, X-Requested-With, X-Timezone-Offset, Timezone-Central"
    );
    res.sendStatus(200);
});

const server = http.createServer(app)

app.use("/", defaultRouter)

server.listen(8080, () => {
    console.log("server running on http://localhost:8080")
})