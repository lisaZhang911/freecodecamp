const getTodayWeather = state => state.todayWeather || {};
const getFutureWeather = state => state.futureWeather || [];

export default { getTodayWeather, getFutureWeather };
