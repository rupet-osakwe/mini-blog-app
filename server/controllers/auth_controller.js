const express = require('express')
const createDBConnection = require('../config/conDB.js')
const bcrypt = require('bcrypt')
const register = (req, res) => {

    // res.json('this is the registration route')
    const que = 'SELECT * FROM users WHERE email = ? OR username = ?'
    createDBConnection.dbCon(que, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err)
        if (data.length) return res.status(409).json("User already exists!");

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        const q = "INSERT INTO users(`username`, `email`, `password`)VALUES(?)"
        const values = [
            req.body.username,
            req.body.email,
            hashedPassword
        ];
        dbCon.query(q, [values], (err, data) => {
            if (err) return res.json(err)
            console.log('Data', data)
            return res.status(200).json("User  has been created.")
        })
    })
}
const logIn = (req, res) => {


}
const logOut = (req, res) => {

}
module.exports = { register, logIn, logOut }