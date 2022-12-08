const express = require("express");
const router = express.Router();
const { userRegistration, userLogin } = require('../controllers/userController')
const { authentication, authorisation } = require('../middleware/auth');


router.post("/register", userRegistration)
router.post("/login", userLogin)


router.get("/user/:userId", authentication, getBookById)
router.put("/user/:userId", authentication, authorisation, updateBook)
router.delete("/user/:userId", authentication, authorisation, deletedbook)

router.all("/*", function (req, res){
    res.status(404).send({status :false, message: "URL not found."})
})


module.exports = router;