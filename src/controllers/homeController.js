import connection from "../configs/connectDB";
const getHomeController = (req,res) => {
    let data =[]
    // simple query
    connection.query(
    'SELECT * FROM `products`',
    function(err, results, fields) {
        results.map(row => {
           data.push({
            ID: row.ID,
            name: row.Name,
            img: row.Image
           })
        })
        
        return res.render("index.ejs",{products: data})
    })
    
}

export default {
    getHomeController
};