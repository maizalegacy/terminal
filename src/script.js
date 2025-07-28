const commands = [
    {
        name: "help",
        description: "List all available commands",
        action: () => {
            return commands.map(cmd => `${cmd.name} - ${cmd.description}`).join("\n");
        }
    },
    {
        name: "greet",
        description: "Greets the user",
        action: () => "Hello! How can I assist you today?"
    },
    {
        name: "clear",
        description: "Clears the terminal",
        action: () => {
            document.getElementById('output').innerHTML = '';
            return "";
        }
    },
    {
        name: "website",
        description: "Lists my websites",
        action: () => "Portfolio - https://glitchdev.me\nGames - https://sapphire-games.com"
    }
];

const username = "visitor";

const input = document.getElementById('commandInput');
const output = document.getElementById('output');

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const userInput = input.value.trim();
        if (userInput) {
            processCommand(userInput);
            input.value = '';
        }
    }
});

function processCommand(userInput) {
    const [command, ...args] = userInput.split(' ');
    const cmd = commands.find(c => c.name === command);

    appendUserInput(userInput);

    if (cmd) {
        const result = cmd.action(args);
        if (result) appendOutput(result);
    } else {
        appendOutput(`Command not recognized: ${userInput}`);
    }
}

function appendUserInput(command) {
  const newLine = document.createElement('div');
  const userSpan = document.createElement('span');
  const commandSpan = document.createElement('span');
  userSpan.classList.add("username");
  userSpan.textContent = `${username}:~$ `
  commandSpan.textContent = command;
  
  newLine.append(userSpan);
  newLine.append(commandSpan);
  
  output.appendChild(newLine);
  output.scrollTop = output.scrollHeight;
}
function appendOutput(text) {
    const newLine = document.createElement('div');
    newLine.textContent = text;
    output.appendChild(newLine);
    output.scrollTop = output.scrollHeight;
}

// document.getElementById('commandInput').focus();