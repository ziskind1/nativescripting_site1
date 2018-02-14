import * as React from 'react';

import { CourseFlavorType } from '../domain/models';


interface FlavorDescriptionProps {
    flavor: CourseFlavorType
}

const FlavorDescription: React.StatelessComponent<FlavorDescriptionProps> = (props: FlavorDescriptionProps) => {

    if (props.flavor === 'Core') {
        return (
            <div className="top-cat-description">
                <div className="container">
                    <div className="col-md-12 text-padding" data-ko-keep data-bind="with: catPicker">
                        <h3>
                            Courses for the NativeScript Core minded folks. MVVM, TypeScript, and no other UI frameworks.
                        </h3>
                    </div>
                </div>
            </div>
        );
    } else if (props.flavor === 'Angular') {
        return (
            <div className="top-cat-description">
                <div className="container">
                    <div className="col-md-12 text-padding" data-ko-keep data-bind="with: catPicker">
                        <h3>
                            Courses for the NativeScript with Angular folks. For those that want to use Angular in their native apps.
                        </h3>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="top-cat-description">
                <div className="container">
                    <div className="col-md-12 text-padding" data-ko-keep data-bind="with: catPicker">
                        <h3>
                            All our available NativeScript courses, including NativeScript Core and NativeScript with Angular.
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
};

export default FlavorDescription;







