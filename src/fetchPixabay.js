export function fetchPixabay(searchQueryForm) {
    const url = `https://pixabay.com/api/?key=35017734-fed2e09b3d8a04f799b9cec3a&q=${searchQueryForm}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`;
    return fetch(url).then(response => {
        if (response.ok) {
            return response.json();
        } throw new Error(response.statusText);
    });
}