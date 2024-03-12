import generalStyles from "../assets/styles/generalStyles.module.css";

export const Footer = () => {
    return (
        <>
            <footer>
                <h3>&copy; DESARROLADO POR MOISES ORTIZ GRACIA </h3>
                <ul>
                    <li>
                        <a href="#">
                            <i className={`bi bi-instagram ${generalStyles.socialIcons}`}></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className={`bi bi-linkedin ${generalStyles.socialIcons}`}></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className={`bi bi-youtube ${generalStyles.socialIcons}`}></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
};
