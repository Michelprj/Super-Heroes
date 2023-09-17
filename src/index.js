import './styles.css';

const containerEl = document.getElementById('container');
const btnEl = document.getElementById('btnCard');
const nameHeroEl = document.getElementById('nameHero');

btnEl.addEventListener('click', getImagem);

async function getImagem () {
    try {
        nameHeroEl.innerHTML = '';
        containerEl.src = '../fundo.png';
        const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${await randomId()}.json`);
        const data = await response.json();

        if (!Object.values(data)[1] || !Object.values(data)[8].lg) {
            throw new Error();
        }

        const nameGet = nameHeroEl.innerHTML = Object.values(data)[1];
        const imageGet = containerEl.src = Object.values(data)[8].lg;

        return nameGet + imageGet;
    } catch (error) {
        alert('Nenhum Herói encontrado');
    }
};

function randomId () {
    const randomIds = Math.round(Math.random() * 731);
    return randomIds;
}
