const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{ 
    try {

    const query=`Update Users Set StatusId = 2 WHERE UserId = ${req.query.UserId}`;
    console.log(query);
    connection.query(query, (err, result) => {
        if (err) throw err;
        console.log('Data Updated successfully!');
        console.log(result);
        // send a response to the client
        console.log("Updated");
         res.redirect("http://localhost:3000/");
      });
    } catch (error) {
        // code to handle the error
        console.error("An error occurred: ", error);
        res.redirect("http://localhost:3000/");
    }
})

module.exports = router;