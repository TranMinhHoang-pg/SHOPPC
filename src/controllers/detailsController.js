import pool from "../configs/connectDB";

const getdetailsController = async (req,res) => {
    let id = req.params.id
    let product = await pool.execute('select * from products where id = ?',[id])
    return res.render("details.ejs", {product: JSON.stringify( product[0])})
}

export default {
    getdetailsController
};