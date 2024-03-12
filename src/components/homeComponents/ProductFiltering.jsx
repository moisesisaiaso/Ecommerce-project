import { AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion } from "reactstrap";

import homeStyles from "../../assets/styles/homeStyles.module.css";
import { useSelector } from "react-redux";
import { useRef } from "react";

export const ProductFiltering = ({ setShowProducts }) => {
    const fromInput = useRef();
    const toInput = useRef();

    const { products } = useSelector((state) => state.product);

    const handleFilteByPrice = (e) => {
        e.preventDefault();
        const from = parseFloat(fromInput.current.value.trim());
        const to = parseFloat(toInput.current.value.trim());

        const filterByPrice = products.filter((product) => {
            const productPrice = parseFloat(product.price);
            return productPrice >= from && productPrice <= to;
        });

        setShowProducts(filterByPrice);
    };

    const handleFilterByCategory = (category) => {
        const filterByCategory = products.filter((product) => {
            const { name } = product.category;
            return name === category;
        });

        setShowProducts(filterByCategory);
    };

    return (
        <UncontrolledAccordion
            defaultOpen={["1", "2"]}
            stayOpen
            className={homeStyles.filter__container}
        >
            <AccordionItem>
                <AccordionHeader targetId="1">Price</AccordionHeader>
                <AccordionBody accordionId="1">
                    <form onSubmit={handleFilteByPrice}>
                        <div className={homeStyles.filterInpunt}>
                            <label htmlFor="">From</label>
                            <input type="number" name="" id="" ref={fromInput} />
                        </div>
                        <div className={homeStyles.filterInpunt}>
                            <label htmlFor="">To</label>
                            <input type="number" name="" id="" ref={toInput} />
                        </div>
                        <div className={homeStyles.filter__btnContainer}>
                            <button>Filter price</button>
                        </div>
                    </form>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="2">Categoty</AccordionHeader>
                <AccordionBody accordionId="2">
                    <ul className={homeStyles.filter__list}>
                        <li onClick={() => handleFilterByCategory("Kitchen")}>Kitchen</li>
                        <li onClick={() => handleFilterByCategory("Smart TV")}>Smart TV</li>
                        <li onClick={() => handleFilterByCategory("Smartphones")}>Smartphones</li>
                        <li onClick={() => handleFilterByCategory("Computers")}>Computers</li>
                    </ul>
                </AccordionBody>
            </AccordionItem>
        </UncontrolledAccordion>
    );
};
