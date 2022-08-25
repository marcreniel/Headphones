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
			.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
			.setDescription(':x: There is nothing currently playing!')
			.setColor('PURPLE');
			return interaction.reply({ embeds: [noQueue], ephemeral: true });
		}

        const nowPlaying = new MessageEmbed()
		.setAuthor({name:'Headphones | Now Playing', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
		.setColor('PURPLE')
		.setThumbnail(currentsong.thumbnail)
		.addFields(
			{name:'Song Name', value:`${currentsong.name}`, inline:false},
			{name:'Duration', value:`${currentsong.formattedDuration}`, inline:false},
			{name:'Requested By', value:`${currentsong.user}`, inline:false},
			{name:'Playing In', value:`${interaction.guild.me.voice.channel}`, inline:false},
		);
        interaction.reply({ embeds: [nowPlaying] });
    },
};