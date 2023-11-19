const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kill')
        .setDescription('kill brian'),
    async execute(interaction) {
        await interaction.reply(`https://www.joeydevilla.com/wordpress/wp-content/uploads/2013/12/family-guy-brian-death.gif`);
    },
};
