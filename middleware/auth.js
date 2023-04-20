
module.export =(req,res,next)=>{
    let id=req.query.id;
    
    if(!id){
       return res.status(201).json({msg:"unauthrised"});
    }else{
        next();
    }
};