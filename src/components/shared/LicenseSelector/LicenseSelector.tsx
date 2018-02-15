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

            const prodClassName = p.id === selectedProduct.id ? 'license selected' : 'license';

            return (
                <div key={idx} className={prodClassName} onClick={() => selectLicense(p)}>
                    <span>{p.description}</span>
                </div>
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
                        setTimeout(() => {
                            this.hideLicenseOptions();
                        }, 1000);
                    });
            }
        );

        const optionsClassName = this.state.licensesShowing ? 'license-options active' : 'license-options';

        return (
            <div className="license-selector">
                <div onClick={() => this.licenseSelectorClick()}>{this.state.selectedProduct.description}</div>
                <div className={optionsClassName}>
                    {licensesHtml}
                </div>
            </div>
        );
    }
};
