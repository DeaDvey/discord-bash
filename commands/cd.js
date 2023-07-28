const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cd')
    .setDescription('explains cd command'),

    async execute(bot, interaction) {
    
        await interaction.reply({ content: 'Change the current directory, .. for parent directory', ephemeral: false })

    }
}