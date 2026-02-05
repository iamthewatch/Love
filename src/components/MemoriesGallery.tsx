import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const memories = [
  {
    url: "src/assets/img/sunset.jpg",
    caption: "Вместе смотрим на закат 🌅"
  },
  {
    url: "src/assets/img/flower.jpg",
    caption: "Дарить тебе все что захочешь 😊"
  },
  {
    url: "src/assets/img/funny.jpg",
    caption: "Веселые моменты с тобой ❤️"
  },
  {
    url: "src/assets/img/date.jpg",
    caption: "Наше свидания за ужином 🍷"
  },
  {
    url: "src/assets/img/carry.jpg",
    caption: "Вечно носить тебя на руках 💑"
  },
  {
    url: "src/assets/img/birthday.jpg",
    caption: "Твое день рождения 🥹"
  }
];

export function MemoriesGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-red-600 mb-4">
            Наши драгоценные воспоминания
          </h2>
          <p className="text-xl text-gray-600">
            Каждая фотография рассказывает о нас историю
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                <ImageWithFallback
                  src={memory.url}
                  alt={memory.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-lg">{memory.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-pink-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={memories[selectedImage].url}
                  alt={memories[selectedImage].caption}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                />
                <p className="text-white text-center text-xl mt-4">
                  {memories[selectedImage].caption}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
