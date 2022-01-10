const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pause')
		.setDescription('Pauses the music if you are currently in the voice channel.'),

	async execute(interaction) {
		const channel = interaction.member.voice.channel;
		const queue = await interaction.client.distube.getQueue(interaction);

		if (!channel) {
			const embedJoin = new MessageEmbed()
			.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
			.setDescription(':x: You must join a voice channel to use this command!')
			.setColor('PURPLE');
            return interaction.reply({ embeds: [embedJoin], ephemeral: true });
        }
		if (!queue) {
			const noQueue = new MessageEmbed()
			.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
			.setDescription(':x: There is nothing currently playing!.')
			.setColor('PURPLE');
			return interaction.reply({ embeds: [noQueue], ephemeral: true });
		}
		if (queue) {
            if (interaction.member.guild.me.voice.channelId !== interaction.member.voice.channelId) {
			const embedSameChannel = new MessageEmbed()
			.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
			.setDescription(':x: Please join the one I am currently in to use this command.')
			.setColor('PURPLE');
			return interaction.reply({ embeds: [embedSameChannel], ephemeral: true });
            }
        }

		const pause = new MessageEmbed()
		.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
        .setDescription(`:pause_button: <@${interaction.user.id}> Has paused the music.`)
        .setColor('PURPLE');
		await interaction.client.distube.pause(interaction);
		return interaction.reply({ embeds: [pause] });
	},
};