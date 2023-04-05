export default class FetchPixabay {
    constructor() {
        this.searchQueryForm = '';
        this.page = 1;
     }
    fetchArticls() {
        const url = `https://pixabay.com/api/?key=35017734-fed2e09b3d8a04f799b9cec3a&q=${this.searchQueryForm}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;
        return fetch(url).then(response => response.json()).then(({hits}) => {
console.log(hits)
            this.incrementPage();
            return hits;
           
        })
    }
    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }
    get query() {
        return this.searchQueryForm
    }
    set query(newQuery) {
        this.searchQueryForm = newQuery
    }
}