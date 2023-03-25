const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const TOKEN = process.env.TOKEN;
const USER = process.env.USER;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('text', body => {
    let now = new Date();
    let hour = now.getHours() + 5;
    let minute = now.getMinutes();

    if (body.from.id == USER) {
        bot.sendMessage(USER, `${hour} : ${minute} is current time!`)
    }
})

let sendHourly = () => {
    let now = new Date();
    let hour = now.getHours() + 5;
    let minute = now.getMinutes();

    if (hour == 0 && minute == 0) {
        bot.sendMessage(USER, `${hour}:${minute}\nThis was supposed to be sent at midnight!`)
    }

    if (minute == 30) {
        bot.sendMessage(USER, `${hour}:${minute}\nThis was supposed to be sent at half of every hour!`)
    }
}

setInterval(sendHourly, 60000);