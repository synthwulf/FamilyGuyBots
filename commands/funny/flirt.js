const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('flirt')
        .setDescription('Brian fucking flirts with you'),
    async execute(interaction) {
        await interaction.reply(`Hey there, you magnificent piece of cerebral real estate! If you were a neurotransmitter, you'd be serotonin, because being around you just makes everything feel right.`);
    },
};
