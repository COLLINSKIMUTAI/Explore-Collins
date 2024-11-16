// Function to generate a dynamic welcoming message based on the time of day
function generateWelcomeMessage() {
  const userName = document.getElementById("userName").value;
  const welcomeMessageElement = document.getElementById("welcomeMessage");
  const hours = new Date().getHours();

  let greeting;

  if (hours >= 5 && hours < 12) {
    greeting = "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  if (userName) {
    welcomeMessageElement.textContent = `${greeting}, ${userName}! Welcome to our website.`;
  } else {
    welcomeMessageElement.textContent = `${greeting}! Welcome to our website. Please enter your name.`;
  }
}
