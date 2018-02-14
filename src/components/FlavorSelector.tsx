import * as React from "react";
import { CourseFlavorType } from "../domain/models";


interface FlavorSelectorProps {
    onSelectFlavor: (flavor: CourseFlavorType) => void;
}

const FlavorSelectorDesktop = (props: FlavorSelectorProps) => {
    return (
        <div className="bottom-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="select-cat" data-ko-keep data-bind="click: toggleCatSelectorActive, css: { 'select-cat-active': catSelectorActive }">

                            <a onClick={() => props.onSelectFlavor('Core')}>
                                <span>Core</span>
                            </a>
                            <a onClick={() => props.onSelectFlavor('Angular')}>
                                <span>Angular</span>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const FlavorSelectorMobile = (props: FlavorSelectorProps) => {
    return (
        <div className="top-tabs-wrapper hidden-xs">
            <div className="top-tabs">
                <a onClick={() => props.onSelectFlavor('Core')} className="top-tab" data-ko-keep data-bind="css: { selected: catPicker.selectedCategory().catId === 'core' }, click: function() { selectCategoryDirect('core') }">
                    <img src="/img/nativescript_white.svg" />
                    <span>NativeScript Core</span>
                </a>

                <a onClick={() => props.onSelectFlavor('Angular')} className="top-tab" data-ko-keep data-bind="css: { selected: catPicker.selectedCategory().catId === 'ng' }, click: function() { selectCategoryDirect('ng') }">
                    <img src="/img/nativescript_angular.svg" />
                    <span>NativeScript with Angular</span>
                </a>
            </div>
        </div>
    );
};

export const FlavorSelector: React.StatelessComponent<FlavorSelectorProps> = (props: FlavorSelectorProps) => {

    return (
        <div>
            <FlavorSelectorDesktop {...props} />
            <FlavorSelectorMobile {...props} />
        </div>
    );
};
