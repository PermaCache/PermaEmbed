// Extract the required classes from the discord.js module
const { Client, MessageEmbed } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    // If the message starts with "t "
    if (message.content.startsWith(". ")) {
        // Delete the message
        message.delete()
        // Remove the "t " from the text
        let text = message.content.replace(". ", "")
        // Get the word from the text
        let word = text.split("  ")[0] 
        // Get the meaning from the text
        let meaning = text.split("  ")[1]
        // We can create embeds using the MessageEmbed constructor
        const embed = new MessageEmbed()
            // Set the author of the field
            .setAuthor(message.author.username, message.author.avatarURL())
            // Set the title of the fieldS
            .setTitle(word)
            // Set the color of the embed
            .setColor(0xf1c40f)
            // Set the main content of the embed
            .setDescription(meaning?meaning:"");
        // Send the embed to the same channel as the message
        message.channel.send(embed);
    }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('Token of your bot');
