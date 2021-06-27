export const getGifs = async (category, limit=5) => {
    const apiKey = 'EYtcZUyg6JXj41AGeDs8dKJPQ167PnEd'

    const url = `https://api.giphy.com/v1/gifs/search?limit=${limit}&q=${encodeURI(category)}&api_key=${apiKey}`
    const rep = await fetch(url);
    const {data} = await rep.json();
    const gifs = data.map(
        img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        }
    );
    return gifs;
}