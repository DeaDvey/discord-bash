const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ls')
    .setDescription('explains sudo command'),

    async execute(bot, interaction) {
    
        await interaction.reply({ content: 'List files and directories in the current directory\n```> ls\nDocuments   Music   Pictures   Downloads   Videos   passwords.txt   cool-selfie.png``````> ls ./Pictures\nCamera Roll   Wallpapers   jotorokujo.png   basil-faulty.jpg   gimp-pfp-design.xcf```', ephemeral: false })

    }
}
