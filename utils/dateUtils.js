export const getHoliday = () => {
  const today = new Date();
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

  // Holiday Checks
  if (month === 0 && day === 1) return "New Year's Day"; // January 1st 🎉
  if (month === 4 && day === getLastMondayOfMay()) return "Memorial Day";
  if (month === 5 && day === 14) return "Mother's Day"; // Second Sunday of May (approximate)
  if (month === 5 && day === 31) return "Veterans Day"; // Fixed example
  if (month === 8 && day === getFirstMondayOfSeptember()) return "Labor Day";
  if (month === 10 && day === getThanksgivingDay()) return "Thanksgiving"; // Fourth Thursday of November
  if (month === 11 && day === 12) return "Guadalupe Day"; // December 12th 🌹
  if (month === 11 && day === 25) return "Christmas"; // December 25
  if (month === 5 && day === 21) return "Father's Day"; // Third Sunday of June (approximate)

  return null; // No holiday
};


// Need one for st.kilian's day, 
// Need one for spanish ministry anniversary
// Christmas Eve
// Day of the Holy Family
// Valentines Day