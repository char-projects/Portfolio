import { useState } from "react";

const GRID_SIZE = 55; // Number of tiles per row/column

export default function Tiles() {
    const [hoveredTile, setHoveredTile] = useState(null);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = Math.floor(((event.clientX - rect.left) / rect.width) * GRID_SIZE);
        const y = Math.floor(((event.clientY - rect.top) / rect.height) * GRID_SIZE);
        setHoveredTile({ x, y });
    };

    return (
        <div className='w-full h-auto absolute inset-0 z-[-1]'>
            <div
                className="grid"
                style={{
                    gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                    gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
                    width: "100vw",
                    height: "100vh",
                }}
                onMouseMove={handleMouseMove}
            >
                {[...Array(GRID_SIZE * GRID_SIZE)].map((_, index) => {
                    const x = index % GRID_SIZE;
                    const y = Math.floor(index / GRID_SIZE);
                    const isGlowing = hoveredTile && Math.abs(hoveredTile.x - x) <= 1 && Math.abs(hoveredTile.y - y) <= 1;

                    return (
                        <div
                            key={index}
                            className="w-full h-full transition duration-300"
                            style={{
                                backgroundColor: isGlowing ? "rgba(0, 186, 188, 0.7)" : "rgba(20, 20, 20, 0.5)",
                                boxShadow: isGlowing ? "0 0 10px rgba(0, 186, 188, 1)" : "none",
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}
