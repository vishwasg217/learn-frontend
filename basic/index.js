let count = 0;
let peopleCount  = document.getElementById('people-count');
let prevEntries = document.getElementById('prev-entries');

// array
let entries = [];

console.log(count);

function increment() {
    count++;
    peopleCount.innerText = count;
    console.log(`Current count: ${count}`);
}

function updatePrevEntries() {
    let entriesString = '';
    entries.forEach((entry, index) => {
        if (index === 0){
            entriesString += `${entry}`;
        }
        else {
            entriesString += `- ${entry} `;
        } 
    });
    prevEntries.textContent = "Previous Entries: " + entriesString;
    console.log(`Previous entries: ${entries}`);
}

function save() {
    entries.push(count)
    count = 0
    console.log(`Saved: ${count}`)
    peopleCount.innerText = count
    updatePrevEntries()
}


