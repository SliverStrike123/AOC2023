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

//part2
var sum = 0
const numberList = [{letter:"one",num:"1"},{letter:"two",num:"2"},{letter:"three",num:"3"},{letter:"four",num:"4"},{letter:"five",num:"5"},
                    {letter:"six",num:"6"},{letter:"seven",num:"7"},{letter:"eight",num:"8"},{letter:"nine",num:"9"}]

for(let i in data){
    var str = ""
    var firstnum = ""
    var lastnum = ""
    var num = ""
    var reverseStr = ""
    var strtest = []
    for(let j = 0; j < data[i].length;j++){
        str += data[i][j]
        let char = data[i].charAt(j)
        for(let k in numberList){
            if(str.includes(numberList[k].letter)){
                firstnum = numberList[k].num
                for(let k = data[i].length - 1;k >= j;k--){
                    reverseStr += data[i][k]
                }
                break
            }
            else if(char.match(/\d+/g)){
                firstnum = char
                for(let k = data[i].length - 1;k >= j;k--){
                    reverseStr += data[i][k]
                }
                break
            }
        
        }
        if(firstnum != ""){
            break
        }
    }
    for(let j = 0;j < reverseStr.length; j++){
        strtest.unshift(reverseStr[j])
        var string = strtest.join("")
        for(let k in string){
            let char = string.charAt(k)
            for(let m in numberList){
                if(string.includes(numberList[m].letter)){
                    lastnum = numberList[m].num
                    var strtest = []
                    break
                }
                else if(char.match(/\d+/g)){
                    lastnum = char
                    var strtest = []
                    break
                }
            }
        }
        if(lastnum != ""){
            break
        }
    }
    num = firstnum + lastnum
    sum += parseInt(num)
}

console.log(sum)



