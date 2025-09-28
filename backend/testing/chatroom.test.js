// importing the index module to test
const {chatRouter} = require("../routes/chats");

const request = require("supertest");
const express = require("express");
const app = express();

// setting up a new express app, avoiding starting app.listen in app.js
app.use(express.urlencoded({ extended: false }));
app.use("/chats", chatRouter);

test("New Board Creation Works", done => {
  request(app)
    .post("/chats")
    .type("form")
    .send({ roomName: "new chat room" })
    .expect("Content-Type", /json/)
    .expect({ message: "Chat Room Created Successfully" })
    .expect(201, done);
});

test("new message for Message Board works", done => {
  request(app)
    .post("/chats/1/message")
    .type("form")
    .send({ content: "new message" })
    .expect(201)
    .expect({ content: "new message", message: "Message sent successfully"}, done);
});