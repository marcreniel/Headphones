const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('summon')
		.setDescription('Summons the bot in your current voice channel. This will not affect the queue.'),

	async execute(interaction) {
		const channel = interaction.member.voice.channelId;
		if (!channel) {
			const embedJoin = new MessageEmbed()
			.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
			.setDescription(':x: You must join a voice channel to use this command!')
			.setColor('PURPLE');
            return interaction.reply({ embeds: [embedJoin], ephemeral: true });
        }

		await joinVoiceChannel({
			channelId: channel,
			guildId: interaction.guildId,
			adapterCreator: interaction.guild.voiceAdapterCreator,
		});

		const joinedChannel = new MessageEmbed()
		.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
        .setDescription(`:white_check_mark: Joined ${interaction.guild.me.voice.channel}!`);
		return interaction.reply({ embeds: [joinedChannel] });
	},
};