module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		const serv = client.guilds.cache.size;
		client.user.setPresence({ activities: [{ name: `Playing music on ${serv} servers | /play` }], status: 'online' });
		console.log('Headphones v4 is ready! Project by Marc Bernardino - http://notmarc.me');
	},
};