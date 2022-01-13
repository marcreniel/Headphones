const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop')
		.setDescription('Stops the music, clears the queue, and disconnects the bot.'),

	async execute(interaction) {
		const channel = interaction.member.voice.channel;
		const queue = await interaction.client.distube.getQueue(interaction);

		if (!channel) {
			const embedJoin = new MessageEmbed()
<<<<<<< HEAD
			.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
=======
			.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
>>>>>>> 477328c (added pause, unpause, queue functionality)
			.setDescription(':x: You must join a voice channel to use this command!')
			.setColor('PURPLE');
            return interaction.reply({ embeds: [embedJoin], ephemeral: true });
        }
		if (!queue) {
			const noQueue = new MessageEmbed()
<<<<<<< HEAD
			.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
			.setDescription(':x: There is nothing currently playing!')
=======
			.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
<<<<<<< HEAD
			.setDescription(':x: There is nothing currently playing!.')
>>>>>>> 477328c (added pause, unpause, queue functionality)
=======
			.setDescription(':x: There is nothing currently playing!')
>>>>>>> 6a9f22a (added jump, loop, skip, summon (as derived from distube docs))
			.setColor('PURPLE');
			return interaction.reply({ embeds: [noQueue], ephemeral: true });
		}
		if (queue) {
            if (interaction.member.guild.me.voice.channelId !== interaction.member.voice.channelId) {
				const embedSameChannel = new MessageEmbed()
<<<<<<< HEAD
				.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
				.setDescription(':x: I am already in a voice channel! Please join the one I am currently in.')
=======
				.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
<<<<<<< HEAD
				.setDescription(':x: Please join the one I am currently in to use this command.')
>>>>>>> 477328c (added pause, unpause, queue functionality)
=======
				.setDescription(':x: I am already in a voice channel! Please join the one I am currently in.')
>>>>>>> ed8d1c3 (added nowplaying and license)
				.setColor('PURPLE');
			return interaction.reply({ embeds: [embedSameChannel], ephemeral: true });
            }
        }

<<<<<<< HEAD
<<<<<<< HEAD
		const stopped = new MessageEmbed()
		.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
        .setDescription(`:pause_button: <@${interaction.user.id}> Has stopped the music.`)
        .setColor('PURPLE');
		await queue.stop();
		return interaction.reply({ embeds: [stopped] });
=======
		const resume = new MessageEmbed()
=======
		const stopped = new MessageEmbed()
>>>>>>> 6a9f22a (added jump, loop, skip, summon (as derived from distube docs))
		.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
        .setDescription(`:pause_button: <@${interaction.user.id}> Has stopped the music.`)
        .setColor('PURPLE');
		await interaction.client.distube.stop(interaction);
<<<<<<< HEAD
		return interaction.reply({ embeds: [resume] });
>>>>>>> 477328c (added pause, unpause, queue functionality)
=======
		return interaction.reply({ embeds: [stopped] });
>>>>>>> 6a9f22a (added jump, loop, skip, summon (as derived from distube docs))
	},
};