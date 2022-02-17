import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', () => {
  // Write test cases inside this block

  let el;

  beforeEach(async () => {
    el = await fixture(html`<loan-application></loan-application>`);
  });

  it('loan application', async () => {
    expect(el).to.exist;
  });

  it('div', async () => {
    const div = el.shadowRoot.querySelector('div');
    expect(div).to.exist;
    expect(div).to.be.accessible();
  });

  it('dashboard', async () => {
    const dashboard = el.shadowRoot.querySelector('dash-board');
    expect(dashboard).to.exist;
    expect(dashboard).to.be.accessible();
  });

  it('increment counter', () => {
    const val = el.counter;
    el.__increment();
    expect(el.counter).to.equal(val+1);
  });

});
