// this JS snippet is executed directly on the meetup past events page

// Select all card elements
var cards = document.querySelectorAll('.list--infinite-scroll.eventList-list .eventCard--link');

// Create an array to store the date, title, and attendees of each card
var data = [];

console.log('Number of cards found:', cards.length); // debug

// Initialize ID counter
var id = 1;

// Loop through each card from last to first
for (var i = cards.length - 1; i >= 0; i--) {
    console.log('Processing card number', i+1); // debug

    // Get parent of current card
    var parentCard = cards[i].parentNode;

    // Find title within the parentCard
    var titleElement = parentCard.querySelector('.eventCardHead--title');
    
    // Find attending count within the parentCard
    var attendingCountElement = parentCard.querySelector('.avatarRow--attendingCount span');

    // Find time within the parentCard
    var timeElement = parentCard.querySelector('.eventTimeDisplay time');

    // Check if the timeElement has a valid datetime attribute
    if (!timeElement || !timeElement.hasAttribute('datetime')) {
        console.log('Invalid date in card number', i+1); // debug
        continue;
    }

    // Skip the current event if it has been canceled (i.e., if the date has the class 'text--strikethrough')
    var dateContainer = parentCard.querySelector('.eventTimeDisplay');
    if (dateContainer.classList.contains('text--strikethrough')) {
        console.log('Skipping canceled event in card number', i+1); // debug
        continue;
    }

    // Get the date of the event
    var datetime = timeElement.getAttribute('datetime');
    var date = new Date(parseInt(datetime));

    // Check if the date is valid
    if (isNaN(date.getTime())) {
        console.log('Invalid date format in card number', i+1); // debug
        console.log('Datetime attribute:', datetime); // debug
        continue;
    }

    // Get the number of attendees
    var attendees = 0;
    if (attendingCountElement) {
        attendees = parseInt(attendingCountElement.textContent.trim());
    }

    // Create an object to store the event data
    var event = {
        id: id,
        date: date.toISOString(),
        title: titleElement.textContent.trim(),
        attendees: attendees
    };

    // Add the event to the data array
    data.push(event);

    // Increment ID counter
    id++;
}

console.log(JSON.stringify(data)); // debug
