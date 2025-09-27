const { Router } = require("express");

const profileRouter = Router();

profileRouter.get('/', async (req, res, next ) => {
  res.json({message: "display profile details"});
});

profileRouter.post('/', async (req, res, next ) => {
  res.json({message: "profile details updated"});
}); 

module.exports = {profileRouter};
