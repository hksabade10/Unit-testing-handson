import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this block

  let el;

  beforeEach(async () => {
    el = await fixture(html`<customer-details></customer-details>`);

    new Promise(() => {
      el.shadowRoot.querySelector('#first_name').value = 'hello';
      el.shadowRoot.querySelector('#last_name').value = 'world';
      el.shadowRoot.querySelector('#email').value = 'helloworld@gmail.com';
      el.shadowRoot.querySelector('#mobile_number').value = '9876543210';
      el.shadowRoot.querySelector('#monthly_salary').value = '564,645.00';
      el.shadowRoot.querySelector('#EMIs_amount').value = '42,345.00';
      el.shadowRoot.querySelector('#terms').value = true;
    }).then(() => {
      el.updateComplete;
      // el.requestUpdate();
    });
  });

  it('customer details', async () => {
    expect(el).to.exist;
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

    new Promise(() => {
      lionForm.dispatchEvent(new CustomEvent('submit'), { bubbles: true, composed: true });
    }).then(() => {
      console.log(lionForm.serializedValue);
      el.updateComplete;
    }).then(() => {
      expect(lionForm).to.exist;
    });
  });

  it('form', async () => { 
    const form = el.shadowRoot.querySelector('form');
    expect(form).to.exist;
  });

  it('lion-input', async () => { 
    const lionInput = el.shadowRoot.querySelectorAll('lion-input');

    lionInput.forEach((input) => {
      expect(input).to.exist;
      // expect(input.value).to.equal('hello');
    });
    
  });

  it('lion-input-datepicker', async () => { 
    const lionInputDate = el.shadowRoot.querySelector('lion-input-datepicker');
    expect(lionInputDate).to.exist;
  });

  it('lion-input-email', async () => { 
    const lionInputEmail = el.shadowRoot.querySelector('lion-input-email');
    expect(lionInputEmail).to.exist;
  });

  it('lion-input-amount', async () => { 
    const lionInputAmt = el.shadowRoot.querySelectorAll('lion-input-amount');

    lionInputAmt.forEach((inputAmt) => {
      expect(inputAmt).to.exist;
    });
  });

  it('lion-checkbox-group', async () => { 
    const lionCheckboxGroup = el.shadowRoot.querySelector('lion-checkbox-group');
    expect(lionCheckboxGroup).to.exist;
  });

  it('lion-checkbox', async () => { 
    const lionCheckbox = el.shadowRoot.querySelector('lion-checkbox');
    expect(lionCheckbox).to.exist;
  });

  it('lion-button', async () => { 
    const lionBtn = el.shadowRoot.querySelectorAll('lion-button');

    lionBtn.forEach((b) => {
      expect(b).to.exist;
    });
  });

  it('button click to dashboard event', async () => {
    const functionSpy = sinon.spy(el, '_toEmidetails');
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
