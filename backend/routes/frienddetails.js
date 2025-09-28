const friendDetailsRouter = require('express').Router();
const {getUserData} = require('../controllers/viewController');
const { handleAddFriend } = require('../controllers/dataController/updateController');  

friendDetailsRouter.get('/:friendId', async (req, res, next) => {
  try {
    const userData = await getUserData(req, res, next);
    return res.json(userData);
  } catch (error) {
    next(error);
  }
});

friendDetailsRouter.post('/:friendId', async (req, res, next) => {
  try {
   const friendshipStatus = await handleAddFriend(req, res, next);
    if (!(friendshipStatus)) {
     return res.status(201).json({message: "removed from friends"});
    } else {
     return res.status(201).json({message: "added to friends"});   
    }

  } catch (error) {
    next(error);
  }
}); 



module.exports = {friendDetailsRouter};