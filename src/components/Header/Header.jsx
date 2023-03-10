import style from './header.module.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

export const Header = () => {
    return (
        <header>
            <div>
                <NavLink to="/">
                    <img className={style.headerLogo} src={Logo} />
                </NavLink>
            </div>
            <nav>
                <ul className={style.headerNav}>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/a-propos">A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}