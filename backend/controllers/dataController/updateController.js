// update controller 
const { prisma } = require("../../db/prismaClient.js");

async function handleUpdateProfile(req, res, next) {
  try {
    const userId = parseInt(req.user.id, 10);
    const { bio, avatarUrl, status } = req.body;

    const updatedProfile = await prisma.profile.upsert({
      where: { userId: userId },
      update: { bio, avatarUrl, status },
      create: { userId, bio, avatarUrl, status },
    });

    res.json({ message: "Profile updated successfully", profile: updatedProfile });
  } catch (error) {
    next(error);
  }
};

async function handleAddFriend(req, res, next) {
  try {
    const userId = 1 // parseInt(req.user.id, 10);
    const friendId = parseInt(req.body.friendId, 10);

    // Check if the friendship already exists
    const existingFriendship = await prisma.friendship.findFirst({
      where: {
        OR: [
          { userId: userId, friendId: friendId },
          { userId: friendId, friendId: userId },
        ],
      },
    });

    console.log(existingFriendship, "eeeee");

    // if the friendship exists, unfriend
    if (existingFriendship) {
      await prisma.friendship.delete({
        where: { id: existingFriendship.id },
      });
      return false;
    }

    // Create the friendship
    await prisma.friendship.create({
      data: {
        userId: 1,
        friendId: friendId,
      },
    });

    return true;
  } catch (error) {
    console.log(error, "prisma err");
    next(error);
  }
};

module.exports = { handleUpdateProfile, handleAddFriend };
