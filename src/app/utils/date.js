// Check if the current hour of the day is between 7am and 7pm
export const isDayTime = () => {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19;
};
