import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';


export interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductImage = ({ img = '', className, style }:Props ) => {
    const { product } = useContext(ProductContext);                 // product es el valor del contexto establecido en shoppingPage.tsx

    let imgToShow: string;                                          // imgToShow es la imagen a mostrar

    if (img) {                                                      // Si la imagen existe en los args, se muestra
        imgToShow = img
    } else if (product.img) {                                       // Si no, se muestra la imagen del contexto del product
        imgToShow = product.img
    } else {                                                        // Si no existe ninguna imagen, se muestra noImage                     
        imgToShow = noImage
    }

    return (
        <img 
            className={`${ styles.productImg} ${ className }` } src={imgToShow} alt="ProductImage" 
            style={ style }
        />
    )
}