const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('queue')
		.setDescription('Shows the current song queue.'),

	async execute(interaction) {
        const queue = await interaction.client.distube.getQueue(interaction);

        if (!queue) {
			const noQueue = new MessageEmbed()
			.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
			.setDescription(':x: There is nothing currently in the queue.')
			.setColor('PURPLE');
			return interaction.reply({ embeds: [noQueue], ephemeral: true });
		}

		const csong = queue.songs[0];
        const list = queue.songs
        .map((song, i) => `${i === 0 ? '**Now Playing:**' : `**${i}**.`} ${song.name} - \`${song.formattedDuration}\` - Requested by ${song.user}`)
        .join('\n');
        const queueList = new MessageEmbed()
		.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
        .setColor('PURPLE')
		.setThumbnail(csong.thumbnail)
        .setDescription(list.slice(0, 1000) + '\n **... And more songs that cannot fit**', false);
        interaction.reply({ embeds: [queueList] });
    },
};