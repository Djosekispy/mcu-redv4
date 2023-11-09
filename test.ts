import { coding } from './main/calc';
import { Tests } from './testMap';

class TestRunner implements Tests {
  describe(data: string, log: () => void): void {
    console.log(data);
    log();
  }

  it(data: string, log: () => void): void {
    console.log(`- ${data}`);
    log();
  }
}

const test: Tests = new TestRunner();

test.describe('Coding function', () => {
  test.it('should return a coded string for the given value', () => {
    const value: number = 1234567890;
    const expectedCodedString: string = '$$$1010$$10$$1010$$$#&gg&&gg&#&&##&&#&gggg&#&&#$$10$$1010$$$$10$$1010$$$#&&#&gg&&gg&#&&##&&#&gg&&gg&#&&#$$$1010$$1010$$$$$$1010$$1010$$$#&&#&gg&&gg&#&&##&&#&gg&&gg&#&&#$$$1010$$1010$$$$$$1010$$1010$$$$66$6hh66hh6$66$$66$6hh66hh6$66$$$$1010$$1010$$$$$$1010$$1010$$$#&&#&gg&&gg&#&&##&&#&gg&&gg&#&&#$$$1010$$1010$$$$$$1010$$1010$$$#&&#&gg&&gg&#&&##&&#&gg&&gg&#&&#$$$1010$$1010$$$$$$1010$$1010$$$#&&#&gg&&gg&#&&##&&#&gg&&gg&#&&#$$$1010$$1010$$$$$$1010$$1010$$$#&&#&gg&&gg&#&&##&&#&gg&&gg&#&&#$$$1010$$1010$$$$$$1010$$1010$$$#&&#&gg&&gg&#&&##&&#&gg&&gg&#&&#$$$1010$$1010$$$$$$1010$$1010$$$#&&#&gg&&gg&#&&##&&#&gg&&gg&#&&#$$$1010$$1010$$';

    coding(value).then((codedString: string) => {
      console.log(`Expected: ${expectedCodedString}`);
      console.log(`Result: ${codedString}`);
      console.log(`Test Passed: ${codedString === expectedCodedString}`);
    });
  });

  test.it('should handle different values', () => {
    const values: { value: number; expectedCodedString: string }[] = [
        { value: 0, expectedCodedString: '$$$1010$$10$$1010$$$$$$$1010$$$$$$1010$$1010$$$$1010$$10' },
        { value: 1, expectedCodedString: '$$$1010$$10$$1010$$$#&gg&&gg&#&&##&&#&gggg&#&&#$$10$$1010' },
        { value: 4, expectedCodedString: '$$$1010$$10$$1010$$$$6hh66hh6$66$$66$6hhhh6$66$$$10$$1010' },

    ];

    Promise.all(values.map(({ value, expectedCodedString }) => {
      coding(value).then((codedString: string) => {
        console.log(`Value: ${value}`);
        console.log(`Expected: ${expectedCodedString}`);
        console.log(`Result: ${codedString}`);
        console.log(`Test Passed: ${codedString === expectedCodedString}`);
      });
    }));
  });
});
