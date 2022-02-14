import './user.scss';

export function User() {
    return (
        <div className="app-user">
            <img
                className="app-user__image"
                src="./assets/pepe.png"
                alt="el pepe"
            />

            <span className="app-user__user-name">Pepe</span>
        </div>
    );
}
