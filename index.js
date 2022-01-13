require ('dotenv').config();

<<<<<<< HEAD
<<<<<<< HEAD
const fs = require('fs');
const DisTube = require('distube');
<<<<<<< HEAD
const { Client, Collection, MessageEmbed, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGES] });

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
		.setAuthor({name:'Headphones', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
		.setDescription(':x: An error has occured. Please try again.')
		.setColor('PURPLE');
		await interaction.reply({ embeds: [noQueue], ephemeral: true });
	}
});

client.distube = new DisTube.default(client);
	client.distube
		.on('playSong', (queue, song) => {
		const nowPlaying = new MessageEmbed()
		.setAuthor({name:'Headphones | Now Playing', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
		.setColor('PURPLE')
		.setThumbnail(song.thumbnail)
		.addFields(
			{name: 'Song Name', value:`${song.name}`, inline:false},
			{name:'Duration', value:`${song.formattedDuration}`, inline:false},
			{name:'Requested By', value:`${song.user}`, inline:false},
		);
		queue.textChannel.send({ embeds: [nowPlaying] });
		},
	);
	client.distube
		.on('addSong', (queue, song) => {
		const addedSong = new MessageEmbed()
		.setAuthor({name:'Headphones | A song has been added to the queue!', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
		.setColor('PURPLE')
		.setThumbnail(song.thumbnail)
		.addFields(
			{name: 'Song Name', value:`${song.name}`, inline:false},
			{name:'Duration', value:`${song.formattedDuration}`, inline:false},
			{name:'Requested By', value:`${song.user}`, inline:false},
		);
		queue.textChannel.send({ embeds: [addedSong] });
		},
	);
	client.distube
		.on('addList', (queue, playlist) => {
		const addedList = new MessageEmbed()
		.setAuthor({name:'Headphones | A playlist has been added to the queue!', iconURL: 'https://media.discordapp.net/attachments/929899694560280627/990819878535589939/Headphonesv4Logo.png'})
		.setColor('PURPLE')
		.setThumbnail(playlist.thumbnail)
		.addFields(
			{name: 'Song Name', value:`${playlist.name}`, inline:false},
			{name:'Duration', value:`${playlist.formattedDuration}`, inline:false},
			{name:'Requested By', value:`${playlist.user}`, inline:false},
		);
		queue.textChannel.send({ embeds: [addedList] });
		},
	);
	
=======
const { Client, Intents } = require('discord.js');
=======
const fs = require('fs');
<<<<<<< HEAD
const { Client, Collection, Intents } = require('discord.js');
>>>>>>> e11c6e5 (base setup)
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
=======
const DisTube = require('distube');
const { Client, Collection } = require('discord.js');
=======
const { Client, Collection, MessageEmbed } = require('discord.js');
>>>>>>> 4a28369 (added embeds and expanded play functionality)
const client = new Client({
	intents: [
		'GUILDS',
		'GUILD_VOICE_STATES',
		'GUILD_MESSAGES',
	],
});
>>>>>>> d7d876c (added basic play functionality)

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

<<<<<<< HEAD
>>>>>>> db2d3d3 (first commit)
=======
client.distube = new DisTube.default(client);
<<<<<<< HEAD
client.distube
<<<<<<< HEAD
	.on('playSong', (queue, song) => queue.textChannel.send(
		` Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`,
	)),
>>>>>>> b9c5db0 (added playSong event)
=======
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
=======
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
		const nowPlaying = new MessageEmbed()
		.setAuthor('Headphones | A song has been added to queue!', 'https://media.discordapp.net/attachments/887886467215544333/887886502833569812/HPL.png?width=671&height=671')
		.setColor('PURPLE')
		.setThumbnail(song.thumbnail)
		.addField('Song Name', `${song.name}`, false)
		.addField('Duration', `${song.formattedDuration}`, false)
		.addField('Requested By', `${song.user}`, false);
		queue.textChannel.send({ embeds: [nowPlaying] });
		},
	);
>>>>>>> 477328c (added pause, unpause, queue functionality)

>>>>>>> 4a28369 (added embeds and expanded play functionality)
client.login(process.env.token);