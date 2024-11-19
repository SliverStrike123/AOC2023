import {readFileSync} from 'fs';
var data = readFileSync("./input/test.txt","utf8").toString().replace(/\r\n/g,"\n").split("\n");

const map = []
const directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [1, 1], [1, -1], [-1, 1], [-1, -1]]
var numbers = []

data.forEach((item) => {
    map.push(item.split(""))
})

for(let y = 0; y < map.length; y++){
    let row = map[y]
    for(let x=0; x < row.length; x++){
        if(row[x].match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/) && row[x] !== '.'){
            for(const [dx,dy] of directions){
                let xPos = x + dx < 0 ? 0 : x + dx 
                let yPos = y + dy < 0 ? 0 : y + dy
                
                if(map[xPos][yPos].match(/\d+/)){
                    let num = []
                    num.push(map[xPos][yPos])
                    
                }
            }
        }
    }
}
