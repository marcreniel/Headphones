const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Plays any video/song from YouTube!')
		.addStringOption(option => option.setName('query').setDescription('Supports keywords and URL links.').setRequired(true)),

	async execute(interaction) {
		const channel = interaction.member.voice.channel;
		const queue = await interaction.client.distube.getQueue(interaction);
		const query = interaction.options.getString('query');

		if (!channel) {
		const embedJoin = new MessageEmbed()
			.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
			.setDescription(':x: You must join a voice channel to use this command!')
			.setColor('PURPLE');
            return interaction.reply({ embeds: [embedJoin], ephemeral: true });
        }
		if (queue) {
            if (interaction.member.guild.me.voice.channelId !== interaction.member.voice.channelId) {
				const embedSameChannel = new MessageEmbed()
				.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
				.setDescription(':x: I am already in a voice channel! Please join the one I am currently in.')
				.setColor('PURPLE');
			return interaction.reply({ embeds: [embedSameChannel], ephemeral: true });
            }
        }

		const addedSongToQueue = new MessageEmbed()
		.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
        .setDescription(':white_check_mark: Your query has been added to queue!')
        .setColor('PURPLE');
		return interaction.reply({ embeds: [addedSongToQueue], ephemeral: true }),

		await interaction.client.distube.play(
			channel,
			query,
			{
				textChannel: interaction.channel,
				member: interaction.member,
			},
		);
	},
};