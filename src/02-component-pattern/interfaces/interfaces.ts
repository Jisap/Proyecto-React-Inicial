
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
    product: Product;
    maxCount?: number;
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {                                  // Interface para ProductCardHOC que se compone de las props necesarias para ProductCard
    ({ children, product }: ProductCardProps ) : JSX.Element,           // tipo para ProductCard
    Title:   ( Props: ProductTitleProps )   => JSX.Element,
    Buttons: ( Props: ProductButtonsProps ) => JSX.Element,             // tipo para ProductButtons
    Image:   ( Props: ProdcutImgProps )     => JSX.Element,
}

export interface onChangeArgs{ // Argumentos que el onChange va a recibir
    product: Product;
    count: number;
}

export interface ProductInCart extends Product { //Esta interface contiene todos los campos de Product, pero con una propiedad extra que indica si el producto está en el carrito
    count: number
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {  // Aqui definimos todo lo que el componente va a exponer a sus childrens
    count:number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}
