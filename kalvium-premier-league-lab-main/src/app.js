//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(a,b,c,d){
  return [a,b,c,d];
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
//write your function here

function createFormation(formation){
  if(formation.length===0)
  return null;
  else
  return {
    defender : formation[0],
    midfield : formation[1],
    forward  : formation[2]
  }
}
// Dont edit the following code
var formation = [4, 4, 3];

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
 let filterByDebut=[];
 players.forEach((x)=>{
  if(x.debut===year) filterByDebut.push(x)
 })
 return filterByDebut;
 }

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  let filterByPosition=[];
  players.forEach((x)=>{
   if(x.position===position) filterByPosition.push(x)
  });
  return filterByPosition;
  }

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  let filterByAward=[];
  players.forEach((x)=>{
   x.awards.forEach((y)=>{
    if(y.name===awardName) 
    filterByAward.push(x)
   })
  });
  return filterByAward;
  }
//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName,noOfTimes){
  let filterByAwardxTimes=[];
  players.forEach((x)=>{
    let times=0;
    x.awards.forEach((y)=>{ 
      if(y.name===awardName) times++;
    })
    if(times===noOfTimes) filterByAwardxTimes.push(x);
  })
  return filterByAwardxTimes;
  }

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName,country){
  let filterByAwardxCountry=[];
  players.forEach((x)=>{
    if(x.country===country){
      x.awards.forEach((y)=>{
        if(y.name===awardName) 
        filterByAwardxCountry.push(x);
      })
    }
  })
  return filterByAwardxCountry;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
let filterByNoOfAwardsxTeamxAge=[];
players.forEach((x)=>{
  if(x.awards.length>=noOfAwards
    && x.team===team
    && x.age<age)
  filterByNoOfAwardsxTeamxAge.push(x);
});
return filterByNoOfAwardsxTeamxAge;
}
//Progression 9 - Sort players in descending order of their age
 function SortByAge(players){
  var sortAgePLayers=players;
  let t;
  for(let j=0;j<sortAgePLayers.length;j++){
  for(let i=0;i<sortAgePLayers.length-1;i++){
    if(sortAgePLayers[i].age<sortAgePLayers[i+1].age){
      t=sortAgePLayers[i];
      sortAgePLayers[i]=sortAgePLayers[i+1];
      sortAgePLayers[i+1]=t;
    }
  }
}
  return sortAgePLayers;
 }
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  var teamAward=[];
  players.forEach((x)=>{
    if(x.team===team) teamAward.push(x);
  });
  let t;
  for(let i=0;i<teamAward.length;i++){
    for(let j=0;j<teamAward.length-1;j++){
      if(teamAward[j].awards.length<teamAward[j+1].awards.length){
          t=teamAward[j];
          teamAward[j]=teamAward[j+1];
          teamAward[j+1]=t;
        }
    }
  }
  return teamAward;
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
