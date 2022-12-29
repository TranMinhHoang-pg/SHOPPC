import homeController from '../controllers/homeController'
import detailsController from '../controllers/detailsController'
const routes = (app) => {
    app.get("/", homeController.getHomeController )
    app.get("/details/:id", detailsController.getdetailsController )
}

export default routes;