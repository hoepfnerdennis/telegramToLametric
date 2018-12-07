import Telegraf from 'telegraf';

const API_TOKEN = '735932493:AAGyTDAN4uPeh2PYhF5PAnfLTrpKrD72Sk0';

const bot = new Telegraf(API_TOKEN);

bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.hears('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))
bot.startPolling()
console.log('start polling')
