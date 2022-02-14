import './user.scss';

export function User() {
    return (
        <div className="app-user">
            <span className="app-user__container-image">
                <img
                    className="app-user__container-image__image"
                    src="./assets/pepe.png"
                    alt="el pepe"
                />
            </span>
            <span className="app-user__user-name">Pepe</span>
        </div>
    );
}
