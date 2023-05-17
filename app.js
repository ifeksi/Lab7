const axios = require("axios")

let RAND = Math.floor(Math.random() * 100) + 1

const pretty = (object, id) => {
    console.log(`Айді данної людини: ${id}`)
    console.log(`Культура данної людини: ${object.culture}`)
    console.log(`Ім'я данної людини: ${object.name}`)
    console.log(`Стать данної людини: ${object.gender}`)
}

axios.get(`https://anapioficeandfire.com/api/characters/${RAND}`)
    .then(res => {pretty(res.data, RAND)})
    .catch(err => {console.error(err)})

