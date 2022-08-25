require ('dotenv').config();

const fs = require('fs');
const DisTube = require('distube');
const { Client, Collection, MessageEmbed } = require('discord.js');
const client = new Client({
	intents: [
		'GUILDS',
		'GUILD_VOICE_STATES',
		'GUILD_MESSAGES',
	],
});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		const noQueue = new MessageEmbed()
		.setAuthor('Headphones', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
		.setDescription(':x: An error has occured. Please try again.')
		.setColor('PURPLE');
		await interaction.reply({ embeds: [noQueue], ephemeral: true });
	}
});

client.distube = new DisTube.default(client);
	client.distube
		.on('playSong', (queue, song) => {
		const nowPlaying = new MessageEmbed()
		.setAuthor('Headphones | Now Playing', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
		.setColor('PURPLE')
		.setThumbnail(song.thumbnail)
		.addField('Song Name', `${song.name}`, false)
		.addField('Duration', `${song.formattedDuration}`, false)
		.addField('Requested By', `${song.user}`, false);
		queue.textChannel.send({ embeds: [nowPlaying] });
		},
	);
	client.distube
		.on('addSong', (queue, song) => {
		const addedSong = new MessageEmbed()
		.setAuthor('Headphones | A song has been added to queue!', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
		.setColor('PURPLE')
		.setThumbnail(song.thumbnail)
		.addField('Song Name', `${song.name}`, false)
		.addField('Duration', `${song.formattedDuration}`, false)
		.addField('Requested By', `${song.user}`, false);
		queue.textChannel.send({ embeds: [addedSong] });
		},
	);
	client.distube
		.on('addList', (queue, playlist) => {
		const addedList = new MessageEmbed()
		.setAuthor('Headphones | A playlist has been added to queue!', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
		.setColor('PURPLE')
		.setThumbnail(playlist.thumbnail)
		.addField('Song Name', `${playlist.name}`, false)
		.addField('Duration', `${playlist.formattedDuration}`, false)
		.addField('Requested By', `${playlist.user}`, false);
		queue.textChannel.send({ embeds: [addedList] });
		},
	);
client.login(process.env.token);