import { expect } from '@esm-bundle/chai';
import '../file.js';

describe('display-input-box', () => {
  let el, input, button, output;

  beforeEach(() => {
    el = document.createElement('display-input-box');
    document.body.appendChild(el);
    input = el.shadowRoot.querySelector('input');
    button = el.shadowRoot.querySelector('#submit');
    output = el.shadowRoot.querySelector('#output');
  });

  afterEach(() => {
    el.remove();
  });

  it('should render input, button, and output', () => {
    expect(input).to.exist;
    expect(button).to.exist;
    expect(output).to.exist;
  });

  it('should have button disabled initially', () => {
    expect(button.disabled).to.be.true;
  });

  it('should enable button when input is not empty', () => {
    input.value = 'hello';
    input.dispatchEvent(new Event('input'));
    expect(button.disabled).to.be.false;
  });

  it('should update output as user types', () => {
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    expect(output.textContent).to.equal('You typed: test');
  });

  it('should clear input and show alert on button click', () => {
    input.value = 'abc';
    input.dispatchEvent(new Event('input'));
    // Mock alert
    let alertCalled = false;
    window.alert = () => { alertCalled = true; };
    button.click();
    expect(input.value).to.equal('');
    expect(alertCalled).to.be.true;
  });
});

describe('my-element', () => {
  let el, para;
  beforeEach(async () => {
    el = document.createElement('my-element');
    document.body.appendChild(el);
    await el.updateComplete;
    para = el.shadowRoot.querySelector('p');
  });

  afterEach(() => {
    el.remove();
  });
  it('should render my-element with content', () => {
    expect(para).to.exist;
    expect(para.textContent).to.equal('This is a simple web component.');
  });
});