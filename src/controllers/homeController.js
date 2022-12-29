import pool from "../configs/connectDB";
let getHomeController = async (req,res) => {
    // let data =[]
    // // simple query
    // connection.query(
    // 'SELECT * FROM `products`',
    // function(err, results, fields) {
    //     results.map(row => {
    //        data.push({
    //         ID: row.ID,
    //         name: row.Name,
    //         img: row.Image
    //        })
    //     })
        
// })
    const [rows, fields ] = await pool.execute('SELECT * FROM `products');
    return res.render("index.ejs",{products: rows})}
export default {
    getHomeController
};