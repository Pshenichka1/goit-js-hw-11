
import hitsCards from './templates/card-photos.hbs'

// import axios from "axios";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
import Notiflix from "notiflix";
import FetchPixabay from "./fetchPixabay";

const searchForm = document.querySelector('#search-form');
const btnSubmit = document.querySelector('button');
const galleryPhotos = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-more');
const newsApi = new FetchPixabay();
// document.body.innerHTML = templateFunction();
searchForm.addEventListener('submit', handleCearch);
btnLoadMore.addEventListener('click', handleLoadMore);


function handleCearch(event) {
    event.preventDefault();
    clearHitsPhotos();
    newsApi.query = event.currentTarget.elements.searchQuery.value.trim();
    if (newsApi.query === '') {
    return  Notiflix.Notify.warning('Please enter a search parameter')  
    }
    newsApi.resetPage();
    newsApi.fetchArticls().then(appendHitsMarkup);
}

function handleLoadMore() {
    newsApi.fetchArticls().then(appendHitsMarkup);
}
function appendHitsMarkup(hits) {
galleryPhotos.insertAdjacentHTML('beforeend', hitsCards(hits))
}
function clearHitsPhotos() {
    galleryPhotos.innerHTML = '';
}