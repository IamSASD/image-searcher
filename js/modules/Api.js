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
    
}

export default Api;