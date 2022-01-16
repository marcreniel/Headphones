# Headphones | A Discord Music Bot
**A bot will be availble soon once development is finished.**

After Rythym's shutdown, I coded a personal music bot months ago that operated on various servers. However, as it's old codebase is aging (and breaking!), I decided to rewrite the bot making substantial improvements and open-sourcing the code.

#### Features
- YouTube link, query and playlist support
- Over 10+ music commands
- Now using discord.js v13
- Slash commands support
- Expanded embed info 

## Prerequisites
node.js with npm support

## Setup
First, clone the repo using git:

```bash
git clone https://github.com/imEdra/Headphones/
```
After that, run ```npm install``` in the cloned directory.

Create a ``config.json`` file in the directory, then copy, paste, and modify this code as-needed.
```
{
	"clientId": "Your Client ID here",
	"guildId": "Your Guild ID here"
}
```

Create a ``.env`` file in the directory, then copy, paste, and modify this code as-needed.
```
token = Your Token Here
```

Run the application using ```node .```

## Credits
- Created by [**Marc Bernardino**](https://github.com/imEdra)
- Distube [**Documentation**](https://distube.js.org/#/) (This really came in clutch more than half the time)


## License
This project is licenced via MIT.
