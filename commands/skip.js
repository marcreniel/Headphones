const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('skip')
		.setDescription('Skips the current song playing.'),
	async execute(interaction) {
		const channel = interaction.member.voice.channel;
		const queue = await interaction.client.distube.getQueue(interaction);

		if (!channel) {
			const embedJoin = new MessageEmbed()
<<<<<<< HEAD
			.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
=======
			.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
>>>>>>> b873d6338a962556d52789cebb40f00452e1cc6e
			.setDescription(':x: You must join a voice channel to use this command!')
			.setColor('PURPLE');
            return interaction.reply({ embeds: [embedJoin], ephemeral: true });
        }
		if (!queue) {
			const noQueue = new MessageEmbed()
<<<<<<< HEAD
			.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
=======
			.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
>>>>>>> b873d6338a962556d52789cebb40f00452e1cc6e
			.setDescription(':x: There is nothing currently playing!')
			.setColor('PURPLE');
			return interaction.reply({ embeds: [noQueue], ephemeral: true });
		}
		if (queue) {
            if (interaction.member.guild.me.voice.channelId !== interaction.member.voice.channelId) {
				const embedSameChannel = new MessageEmbed()
<<<<<<< HEAD
				.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
=======
				.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
>>>>>>> b873d6338a962556d52789cebb40f00452e1cc6e
				.setDescription(':x: I am already in a voice channel! Please join the one I am currently in.')
				.setColor('PURPLE');
			return interaction.reply({ embeds: [embedSameChannel], ephemeral: true });
            }
        }

		const skip = new MessageEmbed()
<<<<<<< HEAD
		.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
=======
		.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
>>>>>>> b873d6338a962556d52789cebb40f00452e1cc6e
        .setDescription(`:track_next: <@${interaction.user.id}> Has skipped the current song.`)
        .setColor('PURPLE');
		await queue.skip();
		return interaction.reply({ embeds: [skip] });
	},
};