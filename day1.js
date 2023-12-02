import {readFileSync} from 'fs';
var data = readFileSync("./input/day1.txt","utf8").toString().replace(/\r\n/g,"\n").split("\n");
var sum = 0
//part 1
for(let i in data){
    var reverseStr = ""
    var firstnum = ""
    var lastnum = ""
    var num = ""
    for(let j in data[i]){
        let char = data[i].charAt(j);
        if(char.match(/\d+/g)){
            firstnum = char
            for(let k = data[i].length - 1;k >= j;k--){
                reverseStr += data[i][k]
            }
            break
        }
    }
    for(let l in reverseStr){
        let char = reverseStr.charAt(l)
        if(char.match(/\d+/g)){
            lastnum = char
            break
        }
    }
    num = firstnum + lastnum
    sum += parseInt(num)
}
console.log(sum)