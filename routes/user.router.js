const userRouter = require('express').Router();

const {
    userGetController,
    userPostController,
    userPatchController,
    userDeleteController,
    userByIdGetController
} = require('../controllers/user.controller.js')


userRouter.get('/', userGetController);

userRouter.post('/', userPostController);

userRouter.get('/:id', userByIdGetController );


userRouter.patch('/:id', userPatchController);


userRouter.delete('/:id', userDeleteController )



module.exports = userRouter;