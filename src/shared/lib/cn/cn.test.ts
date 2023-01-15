import { cn } from './cn';

describe('util cn', () => {
  test('with 1 param', () => {
    expect(cn('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const additionalClasses = ['class1', 'class2'];
    const expected = 'someClass class1 class2';

    expect(cn('someClass', {}, additionalClasses)).toBe(expected);
  });

  test('with mods', () => {
    const additionalClasses = ['class1', 'class2'];
    const mods = { hovered: true, scrollable: true };
    const expected = 'someClass class1 class2 hovered scrollable';

    expect(cn('someClass', mods, additionalClasses)).toBe(expected);
  });

  test('with mod false', () => {
    const additionalClasses = ['class1', 'class2'];
    const mods = { hovered: true, scrollable: false };
    const expected = 'someClass class1 class2 hovered';

    expect(cn('someClass', mods, additionalClasses)).toBe(expected);
  });
});
