const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Plays a song')
		.addStringOption(option => option.setName('song').setDescription('The song to play').setRequired(true)),
	async execute(interaction) {
		const query = interaction.options.getString('song').slice(0, 100);
		interaction.client.distube.playVoiceChannel(
			interaction.member.voice.channel,
			query,
			{
				textChannel: interaction.channel,
				member: interaction.member,
			},
		);
	},
};