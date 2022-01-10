const { SlashCommandBuilder } = require('@discordjs/builders');
<<<<<<< HEAD
<<<<<<< HEAD
const { MessageEmbed } = require('discord.js');
=======
>>>>>>> d7d876c (added basic play functionality)
=======
const { MessageEmbed } = require('discord.js');
>>>>>>> 4a28369 (added embeds and expanded play functionality)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
		.setDescription('Plays a song')
=======
		.setDescription('Plays any video/song from YouTube! Supports keywords and URL links.')
<<<<<<< HEAD
>>>>>>> 4a28369 (added embeds and expanded play functionality)
		.addStringOption(option => option.setName('song').setDescription('Supports').setRequired(true)),
=======
		.addStringOption(option => option.setName('song').setRequired(true)),

>>>>>>> 477328c (added pause, unpause, queue functionality)
	async execute(interaction) {
		const channel = interaction.member.voice.channel;
		const queue = await interaction.client.distube.getQueue(interaction);
		const query = interaction.options.getString('song');

		if (!channel) {
		const embedJoin = new MessageEmbed()
			.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
			.setDescription(':x: You must join a voice channel to use this command!')
			.setColor('PURPLE');
            return interaction.reply({ embeds: [embedJoin], ephemeral: true });
        }
		if (queue) {
            if (interaction.member.guild.me.voice.channelId !== interaction.member.voice.channelId) {
				const embedSameChannel = new MessageEmbed()
				.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
				.setDescription(':x: I am already in a voice channel! Please join the one I am currently in.')
				.setColor('PURPLE');
			return interaction.reply({ embeds: [embedSameChannel], ephemeral: true });
            }
        }

		const addedSongToQueue = new MessageEmbed()
		.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
        .setDescription(':white_check_mark: Your query has been added to queue!')
        .setColor('PURPLE');
		return interaction.reply({ embeds: [addedSongToQueue], ephemeral: true }),

		await interaction.client.distube.playVoiceChannel(
<<<<<<< HEAD
			interaction.member.voice.channel,
<<<<<<< HEAD
>>>>>>> d7d876c (added basic play functionality)
			query,
=======
			interaction.options.getString('song').slice(0, 100),
>>>>>>> b9c5db0 (added playSong event)
=======
			channel,
			query,
>>>>>>> 4a28369 (added embeds and expanded play functionality)
			{
				textChannel: interaction.channel,
				member: interaction.member,
			},
		);
	},
};