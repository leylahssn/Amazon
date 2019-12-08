require("console.table");
const mysql = require("mysql")
const connection = mysql.createConnection({
    host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "Sanaa_0807",
  database: "bamazon"
})

connection.connect(function(error){
if (error){
    console.log (error)
}
showproducts()
});

function showproducts(){
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.table(res);
})};