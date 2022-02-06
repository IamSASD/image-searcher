import { imgContainer, containerTitle }  from './Selectors.js';
class UI{

    showimages(hits){

        const { previewURL, webformatURL, pageURL } = hits;

        const cardImg = `

                <figure class="img-content">
                    <img src="${webformatURL}">
                </figure>

                <div class="buttons-options">
                    <a rel="noopener noreferrer" target="_blank" href="${webformatURL}">See Img</a>
                    <a rel="noopener noreferrer" target="_blank" href="${pageURL}">See Img in Pixabay</a>
                </div>

        `
        return cardImg;
    }

    searchTitle(value){

        const h2Create = document.createElement('h2');
        h2Create.innerHTML = `Results for "${value}"`;
        h2Create.classList.add('search-title');
        h2Create.setAttribute('id', 'img-title');
        imgContainer.before(h2Create);

    }

    OriginPosition(){
        const aElemnt = document.createElement('a');
        aElemnt.classList.add('fas', 'fa-arrow-up', 'origin-position');
        aElemnt.setAttribute('name', 'img-name');
        imgContainer.append(aElemnt);
    }

    cleanContainer(){
        imgContainer.innerHTML = '';
        if(containerTitle.firstElementChild.className == 'search-title'){
            containerTitle.firstElementChild.remove();
        }
    }

}

export default UI;