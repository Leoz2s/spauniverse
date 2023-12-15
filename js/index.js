import {Router} from './router.js'

const navElement = document.querySelector("nav");

const Route = new Router

Route.addRoute("/", "/pages/home.html")
Route.addRoute("/universe", "/pages/universe.html")
Route.addRoute("/exploration", "/pages/exploration.html")
Route.addRoute(404, "/pages/404.html")

navElement.addEventListener("click", (event) => Route.router(event))

window.onpopstate = () => Route.handleRoute()
Route.handleRoute()