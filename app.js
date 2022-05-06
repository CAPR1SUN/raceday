let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
const runnerAge = 18;

if (registeredEarly === true && runnerAge > 18) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly === true) {
  console.log(`Hello racer #${raceNumber}! You will start the race at 9:30 am.`);
} else if (runnerAge > 18 && registeredEarly === !true) {
  console.log(`Hello racer #${raceNumber}! You will start the race at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Hello racer #${raceNumber}! You will start the race at 12:30 am.`);
} else  {
    console.log(`Hello racer #${raceNumber}! Please see the registration desk.`);
  }




