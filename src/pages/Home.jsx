import { useEffect, useState } from "react";
import homeStyles from "../assets/styles/homeStyles.module.css";
import { SearchByName } from "../components/homeComponents/SearchByName";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/slices/product/thunks";
import { ProductFiltering } from "../components/homeComponents/ProductFiltering";
import { CardProduct } from "../components/CardProduct";

export const Home = () => {
    const [id, setId] = useState();
    const [byName, setByName] = useState();

    const [showProducts, setShowProducts] = useState();

    const dispatch = useDispatch();
    const { products, isLoading } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(getProducts(id, byName));
    }, [id, byName]);

    useEffect(() => {
        setShowProducts(products);
    }, [products]);

    console.log(products);
    return (
        <>
            {isLoading ? (
                <h2>LOADING...</h2>
            ) : (
                <section className={homeStyles.home}>
                    <SearchByName setByName={setByName} />
                    <aside>
                        <ProductFiltering setShowProducts={setShowProducts} />
                    </aside>
                    <section>
                        {showProducts?.map((product) => (
                            <CardProduct key={product?.id} product={product} />
                        ))}
                    </section>
                </section>
            )}
        </>
    );
};
