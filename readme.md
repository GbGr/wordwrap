# wordwrap
Minimum raggedness wordwrap algorithm
## Usage
```
import wordwrap from 'wordwrap';
const input = 'Alfred Aho likes to code';
const constraint = 10;
console.log(wordwrap(input, counstraint));

/**
* Current algorithm output:
*
* Alfred
* Aho likes
* to code
*/

/**
* Another greedy algorithm output:
*
* Alfred Aho
* likes to
* code
*/

```