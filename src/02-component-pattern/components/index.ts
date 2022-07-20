import { ProductCard as ProductCardHOC } from "./ProductCard";  // Importación de ProductCard renombrado a ProductCardHOC
import { ProductTitle } from './ProductTitle';                  // Importaciones de los componentes de productCard
import { ProductButtons } from './ProductButtons';
import { ProductImage } from "./ProductImage";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export { ProductButtons } from "./ProductButtons"; // Exportaciones para el archivo de barril
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";


export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {  // Exportación de ProductCard como un HOC pero añadiendo las props necesarias 
    Title: ProductTitle,                                                         // para implementación Productcard.title, etc. Estas props obedecen a la interface 
    Buttons: ProductButtons,                                                     // ProductCardHOCProps que define un HOC. Este productCard se usará en el ShoppingPage.                    
    Image: ProductImage
})

export default ProductCard;