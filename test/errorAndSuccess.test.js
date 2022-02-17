import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  // Write test cases inside this block

  let el;

  beforeEach( async () => {
    el = await fixture(html`<loan-success></loan-success>`);
  });

  it('loan success', async () => {
    expect(el).to.exist;
  });

  it('div', async () => {
    const div = el.shadowRoot.querySelector('div');
    expect(div).to.exist;
  });

  it('h2', async () => {
    const h2 = el.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
  });

  it('p', async () => {
    const p = el.shadowRoot.querySelector('p');
    expect(p).to.exist;
  });

  it('lion-button', async () => {
    const btn = el.shadowRoot.querySelector('lion-button');
    expect(btn).to.exist;
  });

  it('home button event', async () => {
    const btn = el.shadowRoot.querySelector('lion-button');

    const functionSpy = sinon.spy(el, '_toHome');

    new Promise(() => {
      btn.click();
    }).then(() => {
      el.updateComplete;
    }).then(() => {
      expect(functionSpy.callCount).to.equal(1);
    });
  });

});

describe('error screen', () => {
  // Write test cases inside this block
  let el;

  beforeEach( async () => {
    el = await fixture(html`<loan-error></loan-error>`);
  });

  it('loan error', async () => {
    expect(el).to.exist;
  });

  it('div', async () => {
    const div = el.shadowRoot.querySelector('div');
    expect(div).to.exist;
  });

  it('h2', async () => {
    const h2 = el.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
  });

  it('p', async () => {
    const p = el.shadowRoot.querySelector('p');
    expect(p).to.exist;
  });

  it('lion-button', async () => {
    const btn = el.shadowRoot.querySelector('lion-button');
    expect(btn).to.exist;
  });

  it('home button event', async () => {
    const btn = el.shadowRoot.querySelector('lion-button');

    const functionSpy = sinon.spy(el, '_toHome');

    new Promise(() => {
      btn.click();
    }).then(() => {
      el.updateComplete;
    }).then(() => {
      expect(functionSpy.callCount).to.equal(1);
    });
  });
});
