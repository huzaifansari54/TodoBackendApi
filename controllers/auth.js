const firebase = require("./../config/firebase");

// signup
exports.signup = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(422).json({
      email: "email is required",
      password: "password is required",
    });
  }
  firebase
    .auth()
    .createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then((data) => {
      
      return res.status(201).json(data.user.uid);
    })
    .catch(function (error) {
      let errorMessage = error.message;
        return res.status(500).json({ error: errorMessage });
      
    });
};

// signin 
exports.signin = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(422).json({
      email: "email is required",
      password: "password is required",
    });
  }
  firebase
    .auth()
    .signInWithEmailAndPassword(req.body.email, req.body.password)
    .then((user) => {
      return res.status(200).json(user.user.uid);
    })
    .catch(function (error) {
      
      let errorMessage = error.message;
      
        return res.status(500).json({ error: errorMessage });
      
    });
};

// exports.signout = (req, res) => {
//   if (!req.body.email || !req.body.password) {
//     return res.status(422).json({
//       email: "email is required",
//       password: "password is required",
//     });
//   }
//   firebase
//     .auth().signOut()
//     .then(() => {
//       return res.status(200).json({message:" user signout"});
//     })
//     .catch(function (error) {
      
//       let errorMessage = error.message;
      
//         return res.status(500).json({ error: errorMessage });
      
//     });
// };

// exports.currentUser = (req, res) => {
 
//  try{
//   const userid= firebase
//   .auth().currentUser
//   return res.status(200).json(userid.uid);
//  }catch(error)
//  {
//   return res.status(500).json({message:error});

//  }
    
// };