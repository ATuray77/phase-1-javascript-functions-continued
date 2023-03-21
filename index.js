// code your solution here
function saturdayFun(play = "roller-skate") {
  return `This Saturday, I want to ${play}!`;
}

const mondayWork = function(work = "go to the office") {
  return `This Monday, I will ${work}.`;
}

function wrapAdjective (cool = '*'){
  return function(name = "special"){
    return `You are ${cool}${name}${cool}!`

  }
 
}