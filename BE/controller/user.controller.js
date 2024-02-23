const User = require('../model/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userController = {};

userController.createUser = async(req,res) =>{
  try {
    const {name, email, password} = req.body;
    const user = await User.findOne({email}); // {email: email} 자바스크립트 심플 문법
    if(user) {
      throw new Error('이미 가입된 유저입니다.');
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new User({name,email, password: hash}) // name: name , email: email 을 줄인것
    await newUser.save();
    res.status(200).json({status:"Ok", data: newUser});
  } catch (error) {
    console.log('error',error);
    res.status(400).json({status:"Fail", error})
  }
}



module.exports = userController;