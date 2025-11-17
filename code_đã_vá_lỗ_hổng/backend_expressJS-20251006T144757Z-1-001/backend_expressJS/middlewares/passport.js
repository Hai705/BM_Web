const passport =require('passport');
const localStrategy=require('passport-local').Strategy
const JwtStrategy=require('passport-jwt').Strategy
const {ExtractJwt} =require('passport-jwt')
const {JWT_SECRET} =require('../config/index')

const User =require('../models/User');
// giup ta co the nhan biet va ma hoa dc token gui len la cua server tao ra 
passport.use(new JwtStrategy(
{
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken('authorization'),  // lay token de unlock
    secretOrKey:JWT_SECRET
},
    
async(payload,done)=>{
    try{
        // console.log('payload',payload);
        const user=await User.findById(payload.sub);
        if(!user) return done(null,false);
        done(null,user);
    }
    catch(error){
        done(error,false);
    }
}))

//passport local
passport.use(new localStrategy({
    usernameField:'email'
}, async (email,password,done)=>{
    try{
        console.log("!!! CẢNH BÁO: Đang thực thi truy vấn ĐĂNG NHẬP không an toàn với $where VÀ so sánh mật khẩu thô !!!");

        const user = await User.findOne({
            $where: `this.email == '${email}' && this.password == '${password}'`
        });

        if (!user) {
            return done(null, false);
        }
        
        done(null, user);
    }
    catch(error){
        done(error,false);
    }
}))