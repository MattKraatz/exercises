// Defining and object

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
};

// Increment by addition

for (var i = 5; i < 120; i += 10) {
  console.log('Current value is ' + i);
};
alert('First loop complete');

// Decrement by division

for (var i = 4096; i > 1; i /= 2) {
  console.log('Current value is ' + i);
};
alert('Second loop complete');

// Create and iterate an array

var presidents = ['George Washington','John Adams','Thomas Jefferson','James Madison','James Monroe','John Quincy Adams','Andrew Jackson','Martin Van Buren','William Henry Harrison','John Tyler']
var arrayLength = presidents.length;
for (var i = 0; i < arrayLength; i++) {
  console.log('President #' + (i+1) + ' was ' + presidents[i])
};
alert('Third loop complete');

// Looping through the antSpecies object

for (var i in antSpecies) {
  console.log(i)
};
alert('Final loop complete');