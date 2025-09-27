const Router = require("express");
const chatRouter = Router();
var jwt = require('jsonwebtoken');

chatRouter.post('/', async (req, res, next ) => {
  res.json({message: "new chat room created"});
});

chatRouter.get('/:chatRoomId', async (req, res, next ) => {
  res.json({message: "display chat messages"});
});

chatRouter.post('/:chatRoomId', async (req, res, next ) => {
  res.json({message: "chat message sent"});
}); 

module.exports = {chatRouter};