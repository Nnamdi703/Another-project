// const navBar = document.body.style.color="green"

function showSideBar(){
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display = 'flex'
}

function hideSideBar(){
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display = 'none'
}

function date(){
    const now = new Date();
    const date = now.toLocaleDateString();
    const dateday = document.getElementById('currentDay');
    dateday.innerText = `${date}`;
}

date()

// function displayTime() {
//     const now = new Date();
//     const date = now.toLocaleDateString();
//     const time = now.toLocaleTimeString();
//     const datetime = document.getElementById('currentDay');
//     datetime.innerText = `${date} ${time}`;
// }

// displayTime();

function displayTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // Get hours (in 24-hour format) and pad with leading zero if necessary
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with leading zero if necessary
    const timeString = `${hours}:${minutes}`; // Create a string in format "HH:MM"
    const timeElement = document.getElementById('currentTimeUTC');
    timeElement.innerText = timeString; // Display the time in the specified element
}

// Call the function to display the time initially
displayTime();