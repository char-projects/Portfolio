import React from "react";
import { FileText, Download } from "lucide-react";

const files = [
    { name: "Resume.pdf", type: "pdf", download: true },
    { name: "Project Idea.txt", type: "txt" },
    { name: "App Design Mockup.fig", type: "fig" },
    { name: "Marketing Plan.ppt", type: "ppt" },
    { name: "Code Snippets.js", type: "js" },
    { name: "Poems.docx", type: "docx" },
];

const Files = () => {
    return (
        <div className="h-screen pt-12 bg-gray-900 text-white p-6">
            {/* Navigation Bar */}
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
                <div className="text-2xl font-semibold">Files</div>
            </div>

            {/* Files Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {files.map((file, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    >
                        {/* Icon */}
                        {file.download ? (
                            <a href="/src/assets/ipad/resume.pdf" download>
                                <Download className="w-16 h-16 text-blue-400" />
                            </a>
                        ) : (
                            <FileText className="w-16 h-16 text-gray-400" />
                        )}

                        {/* File Name */}
                        <div className="mt-4 text-md text-center">{file.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Files;
