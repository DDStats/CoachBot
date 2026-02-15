// NHL Scores Functionality

async function fetchNHLScores() {
    const response = await fetch('https://statsapi.web.nhl.com/api/v1/schedule?date=' + getCurrentDate());
    const data = await response.json();
    return formatNHLScores(data);
}

function formatNHLScores(data) {
    // Format the NHL scores here
    const games = data.dates[0].games;
    return games.map(game => {
        return `Game: ${game.teams.away.team.name} vs ${game.teams.home.team.name}, Score: ${game.teams.away.score} - ${game.teams.home.score}`;
    });
}

function getCurrentDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

async function queryNHLScores() {
    const scores = await fetchNHLScores();
    console.log('NHL Scores:', scores);
}

// Example prompt for user query
console.log('Would you like to see the current NHL scores?');
// Call queryNHLScores when user provides affirmative response
