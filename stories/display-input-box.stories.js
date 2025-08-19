import '../file';

export default {
  title: 'Custom/DisplayInputBox',
  tags: ['autodocs'],
};

// Default state
export const Default = () => '<display-input-box></display-input-box>';

// With pre-filled text
export const WithText = () => `
  <display-input-box></display-input-box>
  <script>
    const inputBox = document.querySelector('display-input-box').shadowRoot.querySelector('input');
    inputBox.value = "Hello Storybook!";
    inputBox.dispatchEvent(new Event('input'));
  </script>
`;

// Disabled button (simulate by not entering text)
export const Disabled = () => '<display-input-box></display-input-box>';

// Customize further: You can copy-paste the Default story and tweak attributes, inner content, or simulate different user interactions.
