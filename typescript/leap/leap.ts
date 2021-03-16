function isLeapYear(year: number): boolean {
  let isleap;
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        isleap = true;
      } else {
        isleap = false;
      }
    } else {
      isleap = true;
    }
  } else {
    isleap = false;
  }
  return isleap;
}

export default isLeapYear;
