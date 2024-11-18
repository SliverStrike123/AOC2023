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
        for(const item of splitted){
            var obj = {
                count: item[0],
                type: item[1]
            }
            if((obj.type === "red" && obj.count > redLimit) ||
               (obj.type === "blue" && obj.count > blueLimit) ||
               (obj.type === "green" && obj.count > greenLimit)) {
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
console.log(score)

//part 2
