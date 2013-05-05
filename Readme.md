# array-rand

  Return a random value from an array

## Installation
```sh
$ component install hkjels/array-rand
```

## Usage
```javascript
var array_rand = require('array-rand'),
    arr = ['do', 'not', 'disturb'];

console.log(array_rand(arr));  // Might return 'not'
console.log(array_rand(arr));  // Might return 'disturb'
console.log(array_rand(arr));  // Might return 'do'
```

## API

   array_rand(Array)
   Return a random value from the array supplied.

## License

  MIT
