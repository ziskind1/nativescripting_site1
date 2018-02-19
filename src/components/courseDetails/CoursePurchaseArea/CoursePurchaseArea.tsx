import * as React from 'react';
import LicenseSelector from '../../shared/LicenseSelector/LicenseSelector';
import ActionButton from '../../ActionButton/ActionButton';
import { Course, Product } from '../../../domain/models';

import './CoursePurchaseArea.css';

interface CoursePurchaseAreaProps {
    course: Course;
}

interface CoursePurchaseAreaState {
    selectedProduct: Product;
    actionUrl: string;
}


function getCourseActionUrl(course: Course, product: Product) {
    return 'https://sso.teachable.com/secure/89912/checkout/confirmation?product_id=' +
        product.id +
        '&course_id=' + course.id;
}

export class CoursePurchaseArea extends React.Component<CoursePurchaseAreaProps, CoursePurchaseAreaState> {

    constructor(props: CoursePurchaseAreaProps) {
        super(props);

        const selectedProduct = props.course.products.find(p => p.licensesMax === 1);

        this.state = {
            selectedProduct: selectedProduct,
            actionUrl: getCourseActionUrl(props.course, selectedProduct)
        };
    }

    private licenseSelect(p: Product) {
        this.setState({ selectedProduct: p });
    }

    public render() {

        const course = this.props.course;

        const savingsPercent = Math.round((1 - this.state.selectedProduct.pricesale / this.state.selectedProduct.pricereg) * 100);

        return (
            <div className="course-purchase-area-container">
                <div>
                    <div className="bundle-license">
                        <LicenseSelector products={course.products} onLicenseSelect={(p) => this.licenseSelect(p)} />
                    </div>
                    <div className="bundle-price">
                        <p>
                            <span>$</span>{this.state.selectedProduct.pricesale}
                        </p>
                        <span className="package__price-full">${this.state.selectedProduct.pricereg}</span>
                        <span className="package__price-save">
                            Save {savingsPercent}%
                        </span>
                    </div>
                </div>

                <ActionButton
                    text={`Get Course`}
                    url={getCourseActionUrl(course, this.state.selectedProduct)}
                    type='primary'
                    newWindow={true}
                />
            </div>
        );
    }
}
