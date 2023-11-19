const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dance')
        .setDescription('Make Brian Dance'),
    async execute(interaction) {
        await interaction.reply(`https://i.gifer.com/T3Op.gif`);
    },
};
