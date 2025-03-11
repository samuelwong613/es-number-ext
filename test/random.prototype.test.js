require("../dist/random");

test('invalid Number.random(size)', () => {

  expect(()=>Number.random()).toThrow('Number.random parameter 1 must be an integer');
  expect(()=>Number.random(true)).toThrow('Number.random parameter 1 must be an integer');
  expect(()=>Number.random(false)).toThrow('Number.random parameter 1 must be an integer');
  expect(()=>Number.random(undefined)).toThrow('Number.random parameter 1 must be an integer');
  expect(()=>Number.random(null)).toThrow('Number.random parameter 1 must be an integer');
  expect(()=>Number.random({})).toThrow('Number.random parameter 1 must be an integer');
  expect(()=>Number.random([])).toThrow('Number.random parameter 1 must be an integer');
  expect(()=>Number.random('')).toThrow('Number.random parameter 1 must be an integer');
  expect(()=>Number.random('abc')).toThrow('Number.random parameter 1 must be an integer');
  expect(()=>Number.random(2.5)).toThrow('Number.random parameter 1 must be an integer');
  expect(()=>Number.random(-2.5)).toThrow('Number.random parameter 1 must be an integer');
  
});

test('invalid Number.random(min, max)', () => {

  expect(()=>Number.random(0,true)).toThrow('Number.random parameter 2 must be an integer');
  expect(()=>Number.random(0,false)).toThrow('Number.random parameter 2 must be an integer');
  expect(()=>Number.random(0,undefined)).toThrow('Number.random parameter 2 must be an integer');
  expect(()=>Number.random(0,null)).toThrow('Number.random parameter 2 must be an integer');
  expect(()=>Number.random(0,{})).toThrow('Number.random parameter 2 must be an integer');
  expect(()=>Number.random(0,[])).toThrow('Number.random parameter 2 must be an integer');
  expect(()=>Number.random(0,'')).toThrow('Number.random parameter 2 must be an integer');
  expect(()=>Number.random(0,'abc')).toThrow('Number.random parameter 2 must be an integer');
  expect(()=>Number.random(0,2.5)).toThrow('Number.random parameter 2 must be an integer');
  expect(()=>Number.random(0,-2.5)).toThrow('Number.random parameter 2 must be an integer');
  
  expect(()=>Number.random(10,5)).toThrow('Number.random parameter 1 must be smaller than parameter 2');
  expect(()=>Number.random(-5,-10)).toThrow('Number.random parameter 1 must be smaller than parameter 2');
  expect(()=>Number.random(2,-2)).toThrow('Number.random parameter 1 must be smaller than parameter 2');
  
});

test('Number.random(20), 10000 times', () => {

  const result = {};

  for (let i=0; i<10000; i++){
    let value = Number.random(20);
    if (result[value])
      result[value]++;
    else{
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(20);
      result[value] = 1;
    }
  }

  Object.values(result).forEach(times => {
    expect(times).toBeLessThan(750);
    expect(times).toBeGreaterThan(250);
  })
  
});

test('Number.random(100), 10000 times', () => {

  const result = {};

  for (let i=0; i<10000; i++){
    let value = Number.random(100);
    if (result[value])
      result[value]++;
    else{
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(100);
      result[value] = 1;
    }
  }

  Object.values(result).forEach(times => {
    expect(times).toBeLessThan(150);
    expect(times).toBeGreaterThan(50);
  })
  
});

test('Number.random(-20), 10000 times', () => {

  const result = {};

  for (let i=0; i<10000; i++){
    let value = Number.random(-20);
    if (result[value])
      result[value]++;
    else{
      expect(value).toBeGreaterThanOrEqual(-20);
      expect(value).toBeLessThan(0);
      result[value] = 1;
    }
  }

  Object.values(result).forEach(times => {
    expect(times).toBeLessThan(750);
    expect(times).toBeGreaterThan(250);
  })
  
});

test('Number.random(-100), 10000 times', () => {

  const result = {};

  for (let i=0; i<10000; i++){
    let value = Number.random(-100);
    if (result[value])
      result[value]++;
    else{
      expect(value).toBeGreaterThanOrEqual(-100);
      expect(value).toBeLessThan(0);
      result[value] = 1;
    }
  }

  Object.values(result).forEach(times => {
    expect(times).toBeLessThan(150);
    expect(times).toBeGreaterThan(50);
  })
  
});

test('Number.random(10,20), 10000 times', () => {

  const result = {};

  for (let i=0; i<10000; i++){
    let value = Number.random(10,20);
    if (result[value])
      result[value]++;
    else{
      expect(value).toBeGreaterThanOrEqual(10);
      expect(value).toBeLessThan(20);
      result[value] = 1;
    }
  }

  Object.values(result).forEach(times => {
    expect(times).toBeLessThan(1500);
    expect(times).toBeGreaterThan(500);
  })
  
});

test('Number.random(-20,20), 10000 times', () => {

  const result = {};

  for (let i=0; i<10000; i++){
    let value = Number.random(-20,20);
    if (result[value])
      result[value]++;
    else{
      expect(value).toBeGreaterThanOrEqual(-20);
      expect(value).toBeLessThan(20);
      result[value] = 1;
    }
  }

  Object.values(result).forEach(times => {
    expect(times).toBeLessThan(375);
    expect(times).toBeGreaterThan(125);
  })
  
});

test('Number.random(-20,-10), 10000 times', () => {

  const result = {};

  for (let i=0; i<10000; i++){
    let value = Number.random(-20,-10);
    if (result[value])
      result[value]++;
    else{
      expect(value).toBeGreaterThanOrEqual(-20);
      expect(value).toBeLessThan(-10);
      result[value] = 1;
    }
  }

  Object.values(result).forEach(times => {
    expect(times).toBeLessThan(1500);
    expect(times).toBeGreaterThan(500);
  })
  
});