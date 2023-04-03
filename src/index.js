
// import templateFunction from './template.hbs';

// import axios from "axios";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
// import Notiflix from "notiflix";
import { fetchPixabay } from "./fetchPixabay";

const searchForm = document.querySelector('#search-form');
const btnSubmit = document.querySelector('button');
const galleryPhotos = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-more');
// document.body.innerHTML = templateFunction();
searchForm.addEventListener('submit', handleCearch);


function handleCearch(event) {
    event.preventDefault();
    const searchQueryForm = event.currentTarget.elements.searchQuery.value.trim();
    fetchPixabay(searchQueryForm)
}