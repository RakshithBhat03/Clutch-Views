const getFormattedTime = (date) => {
  const hours = date.getHours();
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const time24Format = `${hours}:${minutes}`;
  const time12Format = `${hours % 12 || 12}:${minutes}`;
  return { time12Format, time24Format };
};
export { getFormattedTime };
