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

module.exports = { handleUpdateProfile };
