const {randomND} = require("../dist/clean");

test('invalid randomND(mean, sd)', () => {

  expect(()=>randomND()).toThrow('Number.randomND parameter 1 must be a number');
  expect(()=>randomND(true)).toThrow('Number.randomND parameter 1 must be a number');
  expect(()=>randomND(false)).toThrow('Number.randomND parameter 1 must be a number');
  expect(()=>randomND(undefined)).toThrow('Number.randomND parameter 1 must be a number');
  expect(()=>randomND(null)).toThrow('Number.randomND parameter 1 must be a number');
  expect(()=>randomND({})).toThrow('Number.randomND parameter 1 must be a number');
  expect(()=>randomND([])).toThrow('Number.randomND parameter 1 must be a number');
  expect(()=>randomND('')).toThrow('Number.randomND parameter 1 must be a number');
  expect(()=>randomND('abc')).toThrow('Number.randomND parameter 1 must be a number');

  expect(()=>randomND(0)).toThrow('Number.randomND parameter 2 must be a positive number');
  expect(()=>randomND(2.5)).toThrow('Number.randomND parameter 2 must be a positive number');
  expect(()=>randomND(-2.5)).toThrow('Number.randomND parameter 2 must be a positive number');
  expect(()=>randomND(0,true)).toThrow('Number.randomND parameter 2 must be a positive number');
  expect(()=>randomND(0,false)).toThrow('Number.randomND parameter 2 must be a positive number');
  expect(()=>randomND(0,undefined)).toThrow('Number.randomND parameter 2 must be a positive number');
  expect(()=>randomND(0,null)).toThrow('Number.randomND parameter 2 must be a positive number');
  expect(()=>randomND(0,{})).toThrow('Number.randomND parameter 2 must be a positive number');
  expect(()=>randomND(0,[])).toThrow('Number.randomND parameter 2 must be a positive number');
  expect(()=>randomND(0,'')).toThrow('Number.randomND parameter 2 must be a positive number');
  expect(()=>randomND(0,'abc')).toThrow('Number.randomND parameter 2 must be a positive number');
  expect(()=>randomND(0,-2.5)).toThrow('Number.randomND parameter 2 must be a positive number');  
  
});


function theTest(mean, sd, sample){

  const result = {
    '-3.5': 0,
    '-3.0': 0,
    '-2.5': 0,
    '-2.0': 0,
    '-1.5': 0,
    '-1.0': 0,
    '-0.5': 0,
    '0.0': 0,
    '0.5': 0,
    '1.0': 0,
    '1.5': 0,
    '2.0': 0,
    '2.5': 0,
    '3.0': 0,
    '3.5': 0,
  };

  for (let i=0; i<sample; i++){
    let value = randomND(mean, sd);

    Object.keys(result).forEach(key => {
      if (value >= mean + sd * key)
        result[key]++;      
    })      
  }

  expect(Math.abs(result['-3.5'] - (sample * .99977))).toBeLessThan(sample * .02)
  expect(Math.abs(result['-3.0'] - (sample * .99865))).toBeLessThan(sample * .02)
  expect(Math.abs(result['-2.5'] - (sample * .99379))).toBeLessThan(sample * .02)
  expect(Math.abs(result['-2.0'] - (sample * .97725))).toBeLessThan(sample * .02)
  expect(Math.abs(result['-1.5'] - (sample * .93319))).toBeLessThan(sample * .02)
  expect(Math.abs(result['-1.0'] - (sample * .84134))).toBeLessThan(sample * .02)
  expect(Math.abs(result['-0.5'] - (sample * .69146))).toBeLessThan(sample * .02)
  expect(Math.abs(result['0.0'] - (sample * .50000))).toBeLessThan(sample * .02)
  expect(Math.abs(result['0.5'] - (sample * .30854))).toBeLessThan(sample * .02)
  expect(Math.abs(result['1.0'] - (sample * .15866))).toBeLessThan(sample * .02)
  expect(Math.abs(result['1.5'] - (sample * .06681))).toBeLessThan(sample * .02)
  expect(Math.abs(result['2.0'] - (sample * .02275))).toBeLessThan(sample * .02)
  expect(Math.abs(result['2.5'] - (sample * .00621))).toBeLessThan(sample * .02)
  expect(Math.abs(result['3.0'] - (sample * .00135))).toBeLessThan(sample * .02)
  expect(Math.abs(result['3.5'] - (sample * .00023))).toBeLessThan(sample * .02)
  
}


test('randomND(20,5), 50000 times', () => {
  theTest(20, 5, 50000);
});

test('randomND(0,10), 50000 times', () => {
  theTest(0, 10, 50000);  
});

test('randomND(-20,5), 50000 times', () => {
  theTest(-20, 5, 50000);  
});
