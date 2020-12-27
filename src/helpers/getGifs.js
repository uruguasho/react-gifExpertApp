export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=azBCApGaOO8ka4Irkrcug9elZpYmrwEJ`;
    const res = await fetch( url );
    const { data } = await res.json();

    const gifsProcesados = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            urlImage: img.images?.downsized_medium.url
        };
    });

    return gifsProcesados;
};