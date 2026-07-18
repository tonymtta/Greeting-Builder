function getGreeting(timeOfDay) {
  if (timeOfDay === "morning") {
    return "Good morning!";
  } else if (timeOfDay === "afternoon") {
    return "Good afternoon!";
  } else if (timeOfDay === "evening") {
    return "Good evening!";
  }
}

function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function createGreeting(firstName, lastName, timeOfDay) {
    const greeting = getGreeting(timeOfDay);
    const formatName = formatName(firstName, lastName);
    return `${greeting} ${formatName}`;
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));
