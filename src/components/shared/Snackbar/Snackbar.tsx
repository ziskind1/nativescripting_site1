import * as React from 'react';
import { Link } from 'gatsby';

import './Snackbar.css';
import { SignUpsDataItem } from '../../../layouts/MainLayout';

const Snackbar: React.StatelessComponent<{
  children?: any;
}> = ({ children }) => {
  return (
    <div id="snackbar">
      <h4>Ben Johnsonson</h4>
      <p>
        recently enrolled in{' '}
        <span>NativeScript with Angular Getting Started Guide</span>
      </p>
    </div>
  );
};

export default Snackbar;

export function showSnackbar(item: SignUpsDataItem) {
  // Get the snackbar DIV
  const snackBarEl = document.getElementById('snackbar');
  snackBarEl.innerHTML = `<h4>${item.studentName}</h4><p>
    recently enrolled in <span>${item.courseName}</span>
  </p>`;

  // Add the "show" class to DIV
  snackBarEl.className = 'show';

  // After 3 seconds, remove the show class from DIV
  setTimeout(() => {
    snackBarEl.className = snackBarEl.className.replace('show', '');
  }, 3000);
}
