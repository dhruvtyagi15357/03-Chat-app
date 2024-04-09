const Conversation = require("../models/conversations.model.js");
const Message = require("../models/message.model.js");

const sendMessage = async (req, res) => {
  try {
    const { id: receiverID } = req.params;
    const { message } = req.body;
    const senderID = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderID, receiverID] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderID, receiverID],
      });
    }

    const newMessage = new Message({
      senderID,
      receiverID,
      message,
    });

    if (!newMessage) {
      return res.status(400).json({
        error: "Message not sent",
        message: "Message not sent",
      });
    }

    await newMessage.save();
    conversation.messages.push(newMessage._id);
    await conversation.save();
    res.status(201).send(newMessage);

  } catch (err) {
    res.status(500).json({
      error: "Internal Server Error in sending message controller",
      message: err.message,
    });
  }
};

module.exports = {
  sendMessage,
};
