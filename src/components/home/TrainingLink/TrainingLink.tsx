import * as React from 'react';

import '../Benefits/Benefits.css';

function TrainingLink() {
  return (
    <div className="benefits">
      <div className="wrapper">
        <div className="heading">
          <h2 className="heading__title">Live and Classroom Training</h2>

          <h3>
            We have partnered with{' '}
            <a
              href="https://nativescript.training"
              target="_blank"
              style={{ color: '#aafae9' }}
            >
              NativeScript Training
            </a>{' '}
            to bring you onsite, remote, and public NativeScript training.
          </h3>
        </div>

        <div className="benefits__block benefits__block--flex">
          <ul className="benefits__list checklist">
            <li>
              <a
                href="https://nativescript.training/training/public/"
                target="_blank"
              >
                <h3>Public Open Enrollment Classes</h3>
                <p>
                  Open enrollment classes provide a quick and easy way for an
                  individual or a small team to get up speed on a specific
                  product or technology. If you are able to attend one of these
                  class in person, you will be able to interact with the
                  instructor and the other students in the class.
                </p>
              </a>
            </li>
          </ul>
          <ul className="benefits__list checklist">
            <li>
              <a
                href="https://nativescript.training/training/remote/"
                target="_blank"
              >
                <h3>Remote Classroom Instruction</h3>
                <p>
                  If you are not able to attend one of our public open
                  enrollment classes in person, we provide you with the ability
                  to attend the class remotely from your home or office. All
                  offerings scheduled for Washington, DC are available via
                  Remote. All you need is a computer and a fast, reliable
                  Internet connection.
                </p>
              </a>
            </li>
          </ul>
          <ul className="benefits__list checklist">
            <li>
              <a
                href="https://nativescript.training/training/private/"
                target="_blank"
              >
                <h3>Private Onsite Classes</h3>
                <p>
                  Private onsite courses provide a more economic and convenient
                  training solutions for companies with 5 or more students.
                  Private onsite courses can also be customized to meet the
                  evolving needs of your team. Contact us to find out more
                  information about onsite pricing and instructor availability.
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TrainingLink;
