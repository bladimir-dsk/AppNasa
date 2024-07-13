const API_KEY = 'A1Jk9Pyw4FUBr1VKgWGoSL0RA3MAPfH9xaxkAdaJ'
const API_URL = 'https://api.nasa.gov/planetary/apod'

//le enviamos un parametro para reutulizarlo pero puede o no venir
export default async (urlParams?: string) => {
    try{
        //concatecamos la peticion y validamos que lo que nos envian en la url
        const response = await fetch(`${API_URL}?api_key=${API_KEY}${typeof urlParams !== 'undefined' && urlParams?.length > 0 ? urlParams: ''}`)
        const data = await response.json();//promesa que se espera para hacer el parceo de informacion
        return Promise.resolve(data);
    }catch(error){
        return Promise.reject(error);
    }
}