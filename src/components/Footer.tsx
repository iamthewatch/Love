import React from 'react';
import {Heart} from 'lucide-react';
import {motion} from 'motion/react';

export function Footer() {
    return (
        <footer className="py-12 px-4 bg-gradient-to-r from-pink-100 via-rose-100 to-red-100">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="space-y-6"
                >
                    <div className="flex justify-center items-center gap-2">
                        <Heart size={24} className="text-red-500 fill-red-500"/>
                        <Heart size={32} className="text-red-600 fill-red-600"/>
                        <Heart size={24} className="text-red-500 fill-red-500"/>
                    </div>

                    <h3 className="text-3xl md:text-4xl text-gray-800">
                        С Каждым Днем Я Люблю Тебя Все больше
                    </h3>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Спасибо тебе за то, что ты моя, моя жизнь и все для меня.
                        Желаю нам еще больше воспоминаний, приключений и счастливых дней, проведенных вместе.
                        Ты моя навеки. ❤️
                    </p>

                    <div className="pt-6 border-t border-pink-300 mt-8">
                        <p className="text-gray-500">
                            Сделано с <Heart size={16} className="inline text-red-500 fill-red-500 mx-1"/>
                            ради смысла всей моей жизни
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                            С любовью 2026
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
