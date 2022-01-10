module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		const serv = client.guilds.cache.size;
		client.user.setPresence({ activities: [{ name: `on ${serv} servers | /play` }], status: 'online' });
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};