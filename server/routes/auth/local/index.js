const express = require('express');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const session = require('express-session')
const cookieParser = require('cookie-parser');

const Account = require('../../../models/account');

const getRegister = require('./handlers/getRegister');
const registerUser = require('./handlers/registerUser');
//const getLogin = require('./handlers/getLogin');
const loginUser = require('./handlers/loginUser');
const userLogout = require('./handlers/userLogout');

const router = express.Router();

router.use( cookieParser() );
router.use( session({ secret: 'supersecretworddonottelltoanyone' }) );

router.use( passport.initialize() );
router.use( passport.session() );

passport.use( new LocalStrategy( Account.authenticate() ) );
passport.serializeUser( Account.serializeUser() );
passport.deserializeUser( Account.deserializeUser() );

const successRedirect = '/reservas';
const failureRedirect = '/';
const failureFlash =  "Usuario o contraseña incorrectos";
const optionsPassAuth = { successRedirect, failureRedirect, failureFlash }

const passportAuthMiddleware = passport.authenticate('local', optionsPassAuth )

router.get('/register', getRegister);
router.post('/register', registerUser);
//router.get('/login', getLogin);
router.post('/login', passportAuthMiddleware, loginUser);
router.get('/logout', userLogout);

module.exports = router