const express = require('express');
const router = express.Router();
const { ensureAuthenticated }=require('../config/auth');

//welcome page
router.get('/',(req,res)=>res.render('welcome'));

router.get('/home',ensureAuthenticated ,(req,res)=>
res.render('home',{
    name:req.user.name
}));
router.get('/wedding',ensureAuthenticated ,(req,res)=>
res.render('wedding',{
    name:req.user.name
}));
router.get('/festival',ensureAuthenticated ,(req,res)=>
res.render('festival',{
    name:req.user.name
}));
router.get('/form',ensureAuthenticated ,(req,res)=>
res.render('form',{
    name:req.user.name
}));
router.get('/birthday',ensureAuthenticated ,(req,res)=>
res.render('birthday',{
    name:req.user.name
}));
router.get('/corporate',ensureAuthenticated ,(req,res)=>
res.render('corporate',{
    name:req.user.name
}));
router.get('/social',ensureAuthenticated ,(req,res)=>
res.render('social',{
    name:req.user.name
}));
router.get('/gallery',ensureAuthenticated ,(req,res)=>
res.render('gallery',{
    name:req.user.name
}));
router.get('/blog',ensureAuthenticated ,(req,res)=>
res.render('blog',{
    name:req.user.name
}));
router.get('/contact',(req,res)=>
res.render('contact',{
    name:req.user.name
}));
module.exports =router;