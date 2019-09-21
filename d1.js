const discord = require("discord.js");

const client = new discord.Client();

client.on("ready",()=>{
 //مهم
    console.log('ready');
    client.user.setGame("Test")
 //انهاء المهم   
});


client.login("NjI0ODQ1NjY3MDU5MjM2ODg0.XYW7Rg.bknwzn8LpHMkrIk7KNW202JfnrE");