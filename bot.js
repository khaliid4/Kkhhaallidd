
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$' ; 


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'خالد') {
    msg.reply('أرحب يالله حية ');
  }
});




//////////// الرد التلقائي /////////////

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'السلام') {
    msg.reply(' *وعليكم السلام ورحمة الله وبركاتة* ');
  }
});
 
 client.on('message', msg => {
  if (msg.content === 'الو') {
    msg.reply(' *يا هلا ومــــــــــرحـــــــباء مليون* ');
  }
});


client.on('message', msg => {
  if (msg.content === '@khalid') {
    msg.reply(' * أطلق من يمنشن ي لباء * ');
  }
});


client.on('message', msg => {
  if (msg.content === ' + ') {
    msg.reply(' * + * ');
  }
});



client.on('message', msg => {
  if (msg.content === ' + ') {
    msg.reply(' * + * ');
  }
});



client.on('message', msg => {
  if (msg.content === ' + ') {
    msg.reply(' * + * ');
  }
});



client.on('message', msg => {
  if (msg.content === ' + ') {
    msg.reply(' * + * ');
  }
});





 //////////////////////////ارسال رسالة في الشات بانبد  وردون /////////////////////////////////////////




var Prefix = "$";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "say2") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});



//////////////////////يثبت البوت داخل روم/////////////////////////////////////


client.on('ready', () => {
var x = client.channels.get("462009834171138080");
if (x) x.join();
});



	///////////////////////////////كلمات ممنوعة ////////////////////////////////////
	  
client.on('message', msg => {
  if (msg.content === 'كل زق') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});
	
  
  /////////////////////////كود عرض البنق/////////////////////////////////////////
	  

client.on('message', message => {
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
    }
});

 

/////////////////////////////////كود حالة البوت/////////////////////////////////



client.on('ready', function(){    
    var ms = 40000 ;    
    var setGame = ['لا إله إلا الله ','  و محمد رسول الله  '];    
    var i = -1;    
    var j = 0;    
    setInterval(function (){    
        if( i == -1 ){    
j = 1;    
       }    
        if( i == (setGame.length)-1 ){    
            j = -1;    
      }    
       i = i+j;    
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);    
}, ms);    
    
});



/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////








client.login(process.env.BOT_TOKEN);


client.login(process.env.BOT_TOKEN);
