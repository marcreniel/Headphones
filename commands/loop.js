const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('loop')
		.setDescription('Loops the current queue.')
		.addIntegerOption(option => option.setName('mode').setDescription('The repeat modes - 0: disabled 1: Repeats the current song 2: Repeats the queue.').setRequired(true)),
	async execute(interaction) {
		const channel = interaction.member.voice.channel;
		const queue = await interaction.client.distube.getQueue(interaction);
		const mode = interaction.options.getInteger('mode');

		if (!channel) {
			const embedJoin = new MessageEmbed()
			.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
			.setDescription(':x: You must join a voice channel to use this command!')
			.setColor('PURPLE');
            return interaction.reply({ embeds: [embedJoin], ephemeral: true });
        }
		if (!queue) {
			const noQueue = new MessageEmbed()
			.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
			.setDescription(':x: There is nothing currently playing!')
			.setColor('PURPLE');
			return interaction.reply({ embeds: [noQueue], ephemeral: true });
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

		const loopsong = new MessageEmbed()
		.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
        .setDescription(`:repeat_one: <@${interaction.user.id}> Has toggled loop. The current song will continuously play.`)
        .setColor('PURPLE');
		const loopqueue = new MessageEmbed()
		.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
        .setDescription(`:repeat: <@${interaction.user.id}> Has toggled loop queue. The queue will continuously play.`)
        .setColor('PURPLE');
		const loopoff = new MessageEmbed()
		.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
        .setDescription(`:repeat: <@${interaction.user.id}> Has untoggled loop.`)
        .setColor('PURPLE');
		const error = new MessageEmbed()
		.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
		.setDescription(':x: Invalid option type. Please only type in 0, 1, or 2.')
		.setColor('PURPLE');
		await interaction.client.distube.setRepeatMode(interaction, mode);
		if (mode === 0) {
			return interaction.reply({ embeds: [loopoff] });
		}
		else if (mode === 1) {
			return interaction.reply({ embeds: [loopsong] });
		}
		else if (mode === 2) {
			return interaction.reply({ embeds: [loopqueue] });
		}
		else {
			return interaction.reply({ embeds: [error] });
		}
	},
};