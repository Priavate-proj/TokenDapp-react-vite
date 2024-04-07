// Function to check if it's closing time
export function checkTime() {
  // Function to check if it's within working hours
  function isWithinWorkingHours() {
    const currentDate = new Date();
    const currentDay = currentDate.getUTCDay(); // Get the current day of the week in UTC time (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const currentHour = currentDate.getUTCHours() - 5; // Get the current hour adjusted to EST time zone

    const workingHours = {
      0: { start: 11, end: 19 }, // Sunday: 11am - 7pm EST (16 - 24 UTC)
      1: { start: 11, end: 21 }, // Monday to Thursday: 11am - 9pm EST (16 - 24 UTC)
      2: { start: 11, end: 21 },
      3: { start: 11, end: 21 },
      4: { start: 11, end: 21 },
      5: { start: 11, end: 22 }, // Friday and Saturday: 11am - 10pm EST (16 - 3 UTC)
      6: { start: 11, end: 22 },
    };

    // Get the working hours for the current day
    const hours = workingHours[currentDay];

    // Check if it's within working hours
    if (hours) {
      return currentHour >= hours.start && currentHour < hours.end;
    } else {
      return false; // Outside working hours if not a valid day (e.g., weekday)
    }
  }

  // Function to check if it's 1 hour 30 minutes to closing time
  function isStopOrder() {
    const currentDate = new Date();
    const currentDay = currentDate.getUTCDay(); // Get the current day of the week in UTC time (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const currentHour = currentDate.getUTCHours() - 5; // Get the current hour adjusted to EST time zone

    const closingTimes = {
      0: 19, // Sunday closes at 7pm EST (23 UTC)
      1: 21, // Monday to Thursday closes at 9pm EST (1 UTC)
      2: 21,
      3: 21,
      4: 21,
      5: 22, // Friday and Saturday closes at 10pm EST (2 UTC)
      6: 22,
    };

    // Get the closing time for the current day
    const closingTime = closingTimes[currentDay];

    // Check if it's 1 hour 30 minutes to closing time
    if (closingTime !== undefined) {
      return currentHour === closingTime - 1 && currentDate.getMinutes() >= 30;
    } else {
      return false; // Outside working hours if not a valid day (e.g., weekday)
    }
  }

  function handleCheckoutButtonClick(){
    if (!isWithinWorkingHours() || isStopOrder()) {
      console.log("closed");
    } else {
      console.log("opened");
    }
  }

  // Find the checkout button by ID
  const checkoutButton = document.getElementById("close-checkout");

  // Add event listener to the checkout button
  if (checkoutButton) {
    checkoutButton.addEventListener("click", handleCheckoutButtonClick);
  }

  // Check initially if the button should be enabled or disabled
  handleCheckoutButtonClick();
}
