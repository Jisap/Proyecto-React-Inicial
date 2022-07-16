import { lazy, LazyExoticComponent } from 'react';
//import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyloud/pages';
//import { LazyPage1 } from '../01-lazyloud/pages'

type JSXComponent = () => JSX.Element;

interface Route{
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent; 
}


const Lazy1 = lazy(() => import( /* webpackChunkName: "LazyPage1" */ '../01-lazyloud/pages/LazyPage1')); // LazyPage1 is a function that returns a JSX element
const Lazy2 = lazy(() => import( /* webpackChunkName: "LazyPage2" */ '../01-lazyloud/pages/LazyPage2')); // LazyPage2 is a function that returns a JSX element
const Lazy3 = lazy(() => import( /* webpackChunkName: "LazyPage3" */ '../01-lazyloud/pages/LazyPage3')); // LazyPage3 is a function that returns a JSX element

export const routes:Route[] = [
    {
        to: '/lazy1',                   // ruta en el navegador
        path: 'lazy1',                  // ruta en el servidor
        Component: Lazy1,               // componente que se carga
        name: 'Lazy-1',                 // nombre de la ruta en el navlink    
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy-2',
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy-3',
    }
]