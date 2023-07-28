module.exports = {
    name: 'ready',
    once: true,
    execute(bot) {
        console.log(`Ready! We're logged in as ${bot.user.tag}`);
    },
};
