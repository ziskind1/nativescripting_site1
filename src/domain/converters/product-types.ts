import { CoursesJsonProducts, BundlesJsonProducts } from '../graphql-types';
import { Product, ProdType } from '../models';

function descriptionLegible(p: CoursesJsonProducts | BundlesJsonProducts) {
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

export function productFromCoursesJsonProducts(
  p: CoursesJsonProducts
): Product {
  return {
    id: p.id,
    name: p.name,
    description: descriptionLegible(p),
    licensesMin: p.licensesMin,
    licensesMax: p.licensesMax,
    pricereg: p.pricereg,
    pricesale: p.pricesale,
    numPayments: p.numPayments,
    recurring: p.recurring,
    prodType: p.prodType as ProdType,
    code: p.code
  };
}

export function productFromBundlesJsonProducts(
  p: BundlesJsonProducts
): Product {
  return {
    id: p.id,
    name: p.name,
    description: descriptionLegible(p),
    licensesMin: p.licensesMin,
    licensesMax: p.licensesMax,
    pricereg: p.pricereg,
    pricesale: p.pricesale,
    numPayments: 0,
    recurring: false,
    prodType: 'once',
    code: ''
  };
}
