import productStyles from "../assets/styles/productStyles.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CardProduct } from "../components/CardProduct";

export const ProductPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { products, isLoading } = useSelector((state) => state.product);

    const [product, setProduct] = useState({});
    const [productsCategory, setProductsCategory] = useState([]);

    const getProduct = () => {
        const idNumber = parseInt(id);
        const productArray = products?.filter((product) => {
            const idProduct = parseInt(product.id);
            return idProduct === idNumber;
        });

        console.log(productArray);
        setProduct(productArray[0]);
    };

    const filterByCategory = () => {
        if (product && product.category) {
            /*OJO: este es el problema que me estaba generando ya que no evalué primero si existía product, lo que hacía que me devolviran datos vacios */
            const { category } = product;

            const filterByCategory = products?.filter((product) => {
                const { name } = product.category;
                return name === category.name;
            });
            setProductsCategory(filterByCategory);
        }
    };

    useEffect(() => {
        getProduct();
    }, [id, products]);

    useEffect(() => {
        filterByCategory();
    }, [
        products,
        product,
    ]); /*OJO:  tambien era necesario hacer un observable para la función de filtro de categoria ya que aunque se ejecute la función si no existen product quiere decir que aún la aún los datos del state no llegan */

    console.log(products);

    console.log(productsCategory + "categoria");

    return (
        <>
            {isLoading ? (
                <h2>LOADING...</h2>
            ) : (
                <section className={productStyles.product}>
                    <header className={productStyles.product__header}>
                        <ul>
                            <li
                                onClick={() => navigate("/")}
                                className={productStyles.header__home}
                            >
                                Home
                            </li>
                            <li className={productStyles.header__title}>{product?.title}</li>
                        </ul>
                    </header>
                    <section className={productStyles.product__description}>
                        <article></article>
                        <article></article>
                    </section>
                    <h5>Discover similar items</h5>
                    <section className={productStyles.product__similar}>
                        {productsCategory?.map((product) => (
                            <CardProduct key={product?.id} product={product} />
                        ))}
                    </section>
                </section>
            )}
        </>
    );
};
