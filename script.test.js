const fs = require('fs');
const path = require('path');

beforeEach(() => {
  document.body.innerHTML = '<p id="res"></p>';
  const scriptContent = fs.readFileSync(path.resolve(__dirname, 'script.js'), 'utf8');
  // eval in global scope to load functions
  eval(scriptContent);
});

describe('calculator functions', () => {
  test('insert appends numbers', () => {
    insert('1');
    expect(document.getElementById('res').innerHTML).toBe('1');
    insert('2');
    expect(document.getElementById('res').innerHTML).toBe('12');
  });

  test('clean clears display', () => {
    document.getElementById('res').innerHTML = '123';
    clean();
    expect(document.getElementById('res').innerHTML).toBe('');
  });

  test('back removes last character', () => {
    document.getElementById('res').innerHTML = '123';
    back();
    expect(document.getElementById('res').innerHTML).toBe('12');
  });
});
