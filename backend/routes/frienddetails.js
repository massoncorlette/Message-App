const friendDetailsRouter = require('express').Router();

friendDetailsRouter.get('/:friendId', async (req, res, next) => {
  res.json({message: "display friend details"});
});

friendDetailsRouter.post('/:friendId', async (req, res, next) => {
  res.json({message: "add as a friend"});
}); 

friendDetailsRouter.delete('/:friendId', async (req, res, next) => {
  res.json({message: "remove from friends"});
});

module.exports = {friendDetailsRouter};