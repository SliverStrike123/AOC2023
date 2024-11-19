import {readFileSync} from 'fs';
var data = readFileSync("./input/day2.txt","utf8").toString().replace(/\r\n/g,"\n").split("\n");
var games = []
const redLimit = 12
const greenLimit = 13
const blueLimit = 14
var score = 0;

data.forEach((game) => {
    const [left,right] = game.split(": ");
    games.push({
        gameID: +(left.split(" ")[1]),
        rolls: right.split("; ")
    })
})

games.forEach((item) => {
    var isTrue = true
    var rolls = item.rolls
    for (const roll of rolls) {
        var splitted = roll.split(", ").map(ele => {const [count,type] = ele.split(" "); return [+count,type]})
        for(const [count,type] of splitted){
            if((type === "red" && count > redLimit) ||
               (type === "blue" && count > blueLimit) ||
               (type === "green" && count > greenLimit)) {
                isTrue = false;
                break;
            }
        }
        if (!isTrue) break;
    }
    if(isTrue){
        score+=item.gameID
    }
})

//part 2
games = []
score = 0
data.forEach((game) => {
    const [left,right] = game.split(": ");
    games.push({
        gameID: +(left.split(" ")[1]),
        rolls: right.split("; "),
        power: 0
    })
})

games.forEach((item) => {
    var red = 0
    var green = 0
    var blue = 0
    item.rolls.forEach((roll) => {
        var splitted = roll.split(", ").map(ele => {const [count,type] = ele.split(" "); return [+count,type]})
        for(const [count,type] of splitted){
            if(type === "red" && count > red){
                red = count
            }
            if(type === "green" && count > green){
                green = count
            }
            if(type === "blue" && count > blue){
                blue = count
            }
        }
    })
    score += red*green*blue;
})
console.log(score)