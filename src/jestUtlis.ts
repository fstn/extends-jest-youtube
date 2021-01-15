function eltContains(elt, text) {
  const content = elt.textContent;
  if (content.indexOf(text) === -1) {
    return {
      message: () => `expected ${content} to contains ${text} in elt`,
      pass: false
    };
  } else {
    return {
      message: () => `expected ${content} to contains ${text} in elt`,
      pass: true
    };
  }
}

const jestExpect = global.expect;
jestExpect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false
      };
    }
  },
  h1Contains(received, text) {
    return eltContains(received.container.querySelector("h1"), text);
  },
  h2Contains(received, text) {
    return eltContains(received.container.querySelector("h2"), text);
  }
});
