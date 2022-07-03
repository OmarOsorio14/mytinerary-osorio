const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const sendVerification = require('./sendVerification')

const usersControllers = {

	signUp: async(req,res)=>{
		let {username, first_name, last_name, email, password, country, photo, from  } = req.body.userData
      try {
      	const userExists = await User.findOne({ email })
				const verification = false
				const uniqueString = crypto.randomBytes(15).toString('hex')
          if (userExists) {
            if (userExists.from.indexOf(from) !== -1) {
              res.json({ success: false,
                        from:"signUp", 
                        message: "You have already made your SignUp in this way, please Log In" })
            } else {
              const encryptedPassword = bcryptjs.hashSync(password, 10)

              userExists.from.push(from)
              userExists.password.push(encryptedPassword) 

              if(from === "form-signUp"){ 
                await userExists.save() 
								sendVerification(email,uniqueString)       
                res.json({
                  success: true, 
                  from:"signUp", 
                  message: "You have signed up successfully"
                })
              }else{
								userExists.verification = true
                userExists.save()
                res.json({ success: true,
                          from:"signUp", 
                          message: "We add "+from +" to your ways to Log In"
								})
              }
            }
            } else {
                const encryptedPassword = bcryptjs.hashSync(password, 10) 
            
                const newUser = await new User({
									username,
									first_name,
									last_name,
                  email,
                  password:[encryptedPassword],
									country,
									photo,
									uniqueString:uniqueString,
									verification:verification,
									from:[from],
                })              
                if (from !== "form-signUp") { 
									newUser.verification = true
                  await newUser.save()
                  res.json({
                    success: true, 
                    from:"signUp",
                    message: "You have signed up successfully with " +from
                  }) 
                } else {
                    await newUser.save()
										sendVerification(email,uniqueString)
                    res.json({
                        success: true, 
                        from:"signUp",
                        message: "You have signed up successfully, please verify your email address before login"
                    })
                } 
            }
        } catch (error) {
          res.json({ success: false, message: "Something went wrong try again in a few minutes" })
        }
	},
	logIn: async(req,res)=>{
		const { email, password,  from } = req.body.logedUser
		try {
			const userExists = await User.findOne({ email })

			if (!userExists) {
				res.json({ success: false, message: "Your user has not been registered, please make the signup process first" })

			} else if(userExists.verification){

				if (from === "form-signUp") { 
					let passwordMatch =  userExists.password.filter(pass =>bcryptjs.compareSync(password, pass))
					if (passwordMatch.length >0) {
					const userData = {
						id:userExists._id,
						username: userExists.username,
						first_name: userExists.first_name,
						last_name: userExists.last_name,
						email: userExists.email,
						country: userExists.country,
						photo: userExists.photo,
						from:from}
						const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 60 * 60 * 24})
						res.json({ success: true,  
											from:from,
											response: {token, userData }, 
											message: `welcome back ${userData.username}!`
											})
					} else {
						res.json({ success: false, 
											from: from,
											message:"your credentials don't match with database register"
										})
					}
				}else{
					let passwordMatch =  userExists.password.filter(pass =>bcryptjs.compareSync(password, pass))
					if (passwordMatch.length >0) {
					const userData = {
						id:userExists._id,
						username: userExists.username,
						first_name: userExists.first_name,
						last_name: userExists.last_name,
						email: userExists.email,
						country: userExists.country,
						photo: userExists.photo,
						from:from}
						const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 60 * 60 * 24})
						res.json({ success: true,  
											from:from,
											response: {token, userData }, 
											message: `welcome back ${userData.username}!`
											})
					} else {
						res.json({ success: false, 
											from: from, 
											message: `there is no register from ${from}, please Sign Up with this way first`
										})
					}
				}
			}else{
				res.json({
					success: false,
					from: from,
					message: `validate your account`})
			}
		} catch (error) {
				res.json({ success: false, message: "Something went wrong try again in a few minutes"  })
		}
	},
	verifyMail: async (req, res) => {
		const {string} = req.params
		const user = await User.findOne({uniqueString: string})

		if (user) {
			user.verification = true
			await user.save()
			res.redirect("http://localhost:3000/login")
		}
		else {res.json({
			success: false,
			message: `email has not account yet!`})
		}
	},
	verifyToken:(req, res) => {
		if(req.user){
			res.json({
				success: true,
				response:{id: req.user.id,
								username: req.user.username,
								first_name: req.user.first_name,
								last_name: req.user.last_name,
								email: req.user.email,
								photo: req.user.photo,
								country: req.user.country,
							from: "token"},
				message: "welcome back "+req.user.username
			})
		}else{
			res.json({
				success: false, 
				message: "Sessions expires, please sign in again."
			})
		}
	},

}
module.exports = usersControllers