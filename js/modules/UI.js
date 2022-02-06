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

        const h1Create = document.createElement('h1');
        h1Create.innerHTML = `Results for "${value}"`;
        h1Create.classList.add('search-title');
        imgContainer.before(h1Create);

    }

    OriginPosition(){
        const div = document.createElement('div');
        div.innerHTML = `
            <a class="fas fa-arrow-up a-position"></a>
        `;
        div.classList.add('origin-position');
        imgContainer.append(div);
    }

    cleanContainer(){
        imgContainer.innerHTML = '';
        if(containerTitle.firstElementChild.className == 'search-title'){
            containerTitle.firstElementChild.remove();
        }
    }

}

export default UI;