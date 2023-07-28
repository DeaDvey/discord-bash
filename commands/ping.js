const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('replies with pong'),

    async execute(bot, interaction) {
    
        await interaction.reply({ content: 'pong', ephemeral: true })

    }
}
