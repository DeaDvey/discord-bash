const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cd')
    .setDescription('runs the cd command')
    .addStringOption(option => option
	.setName('flag1')
	.setDescription('first flag after base command')
    ),
    async execute(bot, interaction) {
    	const flag1 = interaction.options.getString('flag1')

	if (flag1 === '..') {
		await interaction.reply({ content: '```[user@discord.com /home] $ ```', ephemeral: false })
	}
	else if (flag1 === 'Documents') {
		await interaction.reply({ content: '```[user@discord.com ~/Documents] $ ```', ephemeral: false })
	}
	else if (flag1 === 'Music') {
                await interaction.reply({ content: '```[user@discord.com ~/Music] $ ```', ephemeral: false })   
        }
	else if (flag1 === 'Pictures') {    
                await interaction.reply({ content: '```[user@discord.com ~/Pictures] $ ```', ephemeral: false })       
        }
	else if (flag1 === 'Downloads') {
                await interaction.reply({ content: '```[user@discord.com ~/Downloads] $ ```', ephemeral: false })    
        }
	else if (flag1 === 'Videos') {
                await interaction.reply({ content: '```[user@discord.com ~/Videos] $ ```', ephemeral: false })    
        }
	else {
		await interaction.reply({ content: '```[user@discord.com ~] $ ```', ephemeral: false })
	}

    }
}
