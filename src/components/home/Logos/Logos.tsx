import * as React from "react";

import './Logos.css';


function Logos() {
    return (
        <section className="icons innerWrapper">
            <div className="wrapper">
                <ul className="icons__list">
                    <li className="icons__item"><img src="/img/logos/nodejs.svg" alt="NodeJs" title="NodeJs" className="icons__image" /></li>
                    <li className="icons__item"><img src="/img/logos/android.svg" alt="Android" title="Android" className="icons__image" /></li>
                    <li className="icons__item"><img src="/img/logos/apple.svg" alt="iOS" title="iOS" className="icons__image" /></li>
                    <li className="icons__item"><img src="/img/logos/jasmine.svg" alt="Jasmine" title="Jasmine" className="icons__image" /></li>
                    <li className="icons__item"><img src="/img/logos/karma.svg" alt="Karma" title="Karma" className="icons__image" /></li>
                    <li className="icons__item"><img src="/img/logos/kinvey.svg" alt="Kinvey" title="Kinvey" className="icons__image" /></li>
                    <li className="icons__item"><img src="/img/logos/angular.svg" alt="Angular" title="Angular" className="icons__image" /></li>
                    <li className="icons__item"><img src="/img/logos/ngrx.svg" alt="Ngrx" title="Ngrx" className="icons__image" /></li>
                    <li className="icons__item"><img src="/img/logos/javascript.svg" alt="JavaScript" title="JavaScript" className="icons__image" /></li>
                    <li className="icons__item"><img src="/img/logos/typescript.svg" alt="TypeScript" title="TypeScript" className="icons__image" /></li>
                    <li className="icons__item"><img src="/img/logos/nativescript_white.svg" alt="NativeScript" title="NativeScript, duh!" className="icons__image" /></li>
                    <li className="icons__item"><img src="/img/logos/npm.svg" alt="Npm" title="Npm" className="icons__image" /></li>
                    <li className="icons__item"><img src="/img/logos/vue.svg" alt="Vue" title="Vue" className="icons__image" /></li>
                    <li className="icons__item"><img src="/img/logos/webpack.svg" alt="Webpack" title="Webpack" className="icons__image" /></li>
                </ul>
            </div>
        </section>
    );
}

export default Logos;
