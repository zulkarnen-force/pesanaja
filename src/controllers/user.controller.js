import express from  'express'
let userController =  express.Router()
import User from  '../entities/user.js'


userController.get('/', async (req, res) => {
    // let users = await service.getUsers()
    // res.status(200).json(users)
    let users = await User.find()
    res.status(200).json(users)
})  


userController.get('/:id', async (req, res) => {
    // let user = await service.getUserById(req.params.id)
    // res.status(200).json(user)
})  


userController.post('/', async (req, res) => {
    // let {ok, result} = await service.saveNewUser(req.body)

    // console.log('result ', result)

    // console.log('Oke ', ok)
    // const errors = validationResult(req);

    //     if (!errors.isEmpty()) {
    //         return res.status(400).json({
    //             success: false,
    //             errors: errors.array()
    //         });
    //     }

    // if (!ok) {
    //     return res.status(400).json({
    //         'msg':'user exists'
    //     })
    // }

    // return res.status(201).json({
    //     'msg':'user has been created successfully',
    //     result
    // })
})  


export default userController 