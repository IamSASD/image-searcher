import { manageImages } from "../app.js";
class Api{

    
    async getData(url){
        
        try {
            const data = await fetch(url);
            const dataJson = await data.json();

            return dataJson;

        } catch (error) {
            console.log(error);
        }
    }

    contentData(inputValue, actualPage){
        const apikey = '25514852-1d008ecd4eb2683d344c63454';
        const url = `https://pixabay.com/api/?key=${apikey}&q=${inputValue}&per_page=40&page=${actualPage}`;

        this.getData(url)
            .then((value) => manageImages(value));

    }
    
}

export default Api;