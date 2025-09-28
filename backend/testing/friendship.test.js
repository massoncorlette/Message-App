const {friendDetailsRouter} = require("../routes/frienddetails");

const request = require("supertest");
const express = require("express");
const app = express();

// setting up a new express app, avoiding starting app.listen in app.js
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/friends", friendDetailsRouter);

test("Friendship added", done => {
  request(app)
    .post("/friends/1")
    .send({ friendId: 2 })
    .expect({ message: "added to friends" })
    .expect(201, done);
});
