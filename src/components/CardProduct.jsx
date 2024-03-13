import { Navigate, useNavigate } from "react-router-dom";
import homeStyles from "../assets/styles/homeStyles.module.css";

export const CardProduct = ({ product }) => {
    const { id, brand, title, price, images } = product;
    const [{ url }] = images;

    const navigate = useNavigate();

    const handleCard = (id) => {
        console.log(id);
        navigate(`/product/${id}`);
    };

    return (
        <>
            <article className={homeStyles.card}>
                <div onClick={() => handleCard(id)}>
                    <header className={homeStyles.card__header}>
                        <img src={url} alt="product" />
                    </header>
                    <div className={homeStyles.card__data}>
                        <article className={homeStyles.data__name}>
                            <span className={homeStyles.data__brand}>{brand}</span>
                            <h5>{title}</h5>
                        </article>
                        <article className={homeStyles.data__price}>
                            <span>Price</span>
                            <h5>$ {price}</h5>
                        </article>
                    </div>
                </div>
                <button className={homeStyles.card__btn}>
                    <i className={`bi bi-cart2 ${homeStyles.cart__icon}`}></i>
                </button>
            </article>
        </>
    );
};
