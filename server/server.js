
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth_routh.js')
const cors = require('cors');
const createDBConnection = require('./config/conDB.js');
// const authRoutes = require('./routes/auth_route.js')
// const usersRoutes = require('./routes/user_route.js')

const app = express();
app.use(cors())
dotenv.config();
app.use(express.json())

const PORT = process.env.PORT || 19546;

createDBConnection().then(() => {
    console.log('connected to the DataBase successfully!')
}).catch((err) => {
    console.log(err);
    throw new Error(err.message);
});


app.use("/register", require('./routes/auth_routh.js'))
app.use("/user", require('./routes/users_route.js'))
app.use("/posts", require('./routes/posts_route.js'))

app.listen(PORT, () => console.log(`Server Running On PORT ${PORT}`))


