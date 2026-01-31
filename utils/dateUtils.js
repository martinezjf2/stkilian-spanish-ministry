export const getHoliday = () => {
  const today = new Date();
  // const today = new Date("2025-05-12");
  // console.log(today)
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-indexed (Jan = 0, Dec = 11)
  const day = today.getDate();

  // Function to find the last Monday of May (Memorial Day)
  const getLastMondayOfMay = () => {
    const lastDayOfMay = new Date(year, 4, 31); // May 31st
    const dayOfWeek = lastDayOfMay.getDay();
    return 31 - (dayOfWeek === 1 ? 0 : (dayOfWeek + 6) % 7);
  };

  // Function to find the first Monday of September (Labor Day)
  const getFirstMondayOfSeptember = () => {
    for (let i = 1; i <= 7; i++) {
      const date = new Date(year, 8, i); // September
      if (date.getDay() === 1) return i;
    }
  };

  // Function to find the fourth Thursday of November (Thanksgiving)
  const getThanksgivingDay = () => {
    let count = 0;
    for (let i = 1; i <= 30; i++) {
      const date = new Date(year, 10, i); // November
      if (date.getDay() === 4) {
        // Thursday
        count++;
        if (count === 4) return i;
      }
    }
  };

  // Function to find the second Sunday of May (Mother's Day)
  const getMothersDay = () => {
    let count = 0;
    for (let i = 1; i <= 31; i++) {
      const date = new Date(year, 4, i); // May
      if (date.getDay() === 0) {
        // Sunday
        count++;
        if (count === 2) return i;
      }
    }
  };

  // Function to find the third Sunday of June (Father's Day)
  const getFathersDay = () => {
    let count = 0;
    for (let i = 1; i <= 30; i++) {
      const date = new Date(year, 5, i); // June
      if (date.getDay() === 0) {
        // Sunday
        count++;
        if (count === 3) return i;
      }
    }
  };

  // Function to calculate Easter Sunday (Meeus/Jones/Butcher algorithm)
  const getEasterSunday = (year) => {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31); // March = 3, April = 4
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(year, month - 1, day);
  };

  // Function to get Ash Wednesday (46 days before Easter Sunday)
  const getAshWednesday = (year) => {
    const easterSunday = getEasterSunday(year);
    const ashWednesday = new Date(easterSunday);
    ashWednesday.setDate(easterSunday.getDate() - 46);
    return ashWednesday;
  };

  // Function to check if today is the last Friday of the month
  const isLastFriday = () => {
    const lastDayOfMonth = new Date(year, month + 1, 0); // Last day of current month
    const lastDate = lastDayOfMonth.getDate();

    for (let i = lastDate; i > lastDate - 7; i--) {
      const date = new Date(year, month, i);
      if (date.getDay() === 5) {
        // 5 = Friday
        return today.getDate() === i;
      }
    }
    return false;
  };

  // Fucntion to get every Second Wednesday for Spanish Holy Hour
  const isSecondWednesday = () => {
    const weekday = today.getDay(); // 0 = Sunday, 3 = Wednesday
    const dateOfMonth = today.getDate();
    return weekday === 3 && dateOfMonth >= 8 && dateOfMonth <= 14;
  };

  // Function to get Palm Sunday (7 days before Easter)
  const getPalmSunday = (year) => {
    const easterSunday = getEasterSunday(year);
    const palmSunday = new Date(easterSunday);
    palmSunday.setDate(easterSunday.getDate() - 7);
    return palmSunday;
  };

  const palmSunday = getPalmSunday(year);
  const ashWednesday = getAshWednesday(year);

  // Holiday Checks
  if (isSecondWednesday()) return "Adult Holy Hour";
  if (isLastFriday()) return "Youth Holy Hour";
  if (month === 0 && day === 1) return "New Year's Day"; // January 1st 🎉
  if (month === 4 && day === getLastMondayOfMay()) return "Memorial Day";
  if (month === 4 && day === getMothersDay()) return "Mother's Day"; // Second Sunday of May
  if (month === 5 && day === getFathersDay()) return "Father's Day"; // Third Sunday of June
  if (month === 5 && day === 31) return "Veterans Day"; // Fixed example
  if (month === 8 && day === getFirstMondayOfSeptember()) return "Labor Day";
  if (month === 10 && day === getThanksgivingDay()) return "Thanksgiving"; // Fourth Thursday of November
  if (month === 11 && day === 12) return "Guadalupe Day"; // December 12th 🌹
  if (month === 11 && day === 25) return "Christmas"; // December 25
  if (month === 11 && day === 24) return "Christmas Eve"; // December 24
  if (month === 1 && day === 14) return "Valentine's Day"; // Valentines Day
  if (month === ashWednesday.getMonth() && day === ashWednesday.getDate()) return "Ash Wednesday"; // Dynamic date
  if (month === palmSunday.getMonth() && day === palmSunday.getDate()) return "Palm Sunday"; // Dynamic date
  if (month === 8 && day === 11) return "Remembering 9/11";
  if (month === 2 && day === 17) return "St.Patricks Day";
  if (month === 4 && day === 5) return "Cinco de Mayo";
  


  return null; // No holiday
};



// Need one for st.kilian's day,
// Need one for spanish ministry anniversary
// Day of the Holy Family
// Easter and Resurrection Day

// Have a day for every second wednesday of every month for Holy Hour Invitation

// For TESTING PURPOSES
// console.log(getHoliday())