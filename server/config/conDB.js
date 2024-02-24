const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const createDBConnection = async () => {
    return await mysql.createConnection('mysql://avnadmin:AVNS_DRuPSviUMZMqNw2gK0U@mysql-blog-app-rupet-blog-app.a.aivencloud.com:19546/blog_app_db?ssl-mode=REQUIRED');
}

module.exports = createDBConnection;



// const dbCon = async () => {
//     const URI = process.env.DATABASE_URI;
//     const host = process.env.HOST
//     const password = process.env.DB_PASSWORD;
//     const userName = process.env.USER_NAME;
//     const dataBaseName = 'blog_app_db';
//     console.log("Database URI:", URI);
//     try {
//         await mysql.createConnection({
//             host: host,
//             user: userName,
//             port: 19546,
//             password: password,
//             database: dataBaseName,
//         });

//     } catch (err) {
//         console.log(err);
//         throw new Error(err.message)
//     }
// }
// module.exports = dbCon