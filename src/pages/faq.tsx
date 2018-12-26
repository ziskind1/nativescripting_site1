import * as React from 'react';
import { Helmet } from 'react-helmet';

import '../css/faq.css';
import { MainLayout } from '../layouts/MainLayout';

function FaqPage() {
  const pageTitle = `FAQ | NativeScripting`;

  return (
    <MainLayout>
      <div className="wrapper">
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>

        <div className="faq-container">
          <h1>Frequently Asked Questions</h1>

          <div className="article">
            <p>
              Check here to get any questions answered that you may have about the
            course. Don't see a question that you need answered?{' '}
              <a href="mailto:info@nuvious.com">Send us an email</a>!
          </p>

            <div>
              <h2>Technical Requirements</h2>
              <h3>
                <strong>What are the pre-requisites for these courses?</strong>
              </h3>
              <p>
                <em>
                  Students should have a modest computer at minimum with internet
                  access able to run a text editor and command line scripts. They
                  should have the mobile development environment set up and
                configured.{' '}
                  <a
                    href="https://docs.nativescript.org/angular/start/introduction"
                    target="_blank"
                  >
                    See the docs
                </a>{' '}
                  for more info on this setup.
              </em>
              </p>
              <h3>
                <strong>
                  What kind of development experience should I have to take this
                  course?
              </strong>
              </h3>
              <p>
                <em>
                  Students should have some hands-on experience with JavaScript
                  development. While not required, more hands-on JavaScript
                  experience, experience with TypeScript and NPM is a plus.
              </em>
              </p>
              <h3>
                <strong>
                  I don't know where to begin, should I take NativeScript with
                  Angular or NativeScript Core courses?
              </strong>
              </h3>
              <p>
                <em>
                  Angular and Core are currently the two 'tracks' for developers
                  to follow, although they are not limited by these tracks and can
                  skip around. If you are comfortable using Angular (v2+), then
                  follow the NativeScript with Angular track. If you are coming
                  from a plain JavaScript world, then follow the NativeScript Core
                  track. Each course is clearly marked with either the
                NativeScript with Angular logo{' '}
                  <img src="/img/nativescript_angular.svg" className="text-img" />{' '}
                  or the NativeScript Core logo{' '}
                  <img src="/img/nativescript_white.svg" className="text-img" /> ,
                  and some courses apply to both Angular AND Core.
              </em>
              </p>
              <h3>
                <strong>
                  Are these courses appropriate for brand new NativeScript
                  developers?
              </strong>
              </h3>
              <p>
                <em>
                  Our courses are broken down by level of experience. The Getting
                Started courses for both{' '}
                  <a href="https://nativescripting.com/course/nativescript-with-angular-getting-started-guide/">
                    NativeScript with Angular
                </a>{' '}
                  and{' '}
                  <a href="https://nativescripting.com/course/nativescript-core-getting-started-guide/">
                    NativeScript Core
                </a>{' '}
                  are for absolute beginners, so if this is the first line of code
                  you are writing for NativeScript, you’re in a good place! The
                beginner classes are labeled with the level 1 icon{' '}
                  <img src="/img/level_icon1.svg" className="text-img" /> . The
                  Pro courses (
                <a href="https://nativescripting.com/course/nativescript-with-angular-pro/">
                    Angular
                </a>{' '}
                  and{' '}
                  <a href="https://nativescripting.com/course/nativescript-core-pro/">
                    Core
                </a>
                  ) are for students with a bit more experience and have a level 3
                icon <img src="/img/level_icon3.svg" className="text-img" /> .
              </em>
              </p>
              <h3>
                <strong>What are the system requirements for this class?</strong>
              </h3>
              <p>
                <em>
                  Students should have a modest computer at minimum with internet
                  access able to run a text editor and command line scripts. If
                  you have an IDE on your laptop (Visual Studio Code, WebStorm,
                  Notepad++ etc), you are in good shape.
              </em>
              </p>
              <h2>
                <strong>Content Delivery</strong>
              </h2>
              <h3>Is this course live or pre-recorded?</h3>
              <p>
                <em>
                  The on-demand courses on NativeScripting.com consist of
                  pre-recorded video presentations and demos for you to watch and
                  learn at your own pace. If you find you are interested in more
                  direct interaction and opportunities to ask questions, check out
                our partners'{' '}
                  <a href="https://nativescript.training">Live Class offering</a>{' '}
                  .
              </em>
              </p>
              <h3>
                Is there any opportunity to ask questions related to the content
                of the class?
            </h3>
              <p>
                <em>
                  The content and presentation of the on-demand class material is
                  all pre-recorded, so live interaction during the presentations
                is not included. However, with the{' '}
                  <a href="https://nativescript.training">Live Classes</a> offered
                  by our partners, you will have the opportunity to ask questions
                  daily during the class. Should you have any questions about the
                  specific on-demand course materials found here, you can tweet
                the author. The author information is found on our{' '}
                  <a href="https://nativescripting.com/about">Authors</a> page.
              </em>
              </p>
              <h3>Is it self-paced or delivered in a prescribed schedule?</h3>
              <p>
                <em>
                  The on-demand class is self-paced, allowing you to consume the
                  material at the pace that is perfect for you and your schedule.
                  Once you purchase a course or a bundle, you will have immediate
                  access to the content included in that bundle to start your
                  learning immediately and take as much, or as little, time as you
                  need.
              </em>
              </p>
              <h3>
                Will I still be able to access the course after I complete it?
            </h3>
              <p>
                <em>
                  Yes! Access to the course is unlimited! You will still be able
                  to access the course to review any chapters that you need to at
                  any time. In addition, with NativeScripting's commitment to
                  evergreen content, when updates are made to the course, you will
                  be notified so that you can review the new content, at no
                  additional cost!
              </em>
              </p>

              <h3>How long does a course last?</h3>
              <p>
                <em>
                  As an evergreen class, it’s never going to be finished as it
                  will be constantly updated with new and refreshed content as
                  Progress adds new features and capabilities to the NativeScript
                  Framework.
              </em>
              </p>
              <h3>Do you provide a certificate of completion?</h3>
              <p>
                <em>
                  Yes, we do. Once you've finished a course, reach out to us.
              </em>
              </p>
              <h3>Can I download the course for offline viewing?</h3>
              <p>
                <em>
                  The course is only available for streamed online viewing and is
                  not available for downloaded or offline viewing at this time.
              </em>
              </p>
              <h2>Purchasing Options</h2>
              <h3>
                If I buy the NativeScript with Angular Super Bundle but want more,
                can I upgrade to the Ultra Bundle?
            </h3>
              <p>
                <em>
                  Absolutely! You can upgrade from the Super Bundle to Ultra
                  Bundle for $120 per single user license (or $360 for a team).
                  Contact me at info@nuvious.com for a special discount code to
                  purchase the Ultra bundle.
              </em>
              </p>

              <h3>Do you offer in-person or private training deliveries?</h3>
              <p>
                <em>
                  For companies who are interested in private training deliveries,
                  please send me an email at info@nuvious.com and we can chat
                  about your needs and goals for your training.
              </em>
              </p>
              <h3>
                Do you offer any bulk rates for training teams of developers?
            </h3>
              <p>
                <em>
                  Absolutely! For teams of 10 can enjoy a special 25% discount. To
                  arrange this, send me an email at info@nuvious.com for a
                  discounted bulk purchase!
              </em>
              </p>
              <h3>Can discounts be combined?</h3>
              <p>
                <em>
                  Yes, certain discounts can be combined. For example, if there is
                  a sale price listed on a course or bundle, and you also have a
                  coupon code, then you will be able to combine discounts. You
                  will not be able to combine multiple coupon codes.
              </em>
              </p>
              <h3>
                Do you offer any discounts for education or government entities?
            </h3>
              <p>
                <em>
                  Absolutely! Just send me an email at info@nuvious.com and we can
                  chat about it.
              </em>
              </p>
              <h3>What about discounts for students?</h3>
              <p>
                <em>
                  Of course! Email us from your student account, or attach your
                  student ID.
              </em>
              </p>
              <h3>What forms of payment are accepted?</h3>
              <p>
                <em>
                  We currently accept payment via credit card (VISA, Mastercard
                  and AMEX) or PayPal. If you need to pay via invoice or check,
                  contact us at info@nuvious.com so we can arrange it. We also
                  accept wire transfer payments for international customers. Note
                  that wire transfer payments will incur a $15USD fee.
              </em>
              </p>
              <h3>What is your refund policy?</h3>
              <p>
                <em>
                  Our goal is 100% satisfaction from our students. If you find the
                  course did not meet your expectations, please contact me at
                  info@nuvious.com and we can discuss how we can remedy the
                  situation. All sales are final fourteen (14) days after date of
                  purchase and no refunds will be issued beyond that date.
              </em>
              </p>
              <h3>How do I get an invoice?</h3>
              <p>
                <em>
                  You'll get a receipt upon checkout, however if you need an
                  invoice send us your details and we'll get one back to you right
                  away.
              </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default FaqPage;
