const app = require('./../app');


const dog = jest.fn().mockReturnValueOnce('bark')

it('should bark', function(){
  expect(dog()).toBe('bark')
})

it('should add', function(){
  expect(app.add(1, 2)).toBe(3);
});
