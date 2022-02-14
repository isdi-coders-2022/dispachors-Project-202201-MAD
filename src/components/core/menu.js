/* eslint-disable jsx-a11y/control-has-associated-label */
export function Menu() {
    return (
        <div className="menu">
            <i role="menuitem" className="fa-regular fa-house menu__item" />
            <i
                role="menuitem"
                className="fa-regular fa-magnifying-glass menu__item"
            />
            <i role="menuitem" className="fa-regular fa-bookmark menu__item" />
        </div>
    );
}
