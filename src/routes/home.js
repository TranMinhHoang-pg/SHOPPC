import homeController from '../controllers/homeController'


const routes = (app) => {
    app.get("/", homeController.getHomeController )
}

export default routes;