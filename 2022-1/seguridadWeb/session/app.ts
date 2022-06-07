const express=require("express");
const session=require("express-session");
const app=express();

const MYSQLStore=require('express-mysql-session');

let options = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'Tiquetes'
};

const sessionStore = new MYSQLStore(options);

app.use(session({
	key: 'session_cookie_name',
	secret: '123',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));

app.get('/', (req:any, res:any)=>{
    req.session.usuario="juan";
    req.session.rol="admin";
    req.session.visitas=req.session.visitas? ++req.session.visitas :1;
    res.send(`el usuario <strong>${req.session.usuario}</strong> ha visitado ${req.session.visitas}`)
})

app.listen(3000,(req:any,res:any)=>{
   console.log("servidor on");
});