import { Link } from "react-router-dom";
import generalStyles from "../assets/styles/generalStyles.module.css";

export const NavBar = () => {
    return (
        <>
            <nav className={generalStyles.navbar}>
                <div>
                    <Link to="/" className={generalStyles.navbar__logo}>
                        e-commerce
                    </Link>
                </div>
                <div className={generalStyles.navbar__containerList}>
                    <ul className={generalStyles.navbar__list}>
                        <li className={generalStyles.list__option}>
                            <Link to="/user">
                                <i className={`bi bi-person ${generalStyles.option__icon}`}></i>
                            </Link>
                        </li>
                        <li className={generalStyles.list__option}>
                            <Link to="/purchases">
                                <i className={`bi bi-archive ${generalStyles.option__icon}`}></i>
                            </Link>
                        </li>
                        <li>
                            <a href="#">
                                <i className={`bi bi-cart2 ${generalStyles.option__icon}`}></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
