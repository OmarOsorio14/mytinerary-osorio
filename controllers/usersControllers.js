const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const usersControllers = {

	signUp: async(req,res)=>{
		let {username, first_name, last_name, email, password, country, photo, from  } = req.body.userData
      try {
      	const userExists = await User.findOne({ username })

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
                res.json({
                  success: true, 
                  from:"signUp", 
                  message: "You have signed up successfully"
                }) 
              }else{
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
									from:[from],
                })              
                if (from !== "form-signUp") { 
                  await newUser.save()
                  res.json({
                    success: true, 
                    from:"signUp",
                    message: "You have signed up successfully with " +from
                  }) 
                } else {
                    await newUser.save()
                    res.json({
                        success: true, 
                        from:"signUp",
                        message: "You have signed up successfully"
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

			} else {
				if (from === "form-signUp") { 
					let passwordMatch =  userExists.password.filter(pass =>bcryptjs.compareSync(password, pass))
					if (passwordMatch.length >0) {
					const userData = {
						id:userExists._id,
						username: userExists.username,
						email: userExists.email,
						from:from}
						res.json({ success: true,  
											from:from,
											response: {userData }, 
											message:"wellcome again "+userData.username,
											})
					} else {
						res.json({ success: false, 
											from: from, 
											message:"your password don't match with database register"
										})
					}
				} 
			}
		} catch (error) {
				res.json({ success: false, message: "Something went wrong try again in a few minutes" })
		}
	}
}
module.exports = usersControllers