import  { coding } from './main/calc';

const FirstMatrix = [0, 1, 1, 0];
const SecondMatrix = [1, 2, 2, 1];
const ThirdMatrix = [2, 4, 4, 2];
const simblos = ['#', '$', '&', '@', '/', '?', '*', '«', 'º'];
const Lowerletters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z'
];
const upperletters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z'
];

class test implements tests{
  
}

describe('Coding function', () => {
  it('should return a coded string for the given value', () => {
    const value = 1234567890;
    const expectedCodedString = '##@a?';

    return coding(value).then((codedString) => {
      expect(codedString).toBe(expectedCodedString);
    });
  });

  it('should handle different values', () => {
    const values = [
      { value: 0, expectedCodedString: '##$' },
      { value: 1, expectedCodedString: '@$' },
      { value: 2, expectedCodedString: '&$' },
      { value: 3, expectedCodedString: '##a' },
      { value: 4, expectedCodedString: '@a' },
      { value: 5, expectedCodedString: '&a' },
      { value: 6, expectedCodedString: '##b' },
      { value: 7, expectedCodedString: '@b' },
      { value: 8, expectedCodedString: '&b' },
      { value: 9, expectedCodedString: '##c' },
      { value: 10, expectedCodedString: '@c' },
      { value: 11, expectedCodedString: '&c' },
    ];

    return Promise.all(values.map(({ value, expectedCodedString }) => {
      return coding(value).then((codedString) => {
        expect(codedString).toBe(expectedCodedString);
      });
    }));
  });
});
