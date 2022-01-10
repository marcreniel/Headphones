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

		const resume = new MessageEmbed()
		.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
        .setDescription(`:pause_button: <@${interaction.user.id}> Has stopped the music.`)
        .setColor('PURPLE');
		await interaction.client.distube.stop(interaction);
		return interaction.reply({ embeds: [resume] });
	},
};