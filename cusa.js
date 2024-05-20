const teamData = {
    "LA Tech": {
        "games": [
            {
                "opponent": "vs Jacksonville State",
                "results": ["W 12-8", "W 9-4", "W 5-1"]
            },
            {
                "opponent": "at FIU",
                "results": ["L 4-13", "W 7-6", "L 3-8"]
            },
            {
                "opponent": "vs MTSU",
                "results": ["W 5-3", "W 6-3", "L 5-9"]
            },
            {
                "opponent": "at Dallas Baptist",
                "results": ["W 5-3", "L 3-8", "W 6-1"]
            },
            {
                "opponent": "vs Sam Houston",
                "results": ["W 2-0", "W 5-4", "W 12-9"]
            },
            {
                "opponent": "at New Mexico State",
                "results": ["W 18-4", "L 15-16", "L 6-12"]
            },
            {
                "opponent": "vs WKU",
                "results": ["W 9-7", "W 12-2", "W 7-1"]
            },
            {
                "opponent": "at Liberty",
                "results": ["W 4-3", "W 12-8", "W 10-1"]
            }
        ]
    },
    "Dallas Baptist": {
        "games": [
            {
                "opponent": "at Sam Houston",
                "results": ["W 3-1", "W 6-2", "L 5-6"]
            },
            {
                "opponent": "vs NM State",
                "results": ["W 8-3", "W 14-0", "W 13-3"]
            },
            {
                "opponent": "at WKU",
                "results": ["L 1-4", "L 3-6", "W 3-0"]
            },
            {
                "opponent": "vs LA Tech",
                "results": ["L 3-5", "W 8-3", "L 1-6"]
            },
            {
                "opponent": "at FIU",
                "results": ["W 9-3", "W 5-2", "W 11-0"]
            },
            {
                "opponent": "vs Jacksonville State",
                "results": ["W 10-9", "L 11-12", "W 5-4"]
            },
            {
                "opponent": "vs Liberty",
                "results": ["W 5-2", "W 4-3", "W 5-1"]
            },
            {
                "opponent": "at MTSU",
                "results": ["W 15-1", "W 15-6", "L 5-8"]
            }
        ]
    },
    "WKU": {
        "games": [
            {
                "opponent": "vs FIU",
                "results": ["L 1-11", "W 14-4", "L 3-7"]
            },
            {
                "opponent": "at Jacksonville State",
                "results": ["W 4-2", "W 5-4", "W 11-6"]
            },
            {
                "opponent": "vs Dallas Baptist",
                "results": ["W 4-1", "W 6-3", "L 0-3"]
            },
            {
                "opponent": "at Sam Houston",
                "results": ["W 7-5", "L 0-10", "W 8-7"]
            },
            {
                "opponent": "vs Liberty",
                "results": ["W 6-4", "W 10-7", "W 5-4"]
            },
            {
                "opponent": "at MTSU",
                "results": ["L 9-16", "W 4-3", "W 7-4"]
            },
            {
                "opponent": "at LA Tech",
                "results": ["L 7-9", "L 2-12", "L 1-7"]
            },
            {
                "opponent": "vs NM State",
                "results": ["L 4-5", "W 11-9", "W 6-2"]
            }
        ]
    },
    "Liberty": {
        "games": [
            {
                "opponent": "at MTSU",
                "results": ["W 11-6", "L 0-10", "W 25-9"]
            },
            {
                "opponent": "vs Sam Houston",
                "results": ["W 6-4", "W 10-5", "W 9-3"]
            },
            {
                "opponent": "at NM State",
                "results": ["W 9-3", "W 15-5", "L 6-8"]
            },
            {
                "opponent": "vs Jacksonville State",
                "results": ["W 7-2", "L 5-6", "W 12-6"]
            },
            {
                "opponent": "at WKU",
                "results": ["L 4-6", "L 7-10", "L 4-5"]
            },
            {
                "opponent": "vs FIU",
                "results": ["L 7-10", "W 11-5", "W 12-11"]
            },
            {
                "opponent": "at Dallas Baptist",
                "results": ["L 2-5", "L 3-4", "L 1-5"]
            },
            {
                "opponent": "vs LA Tech",
                "results": ["L 3-4 ", "L 8-12", "L 1-10"]
            }
        ]
    },
    "Sam Houston": {
        "games": [
            {
                "opponent": "at NM State",
                "results": ["W 10-0", "W 19-8", "L 6-7"]
            },
            {
                "opponent": "vs Dallas Baptist",
                "results": ["L 1-3", "L 2-6", "W 6-5"]
            },
            {
                "opponent": "at Liberty",
                "results": ["L 4-6", "L 5-10", "L 3-9"]
            },
            {
                "opponent": "vs WKU",
                "results": ["L 5-7", "W 10-0", "L 7-8"]
            },
            {
                "opponent": "vs MTSU",
                "results": ["W 4-3", "W 11-1", "W 3-2"]
            },
            {
                "opponent": "at LA Tech",
                "results": ["L 0-2", "L 4-5", "L 9-12"]
            },
            {
                "opponent": "at FIU",
                "results": ["W 7-1", "W 16-13", "W 10-6"]
            },
            {
                "opponent": "vs Jacksonville State",
                "results": ["W 12-2", "W 11-1", "W 6-2"]
            }
        ]
    },
    "FIU": {
        "games": [
            {
                "opponent": "vs MTSU",
                "results": ["L 8-12", "W 11-6", "W 16-6"]
            },
            {
                "opponent": "at WKU",
                "results": ["W 11-1", "L 4-14", "W 7-3"]
            },
            {
                "opponent": "vs LA Tech",
                "results": ["W 13-4", "L 6-7", "L 3-4"]
            },
            {
                "opponent": "at Jacksonville State",
                "results": ["W 13-10", "W 13-11", "W 18-12"]
            },
            {
                "opponent": "at NM State",
                "results": ["W 18-6", "L 3-9", "L 2-5"]
            },
            {
                "opponent": "vs Dallas Baptist",
                "results": ["L 0-11", "W 10-7", "L 5-11"]
            },
            {
                "opponent": "at Liberty",
                "results": ["L 11-12", "L 1-7", "L 13-16"]
            },
            {
                "opponent": "vs Sam Houston",
                "results": ["L 1-7", "L 13-16", "L 6-10"]
            }
        ]
    },
    "NM State": {
        "games": [
            {
                "opponent": "vs Sam Houston",
                "results": ["L 0-10", "L 8-19", "W 7-6"]
            },
            {
                "opponent": "at Dallas Baptist",
                "results": ["L 3-8", "L 0-14", "L 3-13"]
            },
            {
                "opponent": "vs Liberty",
                "results": ["L 3-9", "L 5-15", "W 8-6"]
            },
            {
                "opponent": "at MTSU",
                "results": ["W 15-12", "L 9-10", "W 9-1"]
            },
            {
                "opponent": "vs FIU",
                "results": ["L 11-13", "L 12-18", "L 6-18"]
            },
            {
                "opponent": "at Jacksonville State",
                "results": ["W 8-4", "W 9-5", "W 22-8"]
            },
            {
                "opponent": "vs LA Tech",
                "results": ["L 4-18", "W 16-15", "W 12-6"]
            },
            {
                "opponent": "at WKU",
                "results": ["W 5-4", "L 9-11", "L 2-6"]
            }
        ]
    },
    "MTSU": {
        "games": [
            {
                "opponent": "at FIU",
                "results": ["W 12-8", "L 6-11", "L 6-16"]
            },
            {
                "opponent": "vs Liberty",
                "results": ["W 10-0", "L 9-25", "L 3-5"]
            },
            {
                "opponent": "at LA Tech",
                "results": ["L 3-6", "W 9-5", "L 12-15"]
            },
            {
                "opponent": "vs NM State",
                "results": ["W 10-9", "L 1-9", "L 3-4"]
            },
            {
                "opponent": "at Sam Houston",
                "results": ["L 1-11", "L 2-3", "W 16-9"]
            },
            {
                "opponent": "vs WKU",
                "results": ["L 2-9", "W 3-2", "W 12-9"]
            },
            {
                "opponent": "at Jacksonville State",
                "results": ["W 12-9", "L 2-9", "W 3-2"]
            },
            {
                "opponent": "vs Dallas Baptist",
                "results": ["L 1-15", "L 6-15", "W 8-5"]
            }
        ]
    },
    "Jacksonville State": {
        "games": [
            {
                "opponent": "at LA Tech",
                "results": ["L 8-12", "L 4-9", "L 1-5"]
            },
            {
                "opponent": "vs WKU",
                "results": ["W 18-7", "W 4-3", "L 10-13"]
            },
            {
                "opponent": "vs FIU",
                "results": ["L 2-7", "W 6-5", "L 6-12"]
            },
            {
                "opponent": "at Liberty",
                "results": ["L 4-8", "L 5-9", "L 8-22"]
            },
            {
                "opponent": "vs NM State",
                "results": ["L 9-10", "W 12-11", "L 4-5"]
            },
            {
                "opponent": "at Dallas Baptist",
                "results": ["L 9-12", "W 9-2", "L 2-3"]
            },
            {
                "opponent": "vs MTSU",
                "results": ["L 9-12", "W 9-2", "L 2-3"]
            },
            {
                "opponent": "at Sam Houston",
                "results": ["L 2-12", "L 1-11", "L 2-6"]
            }
        ]
    }
};


function populateTeamSelect() {
    const select = document.getElementById('teamSelect');
    select.innerHTML = ''; // Clear existing options
    Object.keys(teamData).forEach(team => {
        const option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        select.appendChild(option);
    });

    // Optionally set the first team as the default selected option
    if (select.options.length > 0) {
        select.selectedIndex = 0;
    }
}



function displaySelectedTeamSchedule(records) {
    const teamName = document.getElementById('teamSelect').value;
    const teamRecords = records.find(record => record.team === teamName);

    if (!teamRecords) {
        console.error('No record found for:', teamName);
        return;
    }

    document.getElementById('scheduleTitle').textContent = `Schedule for ${teamName}`;
    ['home', 'away'].forEach(area => {
        document.getElementById(`${area}Wins`).textContent = teamRecords[area].wins;
        document.getElementById(`${area}Losses`).textContent = teamRecords[area].losses;
        document.getElementById(`${area}RunsScored`).textContent = teamRecords[area].runsScored;
        document.getElementById(`${area}RunsAllowed`).textContent = teamRecords[area].runsAllowed;
    });

    // Calculate and display run differentials
    document.getElementById('homeRunDiff').textContent = teamRecords.home.runsScored - teamRecords.home.runsAllowed;
    document.getElementById('awayRunDiff').textContent = teamRecords.away.runsScored - teamRecords.away.runsAllowed;

    const gameResultsUl = document.getElementById('gameResults');
    gameResultsUl.innerHTML = '';
    teamData[teamName].games.forEach(game => {
        const gameInfo = document.createElement('li');
        gameInfo.textContent = `${game.opponent}: ${game.results.join(', ')}`;
        gameResultsUl.appendChild(gameInfo);
    });
}




function calculateWinLossRecord(data) {
    const records = [];

    Object.keys(data).forEach(team => {
        const teamGames = data[team].games;
        let wins = 0;
        let losses = 0;
        let home = { wins: 0, losses: 0, runsScored: 0, runsAllowed: 0 };
        let away = { wins: 0, losses: 0, runsScored: 0, runsAllowed: 0 };

        teamGames.forEach(game => {
            game.results.forEach(result => {
                if (result) {
                    const [outcome, runs] = result.split(' ');
                    const [runsScored, runsAllowed] = runs.split('-').map(Number);
                    const gameType = game.opponent.startsWith('vs') ? 'home' : 'away';

                    if (outcome === 'W') {
                        wins++;
                        gameType === 'home' ? home.wins++ : away.wins++;
                    } else if (outcome === 'L') {
                        losses++;
                        gameType === 'home' ? home.losses++ : away.losses++;
                    }

                    gameType === 'home' ? (home.runsScored += runsScored, home.runsAllowed += runsAllowed) : (away.runsScored += runsScored, away.runsAllowed += runsAllowed);
                }
            });
        });

        records.push({
            team,
            wins,
            losses,
            winPercentage: (wins / (wins + losses)).toFixed(3),
            home,
            away
        });
    });

    return records.sort((a, b) => b.winPercentage - a.winPercentage);
}


function populateStandings(records) {
    const standingsTable = document.getElementById('standings');
    const firstPlaceWins = records[0].wins;
    const firstPlaceLosses = records[0].losses;

    standingsTable.innerHTML = '<tr><th>Rank</th><th>Team</th><th>Wins</th><th>Losses</th><th>Win %</th><th>GB</th></tr>';
    records.forEach((record, index) => {
        const gamesBack = index === 0 ? "-" : (((firstPlaceWins - record.wins) + (record.losses - firstPlaceLosses)) / 2).toFixed(1);
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${record.team}</td>
            <td>${record.wins}</td>
            <td>${record.losses}</td>
            <td>${record.winPercentage}</td>
            <td>${gamesBack}</td>
        `;
        standingsTable.appendChild(row);
    });
}


let globalRecords = [];

document.addEventListener('DOMContentLoaded', () => {
    const records = calculateWinLossRecord(teamData);
    globalRecords = records; // Store the records globally
    populateStandings(records);
    populateTeamSelect();
    if (document.getElementById('teamSelect').options.length > 0) {
        document.getElementById('teamSelect').selectedIndex = 0;
        displaySelectedTeamSchedule(globalRecords); // Use global records
    }
});

