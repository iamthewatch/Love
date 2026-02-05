import React from 'react';
import {Heart, Sparkles, Play, Pause} from 'lucide-react';
import {motion} from 'motion/react';

export function Hero() {

    const audioRef = React.useRef(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.volume = 0.4;
            audioRef.current.loop = true;
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
            {/* Animated hearts background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-pink-300 opacity-20"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight + 50
                        }}
                        animate={{
                            y: -100,
                            x: Math.random() * window.innerWidth
                        }}
                        transition={{
                            duration: Math.random() * 10 + 15,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    >
                        <Heart size={Math.random() * 30 + 20} fill="currentColor"/>
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{type: "spring", duration: 0.8}}
                    className="mb-6 flex justify-center"
                >
                    <div className="relative">
                        <Heart
                            size={80}
                            className="text-red-500 fill-red-500 drop-shadow-lg"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            className="absolute -top-2 -right-2"
                        >
                            <Sparkles size={24} className="text-yellow-400 fill-yellow-400"/>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.3}}
                    className="mb-6"
                >
                    <span className="block text-5xl md:text-7xl text-red-600 mb-2">
                        С Днем Любви
                    </span>
                    <span className="block text-3xl md:text-5xl text-pink-700">
                        Моя Дорогая
                    </span>
                </motion.h1>

                <motion.p
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.6}}
                    className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed"
                >
                    Та, кто делает каждый день ярче, каждое мгновение слаще, а каждое воспоминание незабываемым. Это
                    наша история, наше путешествие и наша любовь, запечатленные во времени.
                </motion.p>

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.9}}
                    className="flex gap-2 justify-center items-center text-pink-600 mb-8"
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                scale: [1, 1.3, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2
                            }}
                        >
                            <Heart size={20} fill="currentColor"/>
                        </motion.div>
                    ))}
                </motion.div>

                <audio ref={audioRef} src="src/assets/audio/music.mp3"/>
                <motion.button
                    onClick={toggleMusic}
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    animate={isPlaying ? {boxShadow: "0 0 30px rgba(244,63,94,0.6)"} : {}}
                    transition={{type: "spring", stiffness: 300}}
                    className="
                        w-16 h-16
                        rounded-full

                        mx-auto
                        flex
                        items-center
                        justify-center

                        bg-gradient-to-r
                        from-rose-500
                        to-pink-500
                        text-red-600
                        text-lg
                        font-semibold
                        shadow-lg
                        shadow-rose-200
                        border
                        border-rose-300/70
                        hover:from-rose-600
                        hover:to-pink-600
                        hover:shadow-rose-300
                        focus:outline-none
                        focus:ring-2
                        focus:ring-rose-400
                        focus:ring-offset-2
                        focus:ring-offset-rose-50
                    "
                >
                    {isPlaying ? (
                        <Pause size={32}/>
                    ) : (
                        <Play size={32}/>
                    )}
                </motion.button>
            </div>
        </section>
    );
}