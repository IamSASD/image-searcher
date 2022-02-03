import { searchForm, searchInput, imgContainer, pagination } from './modules/Selectors.js'
import Api from './modules/Api.js'
import UI from './modules/UI.js';


let api;
let ui;

addEventListeners()
function addEventListeners(){
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

    //listen click to go the original position
    imgContainer.addEventListener('click', (e) => {
        if(e.target.className == 'origin-position' || 'a-position'){
            window.scroll(0,0);
        }
    });

}

function manageImages(value){
    //Swhow images in the page
    ui = new UI();
    const { totalHits, hits } = value;
    
    for(let i = 0; i < hits.length; i++){
        
        //creater a HTML element that contain the images
        const imgCard = ui.showimages(hits[i]);
        const createDiv = document.createElement('div');
        createDiv.innerHTML = imgCard;
        imgContainer.appendChild(createDiv);

    }
    
    //change the position of the window
    window.scroll(0,667);

    //add button to go the original position
    ui.OriginPosition();

    console.log(totalHits, hits);
}




