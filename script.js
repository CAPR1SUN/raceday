// initialize variables
let startTime
// saving the input values
function save() {
    let nameValue = document.getElementById('fullName').value
    let ageValue = document.getElementById('age').value
    let timeValue = document.getElementById('time').value
    console.log(`Name: ${nameValue} Age: ${ageValue} Time of Registration: ${timeValue}`);

    // getting the variables for display
    let greetingDisplay = document.getElementById('greeting');
    let raceNumberDisplay = document.getElementById('racenumber');
    let startTimeDisplay = document.getElementById('startTime');

    // LOGIC FOR THE NUMBER ASSIGNMENT
    let raceNumber = Math.floor(Math.random() * 1000);
    
    // Parsed integers to get time
    if (ageValue <= 18 && parseInt(timeValue.replace(':','')) < parseInt("07:30".replace(':',''))) {
        raceNumber += 1000;
        startTime = "9:30 AM";
    } else if (ageValue < 18 && parseInt(timeValue.replace(':','')) < parseInt("09:30".replace(':','')) > parseInt("07:31".replace(':',''))) {
        raceNumber;
        startTime = "11:00 AM";
    } else if (ageValue > 18) {
        raceNumber;
        startTime = "12:30 AM";
    } 

    // specify the text in the greeting element
    let greetingText = `Hello, ${nameValue}! Your race number is`;

    // display the values entered by the user
    greetingDisplay.innerText = greetingText;
    raceNumberDisplay.innerText = raceNumber;
    startTimeDisplay.innerText = `You will start the race at ${startTime}`;
}  