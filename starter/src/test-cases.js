import 'odyssey-test-utils/test-case-wrapper.js';
import 'odyssey-test-utils/test-case.js';

const test1El = document.getElementById('test-1');

test1El.test(() => {
  const body = document.body;

  if (body.hasAttribute('data-theme')) return false;

  const toggleComponent = document.querySelector('theme-toggler');

  const button = toggleComponent.shadowRoot.querySelector('button');

  if (!button) return false;

  button.click();

  if (body.getAttribute('data-theme') !== 'red') return false;

  button.click();

  if (body.getAttribute('data-theme') !== 'blue') return false;

  button.click();

  if (body.getAttribute('data-theme') !== 'purple') return false;

  return true;
})
