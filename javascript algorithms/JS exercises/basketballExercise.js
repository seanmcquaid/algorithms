// ## Basketball Players

// Given an array of basketball players stored as JavaScript objects:


var players = [
  {
    name: 'Paul Millsap',
    position: 'PF',
    avgMinutesPlayed: 36,
    avgPoints: 16.4,
    avgRebounds: 9.4,
    starter: true
  },
  {
    name: 'Jeff Teague',
    position: 'PG',
    avgMinutesPlayed: 28.6,
    avgPoints: 15.6,
    avgRebounds: 1.9,
    starter: true
  },
  {
    name: 'Al Horford',
    position: 'C',
    avgMinutesPlayed: 32,
    avgPoints: 13.2,
    avgRebounds: 6.8,
    starter: true
  },
  {
    name: 'Kent Bazemore',
    position: 'SF',
    avgMinutesPlayed: 31.8,
    avgPoints: 12,
    avgRebounds: 6.6,
    starter: true
  },
  {
    name: 'Kyle Korver',
    position: 'SG',
    avgMinutesPlayed: 32.4,
    avgPoints: 11.2,
    avgRebounds: 4.9,
    starter: true
  },
  {
    name: 'Dennis Schroder',
    position: 'PG',
    avgMinutesPlayed: 18.3,
    avgPoints: 10.7,
    avgRebounds: 1.8,
    starter: false
  },
  {
    name: 'Kris Humphries',
    position: 'PF',
    avgMinutesPlayed: 14.7,
    avgPoints: 9.7,
    avgRebounds: 5.7,
    starter: false
  },
  {
    name: 'Mike Scott',
    position: 'PF',
    avgMinutesPlayed: 17.6,
    avgPoints: 7.0,
    avgRebounds: 3.6,
    starter: false
  },
  {
    name: 'Thabo Sefolosha',
    position: 'SF',
    avgMinutesPlayed: 18.9,
    avgPoints: 4.8,
    avgRebounds: 3.9,
    starter: false
  },
  {
    name: 'Mike Muscala',
    position: 'PF',
    avgMinutesPlayed: 7.4,
    avgPoints: 2.7,
    avgRebounds: 1.9,
    starter: false
  },
  {
    name: 'Tim Hardaway Jr.',
    position: 'SG',
    avgMinutesPlayed: 9.7,
    avgPoints: 2.2,
    avgRebounds: 1.0,
    starter: false
  },
  {
    name: 'Lamar Patterson',
    position: 'SG',
    avgMinutesPlayed: 5.0,
    avgPoints: 1.5,
    avgRebounds: 1.3,
    starter: false
  },
  {
    name: 'Kirk Hinrich',
    position: 'SG',
    avgMinutesPlayed: 4.5,
    avgPoints: 0.8,
    avgRebounds: 0.7,
    starter: false
  }
];


// * Print the average playing time of the players.
function averagePlayingTime(){
  var avgOfAvgMinutes = 0;
  for(i=0; i<players.length; i++){
    avgOfAvgMinutes += players[i].avgMinutesPlayed;
  } console.log(avgOfAvgMinutes/players.length);
}
averagePlayingTime(players);
// * Print the average playing time of the starters.

function starterAveragePlayingTime(){
  var avgOfAvgMinutes = 0;
  var starterCount = 0;
  for(i=0; i<players.length; i++){
    if (players[i].starter == true){
      avgOfAvgMinutes += players[i].avgMinutesPlayed;
      starterCount += 1;
    }
  } console.log(avgOfAvgMinutes/starterCount);
}

starterAveragePlayingTime(players);
// * Print the average playing time of the bench players.
function benchAveragePlayingTime(){
  var avgOfAvgMinutes = 0;
  var benchCount = 0;
  for(i=0; i<players.length; i++){
    if (players[i].starter == false){
      avgOfAvgMinutes += players[i].avgMinutesPlayed;
      benchCount += 1;
    }
  } console.log(avgOfAvgMinutes/benchCount);
}

benchAveragePlayingTime(players)

// * Create an array of the names of each player.

function playerNames(){
  var names = [];
  for(i=0; i<players.length; i++){
    names.push(players[i].name);
  } console.log(names);
}

playerNames(players);
// * Create an array of the names of the players who average more than 10 points per game.

function tenPointPlayerNames(){
  var names = [];
  for(i=0; i<players.length; i++){
    if(players[i].avgPoints > 10){
      names.push(players[i].name);
    }
  } console.log(names);
}

tenPointPlayerNames(players);

// * Create an array of the names of the players who average more than 5 rebounds per game.
function reboundPlayerNames(){
  var names = [];
  for(i=0; i<players.length; i++){
    if(players[i].avgRebounds > 5){
      names.push(players[i].name);
    }
  } console.log(names);
}

reboundPlayerNames(players);

// * Who is the player with the most points per minute played? Write a program to find that out.

function pointsPerMinutePlayed(){
  var bestPlayer = "";
  var pointsToBeat = -1;
  for(i=0; i<players.length; i++){
    var pointsPerMinute = players[i].avgPoints / players[i].avgMinutesPlayed;
    if (pointsPerMinute > pointsToBeat){
      pointsToBeat = pointsPerMinute;
      bestPlayer = players[i].name;
    }
  } console.log(bestPlayer);
}

pointsPerMinutePlayed(players);
// * Based on this data, what is the average points score for the team as a whole?