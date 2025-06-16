const fs = require('fs');
const path = require('path');

// Carrega e executa script.js no escopo global
const scriptContent = fs.readFileSync(path.resolve(__dirname, 'script.js'), 'utf8');
eval(scriptContent); // agora as funções estão acessíveis nos testes

beforeEach(() => {
  document.body.innerHTML = '<p id="res"></p>';
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