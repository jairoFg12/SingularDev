import { Supermarket } from './supermarket';

export interface Product {
    id: string;
    name: string;
    brand: string;
    supermarkets: Map<string, number>;
}