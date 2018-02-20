import * as React from 'react';
import Link from 'gatsby-link';
import { Product } from '../../../domain/models';

import './LicenseSelector.css';

export interface LicenseSelectorProps {
    products: Product[];
    onLicenseSelect: (product: Product) => void;
}

interface LicenseSelectorState {
    licensesShowing: boolean;
    selectedProduct: Product;
}

export default class LicenseSelector extends React.Component<LicenseSelectorProps, LicenseSelectorState> {

    constructor(props: LicenseSelectorProps) {
        super(props);

        this.state = {
            licensesShowing: false,
            selectedProduct: props.products[0]
        };
    }


    private getLicenseOptionsHtml(
        products: Product[],
        selectedProduct: Product,
        selectLicense: (product: Product) => Promise<void>
    ): JSX.Element[] {
        return products.map((p, idx) => {

            //const prodClassName = p.id === selectedProduct.id ? 'license selected' : 'license';
            const licenseClassName = p.id === selectedProduct.id ? 'active noselect' : 'noselect';

            return (
                <li key={idx}>
                    <a className={licenseClassName} onClick={(e) => { e.preventDefault(); selectLicense(p); }}>
                        {p.description}
                    </a>
                </li>
            );
        });
    }


    private showLicenseOptions() {
        this.setState({ licensesShowing: true });
    }

    private hideLicenseOptions() {
        this.setState({ licensesShowing: false });
    }

    public licenseSelectorClick() {
        if (this.state.licensesShowing) {
            this.hideLicenseOptions();
        } else {
            this.showLicenseOptions();
        }
    }

    private selectLicense<T>(product: Product): Promise<T> {
        return new Promise<T>((resolve, reject) =>
            this.setState({ selectedProduct: product }, () => {
                this.props.onLicenseSelect(product);
                resolve();
            }));
    }

    public render() {
        const products = this.props.products;

        const licensesHtml = this.getLicenseOptionsHtml(
            products,
            this.state.selectedProduct,
            (p) => {
                return this.selectLicense(p)
                    .then(() => {
                        this.hideLicenseOptions();
                    });
            }
        );

        const optionsClassName = this.state.licensesShowing ? 'license-options active' : 'license-options';
        const activeClassName = this.state.licensesShowing ? 'active' : null;

        return (
            <div className={`license-selector ${activeClassName}`}>
                <div className="license-selected-container" onClick={() => this.licenseSelectorClick()}>
                    <div>
                        <span className="noselect">
                            {this.state.selectedProduct.description}
                        </span>
                    </div>
                    <div className="selector-img-wrapper">
                        <img className="selector-img noselect" src="/img/arrow.png" />
                    </div>
                </div>


                <div className="license-options-list-overlay" onClick={() => this.hideLicenseOptions()}></div>
                <ul className="license-options-list">
                    {licensesHtml}
                </ul>


            </div>
        );
    }
};
