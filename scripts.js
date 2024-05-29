document.addEventListener("DOMContentLoaded", function() {
    // Schedule data with results
    const scheduleData = [
            { date: "Feb 16", location: "Home", opponent: "Northern Colorado", result: "W 9-3" },
            { date: "Feb 17", location: "Home", opponent: "Northern Colorado", result: "W 3-2" },
            { date: "Feb 17", location: "Home", opponent: "Northern Colorado", result: "W 5-3" },
            { date: "Feb 18", location: "Home", opponent: "Northern Colorado", result: "W 8-0" },
            { date: "Feb 23", location: "Home", opponent: "Kent State", result: "W 8-5" },
            { date: "Feb 24", location: "Home", opponent: "Kent State", result: "W 10-2" },
            { date: "Feb 25", location: "Home", opponent: "Kent State", result: "W 13-2" },
            { date: "Feb 28", location: "Away", opponent: "McNeese State", result: "W 13-4" },
            { date: "Mar 1", location: "Neutral", opponent: "Army", result: "W 4-0" },
            { date: "Mar 2", location: "Neutral", opponent: "Creighton", result: "W 12-0" },
            { date: "Mar 3", location: "Neutral", opponent: "Air Force", result: "W 8-5" },
            { date: "Mar 5", location: "Home", opponent: "Xavier", result: "W 11-3" },
            { date: "Mar 6", location: "Home", opponent: "Xavier", result: "L 4-6" },
            { date: "Mar 8", location: "Home", opponent: "Southern Miss", result: "L 4-9" },
            { date: "Mar 9", location: "Home", opponent: "Southern Miss", result: "L 3-11" },
            { date: "Mar 10", location: "Home", opponent: "Southern Miss", result: "W 18-11" },
            { date: "Mar 12", location: "Away", opponent: "Northwestern State", result: "L 5-11" },
            { date: "Mar 13", location: "Home", opponent: "UL-Lafayette", result: "L 5-9" },
            { date: "Mar 15", location: "Home", opponent: "Northwestern State", result: "W 11-9" },
            { date: "Mar 16", location: "Home", opponent: "Northwestern State", result: "W 7-5" },
            { date: "Mar 17", location: "Home", opponent: "Northwestern State", result: "W 15-5" },
            { date: "Mar 19", location: "Away", opponent: "LSU", result: "L 1-11" },
            { date: "Mar 20", location: "Away", opponent: "Nicholls State", result: "W 6-4" },
            { date: "Mar 22", location: "Home", opponent: "Jacksonville State", result: "W 12-8" },
            { date: "Mar 23", location: "Home", opponent: "Jacksonville State", result: "W 9-4" },
            { date: "Mar 24", location: "Home", opponent: "Jacksonville State", result: "W 5-1" },
            { date: "Mar 26", location: "Away", opponent: "ULM", result: "W 8-4" },
            { date: "Mar 28", location: "Away", opponent: "FIU", result: "L 4-13" },
            { date: "Mar 29", location: "Away", opponent: "FIU", result: "W 7-6" },
            { date: "Mar 30", location: "Away", opponent: "FIU", result: "L 3-8" },
            { date: "Apr 2", location: "Home", opponent: "Little Rock", result: "W 7-6" },
            { date: "Apr 5", location: "Home", opponent: "Middle Tennessee", result: "W 5-3" },
            { date: "Apr 6", location: "Home", opponent: "Middle Tennessee", result: "L 5-9" },
            { date: "Apr 7", location: "Home", opponent: "Middle Tennessee", result: "W 11-9" },
            { date: "Apr 10", location: "Away", opponent: "UL-Lafayette", result: "W 7-2" },
            { date: "Apr 12", location: "Away", opponent: "Arizona", result: "L 1-9" },
            { date: "Apr 13", location: "Away", opponent: "Arizona", result: "L 5-6" },
            { date: "Apr 14", location: "Away", opponent: "Arizona", result: "L 2-5" },
            { date: "Apr 16", location: "Home", opponent: "UL-Monroe", result: "W 6-2" },
            { date: "Apr 19", location: "Away", opponent: "Dallas Baptist", result: "W 5-3" },
            { date: "Apr 20", location: "Away", opponent: "Dallas Baptist", result: "L 3-8" },
            { date: "Apr 21", location: "Away", opponent: "Dallas Baptist", result: "W 6-1" },
            { date: "Apr 24", location: "Home", opponent: "Nicholls State", result: "W 10-7" },
            { date: "Apr 26", location: "Home", opponent: "Sam Houston", result: "W 2-0" },
            { date: "Apr 27", location: "Home", opponent: "Sam Houston", result: "W 5-4" },
            { date: "Apr 28", location: "Home", opponent: "Sam Houston", result: "W 12-9" },
            { date: "Apr 30", location: "Away", opponent: "UL-Monroe", result: "W 8-4" },
            { date: "May 3", location: "Away", opponent: "New Mexico State", result: "W 18-4" },
            { date: "May 4", location: "Away", opponent: "New Mexico State", result: "L 15-16" },
            { date: "May 5", location: "Away", opponent: "New Mexico State", result: "L 6-12" },
            { date: "May 10", location: "Home", opponent: "Western Kentucky", result: "W 9-7" },
            { date: "May 11", location: "Home", opponent: "Western Kentucky", result: "W 12-2" },
            { date: "May 12", location: "Home", opponent: "Western Kentucky", result: "W 7-1" },
            { date: "May 17", location: "Away", opponent: "Liberty", result: "W 4-3" },
            { date: "May 18", location: "Away", opponent: "Liberty", result: "W 12-8" },
            { date: "May 19", location: "Away", opponent: "Liberty", result: "W 10-1" },
            { date: "May 22", location: "Neutral", opponent: "Middle Tennessee", result: "W 8-2" },
	    { date: "May 24", location: "Neutral", opponent: "Liberty", result: "L 2-6" },
	    { date: "May 24", location: "Neutral", opponent: "Sam Houston", result: "W 5-3" },
	    { date: "May 25", location: "Neutral", opponent: "Liberty", result: "W 8-7" },
	    { date: "May 25", location: "Neutral", opponent: "Liberty", result: "W 6-5" },
	    { date: "May 26", location: "Neutral", opponent: "Dallas Baptist", result: "L 10-17" },
	    { date: "May 31", location: "Away", opponent: "Kansas St", result: "" },
	    

    ];

    populateUpcomingGames(scheduleData);

function populateUpcomingGames(data) {
    const table = document.getElementById('schedule-table');
    if (!table) {
        console.error('Schedule table not found!');
        return;
    }

    // Optionally limit the number of games to display for a smaller table
    const gamesToShow = data.slice(Math.max(data.length - 10, 0));

    gamesToShow.forEach(game => {
        const row = table.insertRow();
        row.insertCell(0).innerText = game.date;
        row.insertCell(1).innerText = game.location;
        row.insertCell(2).innerText = game.opponent;
        let resultCell = row.insertCell(3);
        resultCell.innerText = game.result;
        resultCell.className = game.result.startsWith('W') ? 'win' : 'loss';
    });
}


// Define Conference USA teams
const conferenceUSATeams = ["Jacksonville State", "FIU", "Middle Tennessee", "Dallas Baptist", "New Mexico State", "Western Kentucky", "Liberty","Sam Houston"];

// Initialize counters
let totalWins = 0;
let totalLosses = 0;
let homeWins = 0;
let homeLosses = 0;
let awayWins = 0;
let awayLosses = 0;
let neutralWins = 0;
let neutralLosses = 0;
let conferenceWins = 0;
let conferenceLosses = 0;

// Populate full schedule table on the schedule page
const fullScheduleTable = document.getElementById("full-schedule-table");
if (fullScheduleTable) {
    // Create table headings
    const headingsRow = document.createElement("tr");
    headingsRow.innerHTML = `
        <th>Date</th>
        <th>Location</th>
        <th>Opponent</th>
        <th>Score</th>
    `;
    fullScheduleTable.appendChild(headingsRow);

    // Populate table data and calculate wins and losses
    scheduleData.forEach(game => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${game.date}</td>
            <td>${game.location}</td>
            <td>${game.opponent}</td>
            <td class="${game.result.includes('W') ? 'win' : 'loss'}">${game.result}</td>
        `;
        fullScheduleTable.appendChild(row);

    // Update win/loss counters based on game result
    if (game.result.includes('W')) {
        totalWins++;
        if (game.location.toLowerCase() === "home") {
            homeWins++;
        } else if (game.location.toLowerCase() === "away") {
            awayWins++;
        } else if (game.location.toLowerCase() === "neutral") {
            neutralWins++;
        } else {
            console.log("No Location Found");
        }
        if (conferenceUSATeams.includes(game.opponent)) {
            conferenceWins++;
        }
    } else if (game.result.includes('L')) {
        totalLosses++;
        if (game.location.toLowerCase() === "home") {
            homeLosses++;
        } else if (game.location.toLowerCase() === "away") {
            awayLosses++;
        } else {
            neutralLosses++;
        }
        if (conferenceUSATeams.includes(game.opponent)) {
            conferenceLosses++;
        }
    } else {
        // Skip games without a result
        console.log("Skipping game without result");
    }
    });

        // Calculate total games played (excluding skipped games)
    const totalGamesPlayed = totalWins + totalLosses;

        // Calculate win percentages
    const totalWinPercentage = totalGamesPlayed ? (totalWins / totalGamesPlayed).toFixed(3) : 0;
    const cusaWinPercentage = conferenceWins ? (conferenceWins / (conferenceWins + conferenceLosses)).toFixed(3) : 0;

    // Populate wins and losses section
    const winsLossesSection = document.getElementById("wins-losses");
    if (winsLossesSection) {
        winsLossesSection.innerHTML = `
            <h2>Wins and Losses</h2>
            <p>Total: ${totalWins} - ${totalLosses}</p>
            <p>Home: ${homeWins} - ${homeLosses}</p>
            <p>Away: ${awayWins} - ${awayLosses}</p>
            <p>Neutral: ${neutralWins} - ${neutralLosses}</p>
            <p>CUSA: ${conferenceWins} - ${conferenceLosses}</p>
            <p></p>
            <p></p>
            <h2>Win Percentages</h2>
            <p>Total Win Percentage:   ${totalWinPercentage}</p>
            <p>CUSA Win Percentage:    ${cusaWinPercentage}</p>
        `;
    }
}


});
