import React from 'react';
import { Calendar, Sparkles, Heart, Star } from 'lucide-react';
import { motion } from 'motion/react';

const storyMilestones = [
  {
    date: "Первая встреча",
    title: "Когда Наши Глаза Впервые Встретились",
    description: "Тот волшебный момент, когда я впервые увидел тебя и понял, что моя жизнь вот-вот изменится навсегда. Твоя улыбка осветила комнату и мгновенно покорила мое сердце.",
    icon: Sparkles,
    color: "pink"
  },
  {
    date: "Первое свидание",
    title: "Наше первое совместное приключение",
    description: "Нервное возбуждение, бесконечные разговоры и начало бесчисленных воспоминаний. Время пролетело незаметно, и мы обнаружили, насколько прекрасно мы общаемся.",
    icon: Heart,
    color: "rose"
  },
  {
    date: "5 Августа",
    title: "Ты сказал \"Да!\"",
    description: "В тот день, когда ты согласилась стать моей, а я стал твоим. Я обещал беречь тебя, поддерживать и любить всем сердцем.",
    icon: Star,
    color: "red"
  },
  {
    date: "Сегодня",
    title: "Наш Прекрасный подарок",
    description: "Каждый день, проведенный с тобой, - это подарок. Несмотря на все взлеты и падения, смех и слезы, ты остаешься моим величайшим благословением и вечной любовью.",
    icon: Heart,
    color: "pink"
  }
];

function getLoveDuration() {
  // 5 августа, 20:00, UTC+5
  const startDate = new Date('2025-08-05T20:00:00+05:00');
  const now = new Date();

  // @ts-ignore
  let diff = Math.floor((now - startDate) / 1000);

  const days = Math.floor(diff / (60 * 60 * 24));
  diff -= days * 60 * 60 * 24;

  const hours = Math.floor(diff / (60 * 60));
  diff -= hours * 60 * 60;

  const minutes = Math.floor(diff / 60);
  diff -= minutes * 60;

  const seconds = diff;

  return { days, hours, minutes, seconds };
}

export function LoveStory() {
  const [time, setTime] = React.useState(getLoveDuration());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(getLoveDuration());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-red-600 mb-4">
            Наша история любви длится
          </h2>
          <p className="text-xl text-gray-600">
            {time.days} дней {time.hours} часов {time.minutes} минут {time.seconds} секунд ❤️
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300 via-rose-400 to-red-400 hidden md:block" />

          <div className="space-y-12">
            {storyMilestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                >
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border-2 border-pink-100">
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <Calendar size={18} className="text-gray-500" />
                        <span className="text-sm text-gray-500">{milestone.date}</span>
                      </div>
                      <h3 className="text-2xl text-gray-800 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br from-${milestone.color}-400 to-${milestone.color}-600 flex items-center justify-center shadow-lg z-10 border-4 border-white`}
                    >
                      <Icon size={28} className="text-red-500" fill="currentColor" />
                    </motion.div>
                  </div>

                  {/* Empty space for timeline */}
                  <div className="w-full md:w-5/12 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
