import { getData } from "../controllers/default"

const express = require('express')
const defaultRouter = express.Router()

defaultRouter.post("/collect", getData)

module.exports = defaultRouter