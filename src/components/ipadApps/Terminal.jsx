import { useState } from "react";

const Terminal = () => {
    const [output, setOutput] = useState("> Welcome to the Terminal App!\n> Type 'help' to see commands.");

    const handleCommand = (input, inputElement) => {
        const args = input.trim().split(" ");
        const command = args[0].toLowerCase();
        let response;

        switch (command) {
            case "help":
                response = "Available commands: help, joke, echo, date,\nfortune, ascii, clear";
                break;
            case "ascii":
                const asciiArt = [
                    "               __\n" +
                    "              / _)\n" +
                    "     _/\\/\\/\\_/ /\n" +
                    "   _|         /\n" +
                    " _|  (  | (  |\n" +
                    "/_.--'|_|--|_|",

                    "  @..@\n" +
                    " (----)\n" +
                    "( >__< )\n" +
                    "^^ ~~ ^^\n",

                    " /\\_/\\  \n" +
                    "( o.o )  \n" +
                    " > ^ <\n",

                    "\n" +
                    "     .    !__________!    .    _______\n" +
                    "    /_\\   |____  ____|   /_\\   |__*__|\n" +
                    "   __|__  {____}{____}  __|__  |__*__|\n" +
                    " __|_*_|__%%%%%%%%%%%%__|_*_|__|__*__|__\n" +
                    "   |   | %%%%%%%%%%%%%% |   |  |/   \\|\n" +
                    "        %%%%%%%%%%%%%%%%\n" +
                    "       %%%%%%%%%%%%%%%%%%\n" +
                    "      %%%%%%%%%%%%%%%%%%%%\n" +
                    "     /||||||||||||||||||||\\\n" +
                    "     ||||||||||||||||||||||",

                    "    ____\n" +
                    "   /.   \\__\n" +
                    "  /_  \\_/  \\\n" +
                    " // \\  ___ |\\\n" +
                    "     |_| |_|\n",

                    "         .--------.\n" +
                    "    ____/_____|___ \\___\n" +
                    "   O    _   - |   _   ,*\n" +
                    "    '--(_)-------(_)--'",
                ];
                response = asciiArt[Math.floor(Math.random() * asciiArt.length)];
                break;
            case "joke":
                const jokes = [
                    "Why do programmers prefer dark mode?\n- Because light attracts bugs!",
                    "There are 10 types of people in the world:\nThose who understand binary and those who\ndon’t.",
                    "Why do Java developers wear glasses?\nBecause they don't C#",
                    "Why did the coder quit?\n- He didn't get arrays"
                ];
                response = jokes[Math.floor(Math.random() * jokes.length)];
                break;
            case "clear":
                setOutput("");
                inputElement.value = "";
                return;
            case "date":
                response = new Date().toLocaleString();
                break;
            case "fortune":
                const fortunes = [
                    "Your code will compile on the first try…someday.",
                    "You will push to main without testing…\nand regret it.",
                    "Your next PR will get approved instantly.",
                    "Merge conflicts are coming. Brace yourself.",
                    "You will spend hours debugging… only to\nrealize it was a missing semicolon.",
                    "You will hire me for your next project.",
                ];
                response = fortunes[Math.floor(Math.random() * fortunes.length)];
                break;
            case "echo":
                response = args.slice(1).join(" ") || "Usage: echo [text]";
                break;
            default:
                response = `Command not found: ${command}`;
        }

        setOutput((prev) => prev + `\n> ${input}\n${response}`);
        inputElement.value = "";
    };

    return (
        <div className="p-6 h-full bg-black text-green-400 font-mono">
            <h1 className="text-2xl font-bold mb-4">Terminal</h1>
            <div className="h-[570px] overflow-y-auto border p-2">
                <pre>{output}</pre>
            </div>
            <input
                type="text"
                className="mt-2 w-full p-2 border bg-gray-800 text-white"
                placeholder="Type a command..."
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleCommand(e.target.value, e.target);
                }}
            />
        </div>
    );
};

export default Terminal;
