import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from "./ProductImage";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export { ProductButtons } from "./ProductButtons"; // Exportaciones para el archivo de barril
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {  // Exportación pero añadiendo las props necesarias para implementación Productcard.title, etc
    Title: ProductTitle,
    Buttons: ProductButtons,
    Image: ProductImage
})

export default ProductCard;