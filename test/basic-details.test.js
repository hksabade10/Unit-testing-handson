import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import { Router } from '@vaadin/router';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files

  let el;

  const jsonOk = (body) => {
    const mockResponse = new window.Response(JSON.stringify(body), { // the fetch API returns a resolved window Response object
      status: 200,
      headers: {
        'Content-type': 'application/json'
      }
    });
  
    return Promise.resolve(mockResponse);
  }

  beforeEach(async () => {
    const stub1 = sinon.stub(window, 'fetch');
    stub1.returns(jsonOk({
      "interestRate": 0,
      "monthlyEMI": 0,
      "principal": 0,
      "interest": 0,
      "totalAmount": 0,
    }));

    const stub2 = sinon.stub(Router, 'go');
    stub2.returns(true);

    el = await fixture(html`<basic-details></basic-details>`);
  });

  afterEach(async () => {
    sinon.restore();
  });

  it('basic-details', async () => {
    expect(el).to.exist;
  });

  it('div basic details', async () => {

    await expect(el).shadowDom.to.equal(
      `<div class="form-basic">
       </div>`,
       {ignoreChildren: ['div']}
    );
  });

  it('div', async () => {
    const div = el.shadowRoot.querySelectorAll('div');
    
    div.forEach((d) => {
      expect(d).to.exist;
    });
  });

  it('h2', async () => {
    const h2 = el.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
  });

  
  it('lion-form', async () => { 
    const lionForm = el.shadowRoot.querySelector('lion-form');
    expect(lionForm).to.exist;
  });

  it('form', async () => { 
    const form = el.shadowRoot.querySelector('form');
    expect(form).to.exist;
  });

  it('lion-input', async () => { 
    const lionInput = el.shadowRoot.querySelector('lion-input');
    expect(lionInput).to.exist;
    expect(lionInput.value).to.equal('');
  });

  it('lion-input-amount', async () => { 
    const lionInputAmt = el.shadowRoot.querySelector('lion-input-amount');
    expect(lionInputAmt).to.exist;
  });

  it('lion-input-range', async () => { 
    const lionInputRange = el.shadowRoot.querySelector('lion-input-range');
    expect(lionInputRange).to.exist;
  });

  it('lion-button', async () => { 
    const lionBtn = el.shadowRoot.querySelectorAll('lion-button');

    lionBtn.forEach((b) => {
      expect(b).to.exist;
    });
    
  });

  it('lion input amount keyup event', async () => {
    const lionInputAmt = el.shadowRoot.querySelector('lion-input-amount');
    const functionSpy = sinon.spy(el, '_numToWord');

    new Promise(() => {
      lionInputAmt.dispatchEvent(new CustomEvent('keyup'), { bubbles: true, composed: true });
    }).then(() => {
      el.updateComplete;
    }).then(() => {
      expect(functionSpy.callCount).to.equal(1);
    });
  });
  
  it('dispatch submit event', async () => {

    el.shadowRoot.querySelector('.type').value = 'Home Loan';

    const functionSpy = sinon.spy(el, '_captureDetails');
    const form = el.shadowRoot.querySelector('form');

    new Promise(() => {
      form.dispatchEvent(new CustomEvent('submit'), { bubbles: true, composed: true });
    }).then(() => {
      form.updateComplete;
    }).then(() => {
      expect(functionSpy.callCount).to.equal(1);
    });

  });

  it('button click to dashboard event', async () => {
    const functionSpy = sinon.spy(el, '_toDashboard');
    const lionBtn = el.shadowRoot.querySelectorAll('lion-button')[0];

    new Promise(() => {
      lionBtn.click();
    }).then(() => {
      el.updateComplete;
    }).then(() => {
      expect(functionSpy.callCount).to.equal(1);
    });
  });

});
