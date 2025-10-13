import app from "./app.js";
// import { pool} from "./db.js";

// pool.query("SELECT NOW()", (err, res) => {
//     console.log(err, res.rows);
//     app.listen(3000);
//     console.log
//     console.log("Server is running on http://localhost:3000");
//     pool.end();

// });

app.listen(3000);

console.log("Server is running on http://localhost:3000");