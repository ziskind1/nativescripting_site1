import * as React from "react";
//import { CourseFlavorType } from "../../../domain/models";

import './CourseFilter.css';

export type CourseFilterType = 'All' | 'Free' | 'Core' | 'Angular';

const allFilterOptions: CourseFilterType[] = ['All', 'Free', 'Core', 'Angular'];

interface CourseFilterProps {
    onSelectFilterType: (option: CourseFilterType) => void;
}

interface CourseFilterState {
    selectedFilterType: CourseFilterType;
}


export class CourseFilter extends React.Component<CourseFilterProps, CourseFilterState> {

    constructor(props: CourseFilterProps) {
        super(props);

        this.state = {
            selectedFilterType: 'All'
        };
    }

    private getFilterOptionsHtml(
        allOptions: CourseFilterType[],
        selectedFilterType: CourseFilterType,
        selectFilterOption: (option: CourseFilterType) => Promise<void>
    ): JSX.Element[] {
        return allOptions.map((o, idx) => {

            const optionClassName = o === selectedFilterType ? 'active noselect' : 'noselect';

            return (
                <li key={idx}>
                    <a className={optionClassName} onClick={(e) => { e.preventDefault(); selectFilterOption(o); }}>
                        {o}
                    </a>
                </li>
            );
        });
    }

    private selectFilterOption<T>(option: CourseFilterType): Promise<T> {
        return new Promise<T>((resolve, reject) =>
            this.setState({ selectedFilterType: option }, () => {
                this.props.onSelectFilterType(option);
                resolve();
            }));
    }

    public render() {
        const optionsHtml = this.getFilterOptionsHtml(
            allFilterOptions,
            this.state.selectedFilterType,
            (option) => {
                return this.selectFilterOption(option);
            }
        );

        return (
            <div className="course-filter-wrapper">
                <ul>
                    {optionsHtml}
                </ul>
            </div>
        );
    }
}

const FlavorSelectorDesktop = (props: CourseFilterProps) => {
    return (
        <div className="bottom-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="select-cat" data-ko-keep data-bind="click: toggleCatSelectorActive, css: { 'select-cat-active': catSelectorActive }">

                            <a onClick={() => props.onSelectFilterType('Core')}>
                                <span>Core</span>
                            </a>
                            <a onClick={() => props.onSelectFilterType('Angular')}>
                                <span>Angular</span>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const FlavorSelectorMobile = (props: CourseFilterProps) => {
    return (
        <div className="top-tabs-wrapper hidden-xs">
            <div className="top-tabs">
                <a onClick={() => props.onSelectFilterType('Core')} className="top-tab" data-ko-keep data-bind="css: { selected: catPicker.selectedCategory().catId === 'core' }, click: function() { selectCategoryDirect('core') }">
                    <img src="/img/nativescript_white.svg" />
                    <span>NativeScript Core</span>
                </a>

                <a onClick={() => props.onSelectFilterType('Angular')} className="top-tab" data-ko-keep data-bind="css: { selected: catPicker.selectedCategory().catId === 'ng' }, click: function() { selectCategoryDirect('ng') }">
                    <img src="/img/nativescript_angular.svg" />
                    <span>NativeScript with Angular</span>
                </a>
            </div>
        </div>
    );
};

export const FlavorSelector: React.StatelessComponent<CourseFilterProps> = (props: CourseFilterProps) => {

    return (
        <div>
            <FlavorSelectorDesktop {...props} />
            <FlavorSelectorMobile {...props} />
        </div>
    );
};
