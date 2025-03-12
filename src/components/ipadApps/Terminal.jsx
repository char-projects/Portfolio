import { useState } from "react";

const Terminal = () => {
    const [output, setOutput] = useState("> Welcome to the Terminal App!\n> Type 'help' to see commands.");

    const handleCommand = (command, inputElement) => {
        let response;
        switch (command.toLowerCase()) {
            case "help":
                response = "Available commands: help, joke, clear";
                break;
            case "joke":
                response = "Why do programmers prefer dark mode?\n- Because light attracts bugs!";
                break;
            case "clear":
                setOutput("");
                inputElement.value = "";
                return;
            default:
                response = `Command not found: ${command}`;
        }
        setOutput((prev) => prev + `\n> ${command}\n${response}`);
        inputElement.value = "";
    };

    return (
        <div className="p-6 h-full bg-black text-green-400 font-mono">
            <h1 className="text-2xl font-bold mb-4">Terminal</h1>
            <div className="h-96 overflow-y-auto border p-2">
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
