const Router = require("express");
const chatRouter = Router();
var jwt = require('jsonwebtoken');

chatRouter.get('/:id', async (req, res, next ) => {
  res.json({message: "display chat messages"});
});

chatRouter.post('/:id', async (req, res, next ) => {
  res.json({message: "chat message sent"});
}); 

module.exports = {chatRouter};