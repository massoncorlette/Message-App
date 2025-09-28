// viewController
const prisma = require("../db/prismaClient.js");

async function getAllData(req, res, next) {
  try {
      const users = await getUsers(req, res, next);
      const chatRooms = await getChatRooms(req, res, next);
      const userData = await getUserData(req, res, next);
      res.json({users, chatRooms, userData}); 
      
  } catch (error) {
    next(error);
  }
};

async function getUsers(req, res, next) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        alias: true,
        fname: true,
        lname: true,
      },
      include: {
        profile: true,
      },
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
};

async function getChatRooms(req, res, next) {
  try {
    const chatRooms = await prisma.chatRoom.findMany();
    res.json(chatRooms);
  } catch (error) {
    next(error);
  }
};

async function getUserData(req, res, next) {
  try {
    const userId = parseInt(req.user.id, 10);
    const userData = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        alias: true,
        fname: true,
        lname: true,
      include: {
        profile: true,
        friends: true
      },
  }});
    res.json(userData);
  } catch (error) {
    next(error);
  }
};

async function getChatRoom(req, res,next) {
  try {
    const chatId = parseInt(req.params.chatRoomId);
    const chatRoom = await prisma.chatRoom.findUnique({
      where: {id: chatId},
      include: {
        messages: {
          include: {
            user: {
              select: {
                id: true,
                alias: true,
                fname: true,
    }}}}}});
    res.json(chatRoom);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllData, getUserData, getChatRooms, getUsers, getChatRoom };
