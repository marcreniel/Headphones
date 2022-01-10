const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Plays a song')
		.addStringOption(option => option.setName('song').setDescription('Supports').setRequired(true)),
	async execute(interaction) {
		await interaction.client.distube.playVoiceChannel(
			interaction.member.voice.channel,
			interaction.options.getString('song').slice(0, 100),
			{
				textChannel: interaction.channel,
				member: interaction.member,
			},
		);
	},
};