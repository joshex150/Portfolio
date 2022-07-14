
const dog = {
    nan: 'ooo',
    ban: 'iii'
}

const fs = require('fs')

const saveData = (data, file) =>{
    const finished = (error) =>{
        if(error){
            console.error(error)
            return;
        }
    }
    const jsonData = JSON.stringify(data, null, 2)
    fs.writeFile(file,jsonData,finished)
}

saveData(dog, 'seconddog.json')