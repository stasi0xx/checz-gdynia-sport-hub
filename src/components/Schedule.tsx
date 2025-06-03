
const Schedule = () => {
  const scheduleItems = [
    {
      day: "Poniedziałek",
      activities: [
        { time: "16:00-17:00", activity: "Piłka Nożna Dziewcząt (6-9 lat)", location: "Boisko główne" },
        { time: "17:30-19:00", activity: "Cheerleading (10-16 lat)", location: "Sala gimnastyczna" },
        { time: "19:30-21:00", activity: "Fitness dla dorosłych", location: "Sala fitness" }
      ]
    },
    {
      day: "Środa",
      activities: [
        { time: "16:00-17:30", activity: "Piłka Nożna Dziewcząt (10-14 lat)", location: "Boisko główne" },
        { time: "18:00-19:00", activity: "Cheerleading (5-9 lat)", location: "Sala gimnastyczna" },
        { time: "20:00-22:00", activity: "Padel", location: "Kort padel" }
      ]
    },
    {
      day: "Piątek",
      activities: [
        { time: "16:00-18:00", activity: "Piłka Nożna Dziewcząt (15-18 lat)", location: "Boisko główne" },
        { time: "18:30-19:30", activity: "Fitness", location: "Sala fitness" },
        { time: "20:00-21:30", activity: "Padel", location: "Kort padel" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Harmonogram Zajęć</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sprawdź kiedy odbywają się treningi w poszczególnych sekcjach
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {scheduleItems.map((day, index) => (
            <div key={index} className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">{day.day}</h3>
              <div className="space-y-4">
                {day.activities.map((activity, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-blue-800">{activity.time}</span>
                    </div>
                    <h4 className="font-medium text-gray-800 mb-1">{activity.activity}</h4>
                    <p className="text-sm text-gray-600">{activity.location}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Chcesz poznać pełny harmonogram?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300">
            Pobierz pełny plan zajęć
          </button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
