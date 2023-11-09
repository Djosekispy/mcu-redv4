interface Tests {
    describe(data: string, log: () => void): void;
    it(data: string, log: () => void): void;
  }
  
  export { Tests };
  