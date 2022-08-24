const router= require('express').Router();
router.get('/user',(req,res)=>{
    res.render('user')
});
router.post('/showing_user',(req,res)=>{
    const {name, surname}= req.body
    req.session.information={name,surname};
    req.flash('success', "Eres un bacan")
    res.redirect('/user_profile')
})
router.get('/user_profile',(req,res)=>{
    const user_info= req.session.information;
    delete req.session.user_info;
    res.render('user_profile',{user_info})
})
module.exports=router;