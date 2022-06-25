const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nowplaying')
		.setDescription('Shows the song currently playing.'),

	async execute(interaction) {
        const queue = await interaction.client.distube.getQueue(interaction);
        const currentsong = queue.songs[0];

        if (!queue) {
			const noQueue = new MessageEmbed()
			.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
			.setDescription(':x: There is nothing currently playing!')
			.setColor('PURPLE');
			return interaction.reply({ embeds: [noQueue], ephemeral: true });
		}

        const nowPlaying = new MessageEmbed()
		.setAuthor('Headphones | Now Playing', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
		.setColor('PURPLE')
		.setThumbnail(currentsong.thumbnail)
		.addField('Song Name', `${currentsong.name}`, false)
		.addField('Duration', `${currentsong.formattedDuration}`, false)
		.addField('Requested By', `${currentsong.user}`, false)
        .addField('Playing In', `${interaction.guild.me.voice.channel}`, false);
        interaction.reply({ embeds: [nowPlaying] });
    },
};