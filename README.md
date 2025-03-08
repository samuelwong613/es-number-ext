# es-number-ext
Native number extensions for `javascript` and `typescript`.<br/>
> [!IMPORTANT]
> This library extend the native objects `Number.prototype`.  This may lead to collision with other libraries or the latest version of ECMAScript.
<br/>
<br/>

# Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Functions](#Functions)
4. [Advanced Usage](#Advanced-Usage)
5. [Test](#Test)
6. [License](#License)
<br/>

# Installation
Under your project folder, run the follow command in the terminal.
```
npm i --save es-number-ext
```
<br/>

# Usage
### Prototype Version
```ts
// For Number prototype
import from "es-number-ext"

const number = Number.random(5,10);
```

### Clean Version - (*Non prototype pollution*) 
```ts
// For non-pollution
import { random, ... } from "es-number-ext/clean"

const number = random(5,10);
```
<br/>

# Functions

<details>
<summary> Number.random() </summary>
<br/>

> Generates a random integer within a specified range.

##### $${\color{gray}Parameters}$$
| Param  | Type | Desc|
| - | - | - |
| size  | number  | The size of the range. |

##### $${\color{gray}Return}$$
| Type | Desc|
| - | - |
| number  | A random integer in the range from 0. |

#### $${\color{gray}Example}$$
```ts
Number.random(3)   // might return 2 (0 ~ 2)
Number.random(-3)  // might return -2 (-3 ~ -1)
```

-----

##### ${\color{gray}Parameters}$
| Param  | Type | Desc|
| - | - | - |
| min  | number  | The lower bound of the range. |
| max  | number  | The upper bound of the range. |

##### ${\color{gray}Return}$
| Type | Desc|
| - | - |
| number  | A random integer in the range from min to max - 1. |

#### ${\color{gray}Example}$
```ts
Number.random(1, 5)    // might return 4 (1 ~ 4) 
Number.random(-5, -1)  // might return -2 (-5 ~ -2)
```

-----
</details>

<details>
<summary> Number.randomND()</summary>  
<br/>

> Generates a random number based on mean and sd (normal distribution).

##### ${\color{gray}Parameters}$
| Param  | Type | Desc|
| - | - | - |
| mean  | number  | Mean for normal distribution. |
| sd  | number  | Standard deviation for normal distribution. |

##### ${\color{gray}Return}$
| Type | Desc|
| - | - |
| number  | A random number base on normal distribution |

#### ${\color{gray}Example}$
```ts
Number.randomND(3, 1)     // might return 3.5 
Number.randomND(3.2, 0)   // might return 3.2
```
-----
</details>
<br/>

# Advanced Usage

### Clean Import - (*Non prototype pollution*) 
```ts
// For non-pollution
import { random, ... } from "es-number-ext/clean"

const number = random(5,10);
```

### Specifc Function - (*To avoid collision with other libraries*)
```ts
import "es-number-ext/random"
import "es-number-ext/randomND"

const number = Number.random(5,10);
const numberND = Number.randomND(3,2);
```

<br/>

# Test
> Pending
<br/>

# License
- MIT License
<br/>
