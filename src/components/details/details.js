/* eslint-disable no-underscore-dangle */
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from '../../services/PRH-api';
import { Menu } from '../core/menu';

export function Details() {
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
            setBookState({ title, author, image, pages, contentLink });
            api.getFromUrl(contentURL).then((response) => {
                const { jacketquotes } = response.data.data.content;
                setBookState((previous) => ({ ...previous, jacketquotes }));
            });
        });
    }, []);

    console.log(bookState.jacketquotes);

    return (
        <>
            <img className="details__image" src={bookState.image} alt="" />
            {}
            <div className='details__info'>
                <p>{bookState.}</p>
            </div>
            <div
                className="Container"
                dangerouslySetInnerHTML={{ __html: bookState.jacketquotes }}
            />
        </>
    );
}
