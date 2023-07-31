const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ls')
    .setDescription('explains ls command'),

    async execute(bot, interaction) {
    
        await interaction.reply({ content: '```Documents   Music   Pictures   Downloads   Videos   passwords.txt   cool-selfie.png```', ephemeral: false })

    }
}
