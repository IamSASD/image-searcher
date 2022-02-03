import { imgContainer }  from './Selectors.js';
class UI{

    showimages(hits){

        const { previewURL, webformatURL, pageURL } = hits;

        const cardImg = `

            <div clas="img-card">

                <figure class="img-content">
                    <img src="${previewURL}">
                </figure>

                <div class="buttons-options">
                    <a rel="nopeener noreferrer" target="_blank" href="${webformatURL}">See Img</a>
                    <a rel="nopeener noreferrer" target="_blank" href="${pageURL}">See Img in Pixabay</a>
                </div>

            </div>

        `
        return cardImg;
    }

    searchTitle(value){

        const h1Create = document.createElement('h1');
        h1Create.innerHTML = `Results for "${value}"`;
        h1Create.setAttribute('id', 'search-title')
        imgContainer.append(h1Create);

    }

    OriginPosition(){
        const div = document.createElement('div');
        div.innerHTML = `
            <a class="fas fa-arrow-up a-position"></a>
        `;
        div.classList.add('origin-position');
        div.setAttribute('name','go-position');
        imgContainer.append(div);
    }

    cleanContainer(){
        imgContainer.innerHTML = ''
    }

}

export default UI;