import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ipadbg } from "../../assets/index.js";
import {
    AppleTV,
    AppStore,
    Books,
    FourtyTwoHome,
    Duolingo,
    Files,
    FindMy,
    GoogleMaps,
    Health,
    Hackathons,
    Music,
    Notes,
    Pinterest,
    Podcasts,
    Safari,
    Settings,
    BoardGames,
    Terminal,
    YouTube
} from "../ipadApps/index.js";

const rawApps = [
    {
        title: "Settings",
        content: () => <Settings />,
    },
    {
        title: "Find my device",
        content: () => <FindMy />,
    },
    {
        title: "Email",
        url: "mailto:charlotteschnx@gmail.com"
    },
    {
        title: "Messages",
        content: () => <Hackathons />,
    },
    {
        title: "GitHub",
        url: "https://github.com/char-projects",
    },
    {
        title: "Discord",
        content: () => <FourtyTwoHome />,
    },
    {
        title: "Books",
        content: () => <Books />,
    },
    {
        title: "Podcasts",
        content: () => <Podcasts />,
    },
    {
        title: "Music",
        content: () => <Music />,
    },
    {
        title: "AppleTV",
        content: () => <AppleTV />,
    },
    {
        title: "YouTube",
        content: () => <YouTube />,
    },
    {
        title: "Health",
        content: () => <Health />,
    },
    {
        title: "Google Maps",
        content: () => <GoogleMaps />,
    },
    {
        title: "Photos",
        content: () => <Pinterest />,
    },
    {
        title: "Steam",
        content: () => <BoardGames />,
    },
    {
        title: "Duolingo",
        content: () => <Duolingo />,
    },
    {
        title: "Safari",
        content: () => <Safari />,
    },
    {
        title: "Files",
        content: () => <Files />,
    },
    {
        title: "App Store",
        content: () => <AppStore />,
    },
    {
        title: "Terminal",
        content: () => <Terminal />,
    },
    {
        title: "Notes",
        content: () => <Notes />,
    },
]

const ipadApps = rawApps.map((app, index) => ({ ...app, index }));

const AppPage = ({ app, onClose }) => {
    const pageRef = useRef(null);
    const ipadRef = document.getElementById("ipad-container"); // Get iPad element

    useEffect(() => {
        gsap.fromTo(
            pageRef.current,
            { scale: 0.8, opacity: 0 },
            { duration: 0.5, scale: 1, opacity: 1, ease: "power2.out" }
        );
    }, []);

    const handleClose = () => {
        gsap.to(pageRef.current, {
            duration: 0.5,
            scale: 0.8,
            opacity: 0,
            ease: "power2.in",
            onComplete: onClose,
        });
    };

    if (!ipadRef) return null; // Prevents errors if iPad is not found

    // Get iPad's size and position
    const ipadWidth = ipadRef.clientWidth;
    const ipadHeight = ipadRef.clientHeight;
    const padding = 10; // Small padding on all sides

    return (
        <div
            ref={pageRef}
            className="absolute shadow-lg rounded-[26px] custom-overflow-y-auto bg-black"
            style={{
                width: ipadWidth - 5 * padding,
                height: ipadHeight - 5 * padding,
                top: padding * 2.5,
            }}
        >
            <button
                onClick={handleClose}
                className="absolute top-2 right-2 bg-gray-400 px-3 py-1 rounded hover:bg-gray-300 z-50"
            >
                Close
            </button>
            {app?.content ? app.content() : null}
        </div>
    );
};

const Ipad = () => {
    const [openApp, setOpenApp] = useState(null);

    const handleAppClick = (app) => {
        if (app.url) {
            window.open(app.url, "_blank"); // Open external links in new tab
        } else {
            setOpenApp(app);
        }
    };

    const handleClosePage = () => {
        setOpenApp(null);
    };

    return (
        <div className="relative flex flex-col items-center">
            {/* iPad Background with Icons */}
            <div
                id="ipad-container"  // ADDED THIS ID
                className="relative w-[578px] h-[800px] rounded-[40px] overflow-hidden flex items-center justify-center shadow-2xl shadow-gray-500"
                style={{
                    backgroundImage: `url(${ipadbg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute top-[72px] w-full pl-[78px] pr-[118px]">
                    {/* Row 1 */}
                    <div className="grid grid-cols-4 gap-[110px] mb-[78px]">
                        {ipadApps.slice(0, 2).map((app) => (
                            <button
                                key={app.index}
                                className="w-[44px] h-[44px] rounded-md shadow-md cursor-pointer flex items-center justify-center"
                                onClick={() => handleAppClick(app)}
                            >
                            </button>
                        ))}
                    </div>
                    {/* Row 2 */}
                    <div className="grid grid-cols-4 gap-[110px] mb-[79px]">
                        {ipadApps.slice(2, 6).map((app) => (
                            <button
                                key={app.index}
                                className="w-[44px] h-[44px] rounded-md shadow-md cursor-pointer flex items-center justify-center"
                                onClick={() => handleAppClick(app)}
                            >
                            </button>
                        ))}
                    </div>
                    {/* Row 3 */}
                    <div className="grid grid-cols-4 gap-[110px] mb-[79px]">
                        {ipadApps.slice(6, 10).map((app) => (
                            <button
                                key={app.index}
                                className="w-[44px] h-[44px] rounded-md shadow-md cursor-pointer flex items-center justify-center"
                                onClick={() => handleAppClick(app)}
                            >
                            </button>
                        ))}
                    </div>
                    {/* Row 4 */}
                    <div className="grid grid-cols-4 gap-[110px] mb-[79px]">
                        {ipadApps.slice(10, 14).map((app) => (
                            <button
                                key={app.index}
                                className="w-[44px] h-[44px] rounded-md shadow-md cursor-pointer flex items-center justify-center"
                                onClick={() => handleAppClick(app)}
                            >
                            </button>
                        ))}
                    </div>
                    {/* Row 5 */}
                    <div className="grid grid-cols-4 gap-[110px] mb-[78px]">
                        {ipadApps.slice(14, 18).map((app) => (
                            <button
                                key={app.index}
                                className="w-[44px] h-[44px] rounded-md shadow-md cursor-pointer flex items-center justify-center"
                                onClick={() => handleAppClick(app)}
                            >
                            </button>
                        ))}
                    </div>
                    {/* Row 6: App Store, Terminal, Notes */}
                    <div className="grid grid-cols-4 gap-[110px] mb-[79px]">
                        <div /> {/* Empty div to shift items right */}
                        {ipadApps.slice(18, 21).map((app) => (
                            <button
                                key={app.index}
                                className="w-[44px] h-[44px] rounded-md shadow-md cursor-pointer flex items-center justify-center"
                                onClick={() => handleAppClick(app)}
                            >
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {openApp && <AppPage app={openApp} onClose={handleClosePage} />}
        </div>
    );
};

function Shelf() {
    return <Ipad />;
}

export default Shelf;

