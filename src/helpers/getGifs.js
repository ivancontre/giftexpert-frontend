export const getGifts = async (category) => {
    const apiKey= 'Up5EwEIedpn4ySS66rNTK5g0qijSn0ho';
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${apiKey}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifts = data.map( gift => {
        return {
            id: gift.id,
            title: gift.title,
            url: gift.images?.downsized_medium.url
        }
    });

    return gifts;
}