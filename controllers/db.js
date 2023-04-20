const firebase = require("./../config/firebase");
const db=firebase.firestore();
const usercollection=db.collection("users");


exports.createtodo = async(req, res) => {
    if (!req.body.uid ) {
      return res.status(422).json({
        msg: "uid is required",
      
      });
    }
    let todo=req.body;
    let uid=req.body.uid;
    await usercollection.doc(uid).collection("todos")
    .add(todo).then((data)=>{
     
        return res.status(201).json({
          
          message:"Todo Create successfully"});
    }).catch(function(error){
        let errorMessage = error.message;
        return res.status(500).json({ error: errorMessage });
    });
   
  };

  
exports.getalltodo = async(req, res) => {
    if (!req.query.uid ) {
      return res.status(422).json({
        message: "uid is required",
      
      });
    }
    let uid=req.query.uid;

    
   await  usercollection.doc(uid).collection("todos").get().then((data)=>{
    let todos=data.docs.map((doc)=>({id:doc.id, ...doc.data()}));
        return res.status(201).json(todos);
    }).catch(function(error){
        let errorMessage = error.message;
        return res.status(500).json({ error: errorMessage });
    });
   
  };

  exports.updatetodo = async(req, res) => {
    if (!req.body.uid ) {
      return res.status(422).json({
        message: "uid is required",
      
      });
    }
    let uid=req.body.uid;
    let id=req.body.id;
    let todo=req.body;

    await usercollection.doc(uid).collection("todos").doc(id).update(todo).then(()=>{
        return res.status(201).json({
            id:id,
            message:"Todo is Update"});
    }).catch(function(error){
        let errorMessage = error.message;
        return res.status(500).json({ error: errorMessage });
    });
   
   
  };

  exports.deletetodo = async(req, res) => {
    if (!req.body.uid ) {
      return res.status(422).json({
        message: "uid is required",
      
      });
    }
    let uid=req.body.uid;
    let id=req.body.id;
  
    await usercollection.doc(uid).collection("todos").doc(id).delete().then(()=>{
        return res.status(201).json({
            id:id,
            message:"Todo delete"});
    }).catch(function(error){
        let errorMessage = error.message;
        return res.status(500).json({ error: errorMessage });
    });
   
   
  };