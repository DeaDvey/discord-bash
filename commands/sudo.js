const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sudo')
    .setDescription('explains sudo command'),

    async execute(bot, interaction) {
    
        await interaction.reply({ content: 'runs the following command as superuse', ephemeral: false })

    }
}
