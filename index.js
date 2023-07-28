const { id, guild, token } = require('./config.json');
const { green, red } = require('chalk');
const fs = require('node:fs');
const { Client, IntentsBitField, Routes, Collection, Partials } = require('discord.js');
const { REST } = require('@discordjs/rest');
const bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.GuildIntegrations,
        IntentsBitField.Flags.DirectMessages,
    ],
    partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.User,
        Partials.ThreadMember,
    ],
});

bot.commands = new Collection();
const commands = [];

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
    bot.commands.set(command.data.name, command);
}

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        bot.once(event.name, (...args) => event.execute(...args, bot));
    }
    else {
        bot.on(event.name, (...args) => event.execute(...args, bot));
    }
}

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationCommands(id, guild), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);

bot.login(token).catch(err => console.log(red(err)));
