/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect, useContext } from 'react';
import * as api from '../../services/PRH-api';
import './details.scss';
import { Context } from '../../context/context-provider';

export function Details() {
    const { user } = useAuth0();
    const { addBook, userBooks, deleteBook } = useContext(Context);
    const [bookState, setBookState] = useState([]);
    const { isbn } = useParams();
    const titleURL = `https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/titles/${isbn}?api_key=mdmzpbe68gz2cc23pc7dhs28`;
    const contentURL = `https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/titles/${isbn}/content?api_key=mdmzpbe68gz2cc23pc7dhs28
`;

    useEffect(() => {
        api.getFromUrl(titleURL).then((resp) => {
            const data = resp.data.data.titles[0];
            const {
                title,
                author,
                image = data._links[1].href,
                pages,
                contentLink = data._links[6].href,
            } = data;
            setBookState({ isbn, title, author, image, pages, contentLink });
            api.getFromUrl(contentURL).then((response) => {
                const { jacketquotes } = response.data.data.content;
                setBookState((previous) => ({ ...previous, jacketquotes }));
            });
        });
    }, []);

    const handleSave = () => {
        if (
            userBooks.filter(
                (item) => item.isbn === bookState.isbn && item.user === user.sub
            ).length !== 0
        )
            return;

        const bookToAdd = {
            user: user.sub,
            isbn: bookState.isbn,
            _links: [{}, { href: bookState.image }],
            isRead: false,
        };
        addBook(bookToAdd);
    };

    const handleDelete = () => {
        const bookToDelete = userBooks.find(
            (item) => item.isbn === bookState.isbn && item.user === user.sub
        );
        if (bookToDelete !== undefined) deleteBook(bookToDelete);
    };

    return (
        <section className="book-data">
            <h2 className="book-data__title">{bookState.title}</h2>
            <div className="book-data__top-details">
                <img
                    className="book-data__cover"
                    src={bookState.image}
                    alt=""
                />
                <div className="book-data__details">
                    <p>Author: {bookState.author}</p>
                    <p>Pages: {bookState.pages}</p>
                    <p>Topics:</p>
                </div>
            </div>

            <div className="book-data__synopsis">
                <p
                    className="book-data__synopsis-text"
                    dangerouslySetInnerHTML={{ __html: bookState.jacketquotes }}
                />
            </div>
            <div className="actions">
                <input
                    onClick={handleSave}
                    className="actions__save-button"
                    type="button"
                    value="Save"
                />
                <input
                    onClick={handleDelete}
                    className="actions__delete-button"
                    type="button"
                    value="Delete"
                />
            </div>
        </section>
    );
}
