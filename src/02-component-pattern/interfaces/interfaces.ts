
import { Props as ProductCardProps } from "../components/ProductCard";  // Importación de las props necesarias para ProductCard
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProdcutImgProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";


export interface Product {                                              // Interfaz para el producto
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {                                  // Interfaz para el contexto de productos
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardHOCProps {                                  // Interface para ProductCardHOC que se compone de las props necesarias para ProductCard
    ({ children, product }: ProductCardProps ) : JSX.Element,           // tipo para ProductCard
    Title:   ( Props: ProductTitleProps )   => JSX.Element,
    Buttons: ( Props: ProductButtonsProps ) => JSX.Element,             // tipo para ProductButtons
    Image:   ( Props: ProdcutImgProps )     => JSX.Element,
}