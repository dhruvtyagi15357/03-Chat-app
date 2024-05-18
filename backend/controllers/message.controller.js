const Conversation = require("../models/conversations.model.js");
const Message = require("../models/message.model.js");
const { getSocketId, io } = require("../socket/socket.js");

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

    conversation.messages.push(newMessage._id);
    // await newMessage.save();
    // await conversation.save();
    
    await Promise.all([newMessage.save(), conversation.save()]); // save both message and conversation in parallel to save time

    const receiverSocketID = getSocketId(receiverID);

    if (receiverSocketID) {
      io.to(receiverSocketID).emit("newMessage", newMessage);
    }

    res.status(201).send(newMessage);

  } catch (err) {
    res.status(500).json({
      error: "Internal Server Error in sending message controller",
      message: err.message,
    });
  }
};

const getMessages = async (req, res) => {
  try {
    const { id: receiverID } = req.params;
    const senderID = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderID, receiverID] },
    }).populate("messages");

    // the populate method will populate the messages array in the conversation object with the actual message objects
    // so that we can access the message objects directly from the conversation object
    // instead of having to query the Message model separately
    // without the populate method, the messages array in the conversation object will only contain the message IDs
    // here is how we would have to query the Message model separately if we didn't use the populate method:
    // const messages = await Message.find({ _id: { $in: conversation.messages } });
    // conversation.messages = messages;
    // res.status(200).send(conversation);

    if (!conversation) {
      return res.status(200).json([]);
    }

    res.status(200).send(conversation.messages);
  } catch (err) {
    res.status(500).json({
      error: "Internal Server Error in getting messages controller",
      message: err.message,
    });
  }
}

module.exports = {
  sendMessage,
  getMessages,
};
