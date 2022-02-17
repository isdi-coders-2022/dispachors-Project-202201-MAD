import axios from 'axios';

export const getFromCategory = (catID) => {
    const URL = `https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/categories/${catID}/titles?rows=5&showCovers=true&sort=random&api_key=mdmzpbe68gz2cc23pc7dhs28`;

    return axios.get(URL);
};

export const getFromUrl = (url) => axios.get(url);

export const getFromSaved = () => {
    const URL = `http://localhost:4500/books/`;
    return axios.get(URL);
};

export const saveBook = (book) => {
    const URL = `http://localhost:4500/books/`;

    return axios.post(URL, book);
};

export const deleteBook = (book) => {
    const URL = `http://localhost:4500/books/${book.id}`;

    return axios.delete(URL);
};

export const updateBook = (book) => {
    const URL = `http://localhost:4500/books/${book.id}`;

    return axios.patch(URL, book);
};
