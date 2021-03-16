export function setMonth (month) {
  switch (month) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'September';
    case 9:
      return 'October';
    case 10:
      return 'November';
    default:
      return 'December';
  }
}
export function ClockTimeZone(timezone) {
  let TimezoneOffset = timezone/3600;
  let localTime = new Date();
  let ms = localTime.getTime() + (localTime.getTimezoneOffset() * 60000) + TimezoneOffset * 3600000;
  let time = new Date(ms);
  let hour = time.getHours();
  let day = time.getDate();
  let month = time.getMonth();
  let minute = time.getMinutes();
  let temp = `${day} ${setMonth(month)} `;
  temp  += ((hour < 10) ? "0" : "") + hour;
  temp += ((minute < 10) ? ":0" : ":") + minute;
  return temp;
}
