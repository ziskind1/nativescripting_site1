import * as React from 'react';

import './Benefits.css';

function Benefits() {
    return (
        <div className="benefits">

            <div className="wrapper">
                <div className="heading">
                    <h2 className="heading__title">
                        What you get
                </h2>
                </div>

                <div className="benefits__block benefits__block--flex">
                    <ul className="benefits__list checklist">
                        <li>
                            <h3>Expert authors</h3>
                            <p>Learn from some of the best NativeScript experts</p>
                        </li>
                        <li>
                            <h3>Only the best</h3>
                            <p>Best practices, software patterns, and architecture</p>
                        </li>
                    </ul>
                    <ul className="benefits__list checklist">
                        <li>
                            <h3>Real-world training</h3>
                            <p>Build real-world expertise to land that job or promotion</p>
                        </li>
                        <li>
                            <h3>Evergreen courses</h3>
                            <p>Courses are kept fresh and up to date with additional content</p>
                        </li>
                    </ul>
                    <ul className="benefits__list checklist">
                        <li>
                            <h3>World location discounts</h3>
                            <p>Not a good exchange rate? (ie. India/Brazil) Get in touch for a coupon</p>
                        </li>
                        <li>
                            <h3>Learn on the go</h3>
                            <p>View our courses with a mobile app</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
