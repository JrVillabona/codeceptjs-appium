Feature('first');

Scenario('test something', (I) => {
  I.see('UI Elements');
  I.tap('~Text Button');
  I.see('Waiting for text input.');
  I.tap('~Text Input');
  I.hideDeviceKeyboard();
});
