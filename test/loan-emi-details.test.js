import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

import sinon from 'sinon';

const data = {
  interestRate: 0,
  monthlyEMI: 0,
  principal: 0,
  interest: 0,
  totalAmount: 0,
}


describe('Loan EMI details', () => {
  // Write test cases inside this block

  let el;

  beforeEach(async () => {
    localStorage.setItem('emi', JSON.stringify(data));
    el = await fixture(html`<loanemi-details>}></loanemi-details>`);
  });

  it('loan emi details', async () => {
    expect(el).to.exist;
  });

  it('div', async () => {
    const div = el.shadowRoot.querySelectorAll('div');
    
    div.forEach((d) => {
      expect(d).to.exist;
    });
  });

  it('p', async () => {
    const p = el.shadowRoot.querySelectorAll('p');
    
    p.forEach((para) => {
      expect(para).to.exist;
    });
  });

  it('span', async () => {
    const span = el.shadowRoot.querySelectorAll('span');
    
    span.forEach((s) => {
      expect(s).to.exist;
    });
  });

  it('h2', async () => {
    const h2 = el.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
  });

  it('lion-button', async () => {
    const lionBtn = el.shadowRoot.querySelectorAll('lion-button');

    lionBtn.forEach((btn) => {
      expect(btn).to.exist;
    });
  });

  it('to basic events button click event', async () => {
    const lionBtn = el.shadowRoot.querySelectorAll('lion-button');

    const functionSpy = sinon.spy(el, '_toBasicDetails');

    new Promise(() => {
      lionBtn[0].click();
    }).then(() => {
      el.updateComplete;
    }).then(() => {
      expect(functionSpy.callCount).to.equal(1);
    });

  });
  
  it('to customer button click event', async () => {
    const lionBtn = el.shadowRoot.querySelectorAll('lion-button');

    const functionSpy = sinon.spy(el, '_toCustomer');

    new Promise(() => {
      lionBtn[1].click();
    }).then(() => {
      el.updateComplete;
    }).then(() => {
      expect(functionSpy.callCount).to.equal(1);
    });

  });

});


