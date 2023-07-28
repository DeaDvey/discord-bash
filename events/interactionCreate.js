const { InteractionType } = require('discord.js');
const { green, red } = require('chalk');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, bot) {

        const { commandName } = interaction;
        const command = interaction.client.commands.get(commandName);
        let content = '';

        try {
            if (interaction.isChatInputCommand()) {
                console.log(green(`A function in ${commandName} was called.`));

                if (!command) {
                    console.log(red(`Outdated command ran in ${interaction.guild.name} (${interaction.guild.id}), please consider updating this!`));
                    content = 'This command\'s settings is outdated. Please contact the maintainer about updating it.';

                    return await interaction.reply({ content: content, ephemeral: true });
                }
                else {
                    content = 'There was an error while executing this command!';
                    await command.execute(bot, interaction);
                }
            }
        }
        catch (error) {
            console.log(red(`${error}`));
            return interaction.reply({ content: content, ephemeral: true }).catch(err => console.log(red(err)));
        }

    },
};
