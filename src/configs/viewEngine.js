import config from "@babel/core/lib/config"
import express from "express"

const configViewEngine = (app)=> {
    app.use(express.static('./src/public'))
    app.set("view engine","ejs");
    app.set("views","./src/views")
}

export default configViewEngine;