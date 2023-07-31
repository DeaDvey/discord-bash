const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('explain')
    .setDescription('explains the given command')
    .addStringOption(option => option
        .setName('command')
        .setDescription('explain the command')
    ),
    async execute(bot, interaction) {
        const command = interaction.options.getString('command')
        console.log(command)
        if (command === 'cd') {
            await interaction.reply({ content: 'Changes directory', ephemeral: false })
        }
	if (command === 'ls') {
	    await interaction.reply({ content: 'Lists contents of current directory', ephemeral: false }) 
	}
	if (command === 'sudo') {
		await interaction.reply({ content: 'runs the following command as superuser', ephemeral: false })
	}
        else {
            await interaction.reply({ content: 'Unknown command', ephemeral: false })
        }

    }
}
