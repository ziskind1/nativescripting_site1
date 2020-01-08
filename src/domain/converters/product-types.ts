import { CoursesJsonProducts } from '../graphql-types';
import { Product } from '../models';

function descriptionLegible(p: CoursesJsonProducts) {
  if (!p.licensesMax) {
    p.licensesMax = p.licensesMin;
  }
  if (p.licensesMax === 1) {
    return `1 user`;
  } else if (p.licensesMin === p.licensesMax) {
    return `${p.licensesMin} users`;
  } else {
    return `${p.licensesMin}-${p.licensesMax} users`;
  }
}

export function productFromProduct_3(p: CoursesJsonProducts): Product {
  return {
    id: p.id,
    name: p.name,
    description: descriptionLegible(p),
    licensesMin: p.licensesMin,
    licensesMax: p.licensesMax,
    pricereg: p.pricereg,
    pricesale: p.pricesale
  };
}
