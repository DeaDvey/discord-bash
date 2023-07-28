const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ls')
    .setDescription('explains sudo command'),

    async execute(bot, interaction) {
    
        await interaction.reply({ content: 'List files and directories in the current directory\nDocuments   Music   Pictures   Downloads   Videos', ephemeral: false })

    }
}
