function gameObject(){
return gameObject = {
    home:{
        teamName:"Brooklynn Nets",
        colors:["Black", "White"],
        players:{  
    "Alan Anderson": {
            number:0,
            shoe:16,
            points:22,
            rebounds:12,
            assists:12,
            steals:3,
            blocks:1,
            slamDunks:1,
        },
    "Reggie Evans":{
            number:30,
            shoe:14,
            points:12,
            rebounds:12,
            assists:12,
            steals:12,
            blocks:12,
            slamDunks:7,
        },
    "Brook Lopez":{
            number:11,
            shoe:17,
            points:17,
            rebounds:19,
            assists:10,
            steals:3,
            blocks:1,
            slamDunks:15,
        },
    "Mason Plumlee":{
            number:1,
            shoe:19,
            points:26,
            rebounds:12,
            assists:6,
            steals:3,
            blocks:8,
            slamDunks:5,
        },
    "Jason Terry":{
            number:31,
            shoe:15,
            points:19,
            rebounds:2,
            assists:2,
            steals:4,
            blocks:11,
            slamDunks:1,
        },
    },
    },
    away:{
        teamName:"Charlotte Hornets",
        colors:["Turquoise", "Purple"],
        players:{
        "Jeff Adrien": {
                number:4,
                shoe:18,
                points:10,
                rebounds:1,
                assists:1,
                steals:2,
                blocks:7,
                slamDunks:2,
            },
        "Bismak Biyombo":{
                number:0,
                shoe:16,
                points:12,
                rebounds:4,
                assists:7,
                steals:7,
                blocks:15,
                slamDunks:10,
            },
        "DeSagna Diop":{
                number:2,
                shoe:14,
                points:24,
                rebounds:12,
                assists:12,
                steals:4,
                blocks:5,
                slamDunks:5,
            },
        "Ben Gordon":{
                number:8,
                shoe:15,
                points:33,
                rebounds:3,
                assists:2,
                steals:1,
                blocks:1,
                slamDunks:0,
            },
        "Brendan Haywood":{
                number:33,
                shoe:15,
                points:6,
                rebounds:12,
                assists:12,
                steals:22,
                blocks:5,
                slamDunks:12,
            },
        },
    },
};
}
function numPointsScored(playerName){ //WORKING!
    let game = gameObject();

  for (let gameKey in game) {
    let team = game[gameKey];

    for (let teamKey in team) {
      let teamData = team[teamKey];
        
      for (let playerData in teamData){
        if(playerName === playerData){
            let stats = teamData[playerData];
            return stats.points;
        }
      }
    }
  }
}

function shoeSize(playerName){ //WORKING!
    let game = gameObject();

    for (let gameKey in game) {
      let team = game[gameKey];
  
      for (let teamKey in team) {
        let teamData = team[teamKey];
          
        for (let playerData in teamData){
          if(playerName === playerData){
              let stats = teamData[playerData];
              return stats.shoe;
          }
        }
      }
    }
}
function teamColors(nameOfTeam){ //WORKING!
    let game = gameObject();

    for (let gameKey in game) {
      let team = game[gameKey];
      if(team.teamName === nameOfTeam){
        return (team.colors)
      }
      }
    }
function teamNames(){ //WORKING!
  let game = gameObject();
  let teamArray = [];
  for (let gameKey in game) {
    let team = game[gameKey];
    teamArray.push(team.teamName);
  }
return teamArray;
}

function playerNumbers(teamName){ //WORKING!
  let game = gameObject();
  let numbersArray = [];
  for (let gameKey in game) {
    let team = game[gameKey];

    for (let teamKey in team) {
      let teamData = team[teamKey];
     if(teamName === teamData){
      const players = Object.values(team.players);
      players.forEach(player => {
        numbersArray.push(player.number);
      })
     }
        }
        return numbersArray;
      }
    }

function playerStats(playerName){ //WORKING!
  let game = gameObject();

  for (let gameKey in game) {
    let team = game[gameKey];

    for (let teamKey in team) {
      let teamData = team[teamKey];
        
      for (let playerData in teamData){
        if(playerName === playerData){
            let stats = teamData[playerData];
            return(stats);
        }
      }
    }
  }
}

function bigShoeRebounds(){ //Working!
  let game = gameObject();
  let shoeSizes = [];
  let reboundArray = [];
  for (let gameKey in game) {
    let team = game[gameKey];
    const players = Object.values(team.players);
    players.forEach(player => {
      shoeSizes.push(player.shoe);
      reboundArray.push(player.rebounds);
    })
  }
  const maxShoeIndex = shoeSizes.indexOf((Math.max(...shoeSizes)),0);//Won't work on math.max(shoeSizes), must be ...shoeSizes
  const reboundOfBiggestShoe = reboundArray[maxShoeIndex];
  return (reboundOfBiggestShoe);
}

function mostPointsScored(){
  let game = gameObject();
  let pointsScored = [];
  for (let gameKey in game) {
    let team = game[gameKey];
    const players = Object.values(team.players);
    players.forEach(player => {
      pointsScored.push(player.points);
    })
  }
  const mostPoints = Math.max(...pointsScored);
  console.log(mostPoints);
}

function winningTeam(){
  let game = gameObject();
  let pointsArray = [];
  let teamArray = [];

  for (let gameKey in game) {
    let team = game[gameKey];
    teamArray.push(team.teamName);
      const players = Object.values(team.players);
      players.forEach(player => {
        pointsArray.push(player.points);
      })
        }
        const firstTeamPoints = [...pointsArray.slice(0,5)];
        const secondTeamPoints = [...pointsArray.slice(5,pointsArray.length+1)];
        const firstSum = firstTeamPoints.reduce((a,b)=> a+b);
        const secondSum = secondTeamPoints.reduce((a,b)=> a+b);
        if(firstSum > secondSum){
          return teamArray[0];
        }
        else if(secondSum > firstSum){
          return teamArray[1];
        }
      }
