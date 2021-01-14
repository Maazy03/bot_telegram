
const dotenv = require('dotenv')
const express = require('express')

dotenv.config()

const app = express()


const TelegramBot = require('node-telegram-bot-api');
const token = "1516652231:AAH93gFvk7_YdEot_zD52HpeGDA5LoNoIFY"
const bot = new TelegramBot(token, { polling: true });
bot.on('message', (msg) => {

    var hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
        console.log("HIII")
        bot.sendMessage(msg.chat.id, "Hello dear user");
    }

    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
        console.log("BYE")
        bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
    }

});
app.listen(5000,()=>
{
console.log("SERVER CHALA")
})