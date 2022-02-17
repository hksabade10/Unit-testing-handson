import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block

  let el;

  beforeEach(async () => {
    el = await fixture(html`<loan-header>}></loan-header>`);
  });

  it('loan header', async () => {
    expect(el).to.exist;
  });

  it('div', async () => {
    const div = el.shadowRoot.querySelectorAll('div');
    
    div.forEach((d) => {
      expect(d).to.exist;
    });
  });

  it('header', async () => { 
    const header = el.shadowRoot.querySelectorAll('header');
    expect(header).to.exist;
  });

  it('p', async () => { 
    const p = el.shadowRoot.querySelectorAll('p');
    expect(p).to.exist;
  });

  it('button', async () => {
    const btn = el.shadowRoot.querySelectorAll('button');

    btn.forEach((b) => {
      expect(b).to.exist;
    });
  });

  it('button click events', async () => {
    const btn = el.shadowRoot.querySelectorAll('button');

    const functionSpy = sinon.spy(el, 'localeChanged');

    new Promise(() => {
      btn[1].click();
    }).then(() => {
      el.updateComplete;
    }).then(() => {
      expect(functionSpy.callCount).to.equal(1);
    });

    new Promise(() => {
      btn[0].click();
    }).then(() => {
      el.updateComplete;
    }).then(() => {
      expect(functionSpy.callCount).to.equal(2);
    });

  });

});
