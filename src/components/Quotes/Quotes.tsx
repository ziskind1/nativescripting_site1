import * as React from 'react';

import './Quotes.css';

function Quotes() {
  return (
    <div className="wrapper">
      <div className="quotes quotes--learning grid-3">
        <div className="quotes__item quotes__item--small">
          <h3 className="quotes__item-quote">
            The courses on NativeScripting are easy to follow, paced well, and
            do a great job of getting you up to speed with NativeScript.
          </h3>
          <div className="quotes__author">
            <img
              alt="Raymond Camden"
              className="quotes__author-img"
              src="/img/people/raymond_camden.jpg"
            />
            <div>
              <a target="_blank" href="https://twitter.com/raymondcamden">
                Raymond Camden
              </a>
              <p>DevRel for Auth0 Extend</p>
            </div>
          </div>
        </div>

        <div className="quotes__item quotes__item--small">
          <h3 className="quotes__item-quote">
            NativeScripting provides really high quality focused content around
            learning NativeScript! I love using the platform to refresh my
            skills and hone in on specific challenge areas to fill in my gaps of
            knowledge.
          </h3>
          <div className="quotes__author">
            <img
              alt="Tracy Lee"
              className="quotes__author-img"
              src="/img/people/tracy_lee.jpg"
            />
            <div>
              <a target="_blank" href="https://twitter.com/ladyleet">
                Tracy Lee | ladyleet
              </a>
              <p>RxJS Core Team member and Google Developer Expert</p>
            </div>
          </div>
        </div>

        <div className="quotes__item quotes__item--small">
          <h3 className="quotes__item-quote">
            The best NativeScript video content out there. NativeScripting’s
            courses are an amazing resource for getting started with
            NativeScript. Highly recommended.
          </h3>
          <div className="quotes__author">
            <img
              alt="TJ VanToll"
              className="quotes__author-img"
              src="/img/people/tj_vantoll.jpg"
            />
            <div>
              <a target="_blank" href="https://twitter.com/tjvantoll">
                TJ VanToll
              </a>
              <p>Principal Developer Advocate @ProgressSW</p>
            </div>
          </div>
        </div>

        <div className="quotes__item quotes__item--small">
          <h3 className="quotes__item-quote">
            NativeScripting is a great resource with top notch material on
            NativeScript and mobile application development with frameworks such
            as Angular and Vue. I highly recommend it for any developer,
            beginner to expert.
          </h3>
          <div className="quotes__author">
            <img
              alt="Nic Raboy"
              className="quotes__author-img"
              src="/img/people/nic_raboy.jpg"
            />
            <div>
              <a target="_blank" href="https://twitter.com/nraboy">
                Nic Raboy
              </a>
              <p>The Polyglot Developer</p>
            </div>
          </div>
        </div>
        <div className="quotes__item quotes__item--small">
          <h3 className="quotes__item-quote">
            As a previous Developer Advocate for Progress/Telerik, who makes
            NativeScript, I've no hesitation in saying that NativeScripting.com
            is the only place you need to learn NativeScript, from the masterful
            Alex. His teaching style is absolutely on point; comprehensive and
            concise enough to have you building real mobile applications, whilst
            giving you fundamental and advanced knowledge necessary to survive
            in the wild.
          </h3>
          <div className="quotes__author">
            <img
              alt="Todd Motto"
              className="quotes__author-img"
              src="/img/people/todd_motto.jpg"
            />
            <div>
              <a target="_blank" href="https://twitter.com/toddmotto">
                Todd Motto
              </a>
              <p>
                Creator{' '}
                <a href="https://ultimateangular.com" target="_blank">
                  @UltimateAngular
                </a>{' '}
                and Google Developer Expert for Angular
              </p>
            </div>
          </div>
        </div>
        <div className="quotes__item quotes__item--small">
          <h3 className="quotes__item-quote">
            Alex, affectionately known as the Voice of NativeScript, produces
            high quality video content that effectively teaches the ins and outs
            of NativeScript, walking students through the complexities of
            building mobile apps. These videos teach both NativeScript with
            Angular and NativeScript Core, offering two great ways to build
            beautiful apps.
          </h3>
          <div className="quotes__author">
            <img
              alt="Jen Looper"
              className="quotes__author-img"
              src="/img/people/jen_looper.jpg"
            />
            <div>
              <a target="_blank" href="https://twitter.com/jenlooper">
                Jen Looper
              </a>
              <p>Sr. DevRel @ ProgressSW and Google Developer Expert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
