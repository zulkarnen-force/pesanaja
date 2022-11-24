
import express  from 'express'

import userController from '../controllers/user.controller.js'

let router = express.Router()

router.use("/users", userController)

router.use(function(req, res){
    res.status(404).json({error:"path not implemented"});
});

export default router