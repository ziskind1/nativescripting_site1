import * as React from "react";
import { Product } from "../../domain/models";

interface HomeBundleProductProps {
    product: Product;
}

function HomeBundleProduct(props: HomeBundleProductProps) {

    const product = props.product;

    const priceHtml = product.pricereg === product.pricesale ?
        <p className="team">Bundle special
    <span>
                <span data-ko-ignore data-ko-keep data-bind="text: priceSaleDisp">{product.pricesale}</span>
            </span>
        </p>
        : <p className="team">Bundle special
    <span>
                <span data-ko-ignore data-ko-keep data-bind="text: priceSaleDisp"></span>
                <span data-ko-ignore data-ko-keep data-bind="text: priceRegDisp"></span>
            </span>
        </p>;


    return (
        <div className="single-user" data-ko-ignore data-ko-keep data-bind="click: function() { selectProduct('single'); }, css: { 'active-single': singleSelected }">
            <div className="border-medium"></div>
            <p className="user">single user</p>

            {priceHtml}
        </div>
    );
}

export default HomeBundleProduct;
