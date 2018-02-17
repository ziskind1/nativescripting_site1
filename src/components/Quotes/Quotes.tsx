import * as React from "react";

import './Quotes.css';


function Quotes() {

    return (
        <div className="wrapper">
            <div className="quotes quotes--learning grid-3">
                <div className="quotes__item quotes__item--small">
                    <h3 className="quotes__item-quote">NativeScripting provides really high quality focused content around learning NativeScript! I love using the platform to refresh my skills and hone in on specific challenge areas to fill in my gaps of knowledge.</h3>
                    <div className="quotes__author">
                        <img className="quotes__author-img" src="/img/people/tracy_lee.jpg" alt="" />
                        <div>
                            <a target="_blank" href="https://twitter.com/ladyleet">Tracy Lee | ladyleet</a>
                            <p>RxJS Core Team member and Google Developer Expert</p>
                        </div>
                    </div>
                </div>
                <div className="quotes__item quotes__item--small">
                    <h3 className="quotes__item-quote">As a previous Developer Advocate for Progress/Telerik, who makes NativeScript, I've no hesitation in saying that NativeScripting.com is the only place you need to learn NativeScript, from the masterful Alex. His teaching style is absolutely on point; comprehensive and concise enough to have you building real mobile applications, whilst giving you fundamental and advanced knowledge necessary to survive in the wild.</h3>
                    <div className="quotes__author">
                        <img className="quotes__author-img" src="/img/people/todd_motto.jpg" alt="" />
                        <div>
                            <a target="_blank" href="https://twitter.com/toddmotto">Todd Motto</a>
                            <p>Creator <a href="https://ultimateangular.com" target="_blank">@UltimateAngular</a> and Google Developer Expert for Angular</p>
                        </div>
                    </div>
                </div>
                <div className="quotes__item quotes__item--small">
                    <h3 className="quotes__item-quote">The best NativeScript video content out there. NativeScripting’s courses are an amazing resource for getting started with NativeScript. Highly recommended.</h3>
                    <div className="quotes__author">
                        <img className="quotes__author-img" src="/img/people/tj_vantoll.jpg" alt="" />
                        <div>
                            <a target="_blank" href="https://twitter.com/tjvantoll">TJ VanToll</a>
                            <p>Principal Developer Advocate @ProgressSW</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quotes;
