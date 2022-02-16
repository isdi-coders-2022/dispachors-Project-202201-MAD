import './detail.scss';

export function Details() {
    return (
        <section>
            <h2 className="book-title">Título</h2>
            <div className="double-container">
                <div className="double-container__book-cover">Portada</div>
                <div className="double-container__book-details">
                    <p>Author:</p>
                    <p>Year of Publication:</p>
                    <p>Year of Edition:</p>
                    <p>Year of Edition:</p>
                    <p>Category:</p>
                    <p>Topics:</p>
                </div>
            </div>

            <div className="synopsis">
                <h3>Synopsis</h3>
            </div>
            <div className="buttons-container">
                <input
                    className="buttons-container__button"
                    type="button"
                    value="Save"
                />
                <input
                    className="buttons-container__button"
                    type="button"
                    value="Delete"
                />
            </div>
        </section>
    );
}
