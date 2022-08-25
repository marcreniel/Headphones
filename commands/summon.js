const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('summon')
		.setDescription('Summons the bot in your current voice channel. This will not affect the queue.'),

	async execute(interaction) {
		const channel = interaction.member.voice.channelId;
		if (!channel) {
			const embedJoin = new MessageEmbed()
			.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
			.setDescription(':x: You must join a voice channel to use this command!')
			.setColor('PURPLE');
            return interaction.reply({ embeds: [embedJoin], ephemeral: true });
        }

		await joinVoiceChannel({
			channelId: channel,
			guildId: interaction.guildId,
			adapterCreator: interaction.guild.voiceAdapterCreator,
		});

		const joinedChannel = new MessageEmbed()
		.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
		.setColor('PURPLE')
        .setDescription(`:white_check_mark: Joined ${interaction.guild.me.voice.channel}!`);
		return interaction.reply({ embeds: [joinedChannel] });
	},
};