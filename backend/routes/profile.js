const { Router } = require("express");

const profileRouter = Router();

profileRouter.get('/', async (req, res, next ) => {
  res.json({message: "display profile details"});
});

profileRouter.put('/', async (req, res, next ) => {
  res.json({message: "profile details updated"});
}); 

profileRouter.put('/avatar', async (req, res, next ) => {
  res.json({message: "profile avatar updated"});
});

profileRouter.delete('/', async (req, res, next ) => {
  res.json({message: "profile deleted"});
});

module.exports = {profileRouter};
