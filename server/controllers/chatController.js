const Chat = require("../models/chat.model");

const chat = async (req, res) => {
    try{
        res.json('Chat api')
    }catch(err){
        res.json(err.message)
    }
};

module.exports = { chat };
