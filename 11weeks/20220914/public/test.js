import { createPicker } from 'picmo';

const rootElement = document.querySelector('#picker');
const picker = createPicker({
  rootElement,
});
$(document).ready(() => {
  console.log(createPicker);
  picker.addEventListener('emoji:select', event => {
    console.log('Emoji selected:', event.emoji);
  });
})
