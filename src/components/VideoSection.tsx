import React from 'react';
import { Play, Video, X } from 'lucide-react';
import { motion } from 'motion/react';

const highlightsVideo = new URL('../assets/video/highlights.mp4', import.meta.url).href;
const paintVideo = new URL('../assets/video/paint.mp4', import.meta.url).href;
const winterVideo = new URL('../assets/video/winter.mp4', import.meta.url).href;

type VideoItem = {
  title: string;
  description: string;
  src: string;
  duration: string;
};

const videos: VideoItem[] = [
  {
    title: "Наши лучшие моменты",
    src: highlightsVideo,
    description: "Самые тёплые кадры, в которые я влюблён заново каждый раз.",
    duration: "0:51"
  },
  {
    title: "Ты в красках",
    src: paintVideo,
    description: "Немного творчества, немного хаоса и много твоей красоты.",
    duration: "0:22"
  },
  {
    title: "Зимняя сказка",
    src: winterVideo,
    description: "Когда даже холодно вокруг, но рядом с тобой всегда тепло.",
    duration: "0:20"
  }
];

export function VideoSection() {
  const [activeVideo, setActiveVideo] = React.useState<VideoItem | null>(null);
  const previewRefs = React.useRef<HTMLVideoElement[]>([]);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-red-600 mb-4">
            Видеоаписи
          </h2>
          <p className="text-xl text-gray-600">
            Мгновения, которые ожили
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setActiveVideo(video)}
              onMouseEnter={() => {
                const el = previewRefs.current[index];
                if (el) {
                  el.currentTime = 0;
                  void el.play();
                }
              }}
              onMouseLeave={() => {
                const el = previewRefs.current[index];
                if (el) {
                  el.pause();
                  el.currentTime = 0;
                }
              }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-video bg-gray-900">
                <video
                  ref={(el) => {
                    if (el) previewRefs.current[index] = el;
                  }}
                  src={video.src}
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl"
                  >
                    <Play size={28} className="text-red-600 fill-red-600 ml-1" />
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Video size={16} className="text-white" />
                      <h3 className="text-white text-lg">{video.title}</h3>
                    </div>
                    <p className="text-white/80 text-sm">{video.description}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-black/70 text-white text-xs">
                    {video.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-4xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/70 hover:bg-black/90 text-white p-2.5"
              >
                <X size={26} />
              </button>
              <div className="bg-black">
                <video
                  src={activeVideo.src}
                  controls
                  autoPlay
                  className="max-h-[80vh] object-contain"
                />
              </div>
              <div className="p-4 bg-gradient-to-r from-pink-50 via-rose-50 to-red-50">
                <div className="flex items-center gap-2 mb-1">
                  <Video size={18} className="text-red-600" />
                  <h3 className="text-lg font-semibold text-red-700">{activeVideo.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{activeVideo.description}</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
