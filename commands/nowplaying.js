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
<<<<<<< HEAD
			.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
			.setDescription(':x: There is nothing currently playing!')
=======
			.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
<<<<<<< HEAD
			.setDescription(':x: There is nothing currently playing.')
>>>>>>> ed8d1c3 (added nowplaying and license)
=======
			.setDescription(':x: There is nothing currently playing!')
>>>>>>> 6a9f22a (added jump, loop, skip, summon (as derived from distube docs))
			.setColor('PURPLE');
			return interaction.reply({ embeds: [noQueue], ephemeral: true });
		}

        const nowPlaying = new MessageEmbed()
<<<<<<< HEAD
		.setAuthor({name:'Headphones | Now Playing', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
		.setColor('PURPLE')
		.setThumbnail(currentsong.thumbnail)
		.addFields(
			{name:'Song Name', value:`${currentsong.name}`, inline:false},
			{name:'Duration', value:`${currentsong.formattedDuration}`, inline:false},
			{name:'Requested By', value:`${currentsong.user}`, inline:false},
			{name:'Playing In', value:`${interaction.guild.me.voice.channel}`, inline:false},
		);
=======
		.setAuthor('Headphones | Now Playing', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
		.setColor('PURPLE')
		.setThumbnail(currentsong.thumbnail)
		.addField('Song Name', `${currentsong.name}`, false)
		.addField('Duration', `${currentsong.formattedDuration}`, false)
		.addField('Requested By', `${currentsong.user}`, false)
        .addField('Playing In', `${interaction.guild.me.voice.channel}`, false);
>>>>>>> ed8d1c3 (added nowplaying and license)
        interaction.reply({ embeds: [nowPlaying] });
    },
};