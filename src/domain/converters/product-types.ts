import { products_3 } from '../graphql-types';
import { Product } from '../models';

export function productFromProduct_3(p: products_3): Product {
    return {
        id: p.id,
        name: p.name,
        description: p.description,
        licensesMin: p.licensesMin,
        licensesMax: p.licensesMax,
        pricereg: p.pricereg,
        pricesale: p.pricesale
    };
}
