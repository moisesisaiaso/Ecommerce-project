import { useRef } from "react";
import homeStyles from "../../assets/styles/homeStyles.module.css";
export const SearchByName = ({ setByName }) => {
    const searchInput = useRef();

    const handleSearch = (e) => {
        e.preventDefault();
        const productName = searchInput.current.value.trim();
        setByName(productName);
    };

    return (
        <form onSubmit={handleSearch} className={homeStyles.home__form}>
            <input
                ref={searchInput}
                type="text"
                className={homeStyles.home__search}
                placeholder="What are you looking for"
            />
            <button className={homeStyles.home__btn}>
                <i className={`bi bi-search ${homeStyles.iconSearch}`}></i>
            </button>
        </form>
    );
};
