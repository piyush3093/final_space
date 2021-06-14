const character_container = document.getElementById('character_container');
const total_characters = 40;

const fetchCharacters = async () => {
    for(let i = 1; i <= 40; i++){
        await getCharacter(i);
    }
}

const getCharacter = async id => {
    const url = `https://finalspaceapi.com/api/v0/character/${id}`;
    const res = await fetch(url);
    const character = await res.json();
    //console.log(character);
    createCharacterCard(character);
}

const createCharacterCard = character => {
    const characterEl = document.createElement('div');
    characterEl.classList.add('character-card')
    const {id, name, species, origin, img_url} = character;
    characterEl.innerHTML = `
        <div class = 'img-container'>
            <img src = '${img_url}' alt = ${name} />
        </div>
        <div class = 'info'>
            <h3 class = 'name'>${name}</h3>
            <small class = 'species'>Species: ${species}</small><br />
            <small class = 'origin'>Origin: ${origin}</small>
        </div>
    `
    character_container.appendChild(characterEl);
}


fetchCharacters();

