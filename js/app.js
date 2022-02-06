import { searchForm, searchInput, imgContainer, pagination, logo  } from './modules/Selectors.js'
import Api from './modules/Api.js'
import UI from './modules/UI.js';

const originPosition = window.location.origin;
let api;
let ui;

addEventListeners()
function addEventListeners(){
    window.addEventListener('DOMContentLoaded', () => {
        if(!window.location.origin){
            window.location.assign(originPosition);
        }
    });
    //listen the submit event for the search form 
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        //create a new Api and UI instance
        api = new Api();
        ui = new UI();

        //get data of the Pixabay Api
        const actualPage = 1;
        const inputValue = searchInput.value;
        const apikey = '25514852-1d008ecd4eb2683d344c63454';
        const url = `https://pixabay.com/api/?key=${apikey}&q=${inputValue}&per_page=40&page=${actualPage}`;

        api.getData(url)
            .then((value) => manageImages(value));

        searchForm.reset();//reset the search form
        ui.cleanContainer();//clean the img container
        ui.searchTitle(inputValue);//add the title to the img container
    });

    //button go to top
    imgContainer.addEventListener('click', (e) => {
        if(e.target.name === 'img-name'){
            const idLogo = logo.getAttribute('id');
            window.location.assign(`${originPosition}#${idLogo}`);
        }
    });
}

function manageImages(value){
    
    if(value.totalHits == 0){
        alert('No match founds');
        window.location.assign(originPosition);
    }
    //Swhow images in the page
    ui = new UI();
    const { totalHits, hits } = value;

    
    for(let i = 0; i < hits.length; i++){
        
        //creater a HTML element that contain the images
        const imgCard = ui.showimages(hits[i]);
        const createDiv = document.createElement('div');
        createDiv.classList.add('img-card');
        createDiv.innerHTML = imgCard;
        imgContainer.appendChild(createDiv);

    }
    
    //change the position of the window
    const title = document.querySelector('#img-title');
    const idTitle = title.getAttribute('id');
    window.location.assign(`${originPosition}#${idTitle}`);
    // window.scroll(0,667);

    //add button to go the original position
    ui.OriginPosition();

}




