import detailsController from '../controllers/detailsController'


const froutes = (app) => {
    app.get("/details", detailsController.getdetailsController )
}

export default froutes;