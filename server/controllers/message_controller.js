let msgArr = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    let { text, time } = req.body;
    msgArr.push({ id, text, time });
    id++;
    res.status(200).json(msgArr);
  },
  read: (req, res) => {
    res.status(200).json(msgArr);
  },
  update: (req, res) => {
    console.log(req.body);
    let { text } = req.body;
    let updateID = req.params.id;
    const messageIndex = msgArr.findIndex(message => message.id === +updateID);
    let message = msgArr[messageIndex];

    msgArr[messageIndex] = {
      id: message.id,
      text: text,
      time: message.time
    };
    res.status(200).json(msgArr);
  },
  delete: (req, res) => {
    let deleteID = req.params.id;
    const messageIndex = msgArr.findIndex(message => message.id === deleteID);
    msgArr.splice(messageIndex, 1);
    res.status(200).json(msgArr);
  }
};
