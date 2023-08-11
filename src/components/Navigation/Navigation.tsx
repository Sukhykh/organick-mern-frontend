import { NavLink } from 'react-router-dom';

// import styles from './Navigation.module.scss';

export const Navigation = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" end> home </NavLink>
                    </li>
                    <li>
                        <NavLink to="about"> about </NavLink>
                    </li>
                    <li>
                        <ul>
                            <span>pages</span>
                            <li>
                                <NavLink to="pages/service"> service </NavLink>
                            </li>
                            <li>
                                <NavLink to="pages/quality"> quality </NavLink>
                            </li>
                        </ul>
                        
                    </li>
                    <li>
                        <NavLink to="shop"> shop </NavLink>
                    </li>
                    <li>
                        <NavLink to="projects"> projects </NavLink>
                    </li>
                    <li>
                        <NavLink to="news"> news </NavLink>
                    </li>
                </ul>
            </nav>
                <div>
                    <NavLink to="cart"> cart </NavLink>
                </div>
                <div>
                    <NavLink to="admin"> admin </NavLink>
                </div>
        </header>
    )
}