import * as React from "react";
import { CourseFlavorType } from "../domain/models";


interface FlavorSelectorProps {
    onSelectFlavor: (flavor: CourseFlavorType) => void;
}

/*
export class FlavorSelector extends React.Component<FlavorSelectorProps, {}> {

    public filterByFlavor(flavor: CourseFlavorType) {
        this.props.onSelectFlavor(flavor);
    }

    public render() {
        return (
            <div>
                <button onClick={() => this.filterByFlavor('Core')}>Core</button>
                <button onClick={() => this.filterByFlavor('Angular')}>Angular</button>
            </div>
        );
    }
}
*/

export const FlavorSelector: React.StatelessComponent<FlavorSelectorProps> = (props: FlavorSelectorProps) => {

    const filterByFlavor = (flavor: CourseFlavorType) => {
        props.onSelectFlavor(flavor);
    }

    return (
        <div>
            <button onClick={() => filterByFlavor('Core')}>Core</button>
            <button onClick={() => filterByFlavor('Angular')}>Angular</button>
        </div>
    );
};
