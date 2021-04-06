const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Floppa is ready');
});

client.once("ready", () => {
    client.user.setPresence({
        status: "online",
        activity: {
            name: "+floppa | Floppa",
            type: "PLAYING",
        },
    });
});

client.on('message', message => {
    if (message.content === '+floppa') {
      let answers = [
        'https://tenor.com/view/floppa-big-floppa-gif-20132181',
        'https://tenor.com/view/floppa-pet-big-floppa-allah-gif-18720385',
        'https://tenor.com/view/floppa-hahaahah-big-floppa-gif-20097912',
        'https://tenor.com/view/floppa-gif-19452847',
        'https://tenor.com/view/floppa-bingus-plus-rotation-gif-20154951',
        'https://tenor.com/view/floppa-brick-hill-big-floppa-brick-hill-floppa-gif-18271219',
        'https://tenor.com/view/elkd391bigfloppa-big-floppa-gif-19740757',
        'https://tenor.com/view/floppa-hot-gif-20148640',
        'https://tenor.com/view/big-floppa-masterpiece-mikmak-%D7%9E%D7%99%D7%A7%D7%9E%D7%A7-%D7%A1%D7%A7%D7%A1-gif-19838547',
        'https://tenor.com/view/among-us-floppa-among-us-big-floppa-gif-20229827',
        'https://tenor.com/view/floppa-gif-20017643',
        'https://tenor.com/view/floppa-cubes-random-gif-20397171',
        'https://tenor.com/view/floppa-my-beloved-floppa-cat-heart-gif-20386309',
	'https://i.gyazo.com/d2266dfb5ad2a1152c98243505643c74.png',
	'https://i.gyazo.com/cd4a61e01d743cf078970f65a76660f3.png',
	'https://i.gyazo.com/5ff1de9e0615b2b18357a289a7d0a31e.png',
	'https://i.gyazo.com/1516a4ad73eb0a06ef177b8374d193b6.png',
	'https://i.gyazo.com/db546d7761eb2281b78d90b868b1e292.png',
	'https://tenor.com/view/floppa-cameron-caracal-angry-gif-20662685'

      ];
      let randomResponse = answers[Math.floor(Math.random() * answers.length)];
      message.channel.send(randomResponse)
    }
  });

client.login(token);

