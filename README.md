# es-number-ext
Native number extensions for `javascript` and `typescript`.
<br/>
<br/>

# Installation
Under your `js` or `ts` project, run the follow command in the terminal.
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
<summary> <code style="color : skyblue"> Number.random() </code></summary>

- <code style="color : skyblue">Generates a random integer within a specified range.</code>

### <code style="color : gray"> Parameters </code>
| Param  | Type | Desc|
| - | - | - |
| size  | number  | The size of the range. |

### <code style="color : gray"> Return </code>
| Type | Desc|
| - | - |
| number  | A random integer in the range from 0. |

### <code style="color : gray"> Example </code>
```ts
Number.random(3)   // might return 2 (0 ~ 2)
Number.random(-3)  // might return -2 (-3 ~ -1)
```

-----

### <code style="color : gray"> Parameters </code>
| Param  | Type | Desc|
| - | - | - |
| min  | number  | The lower bound of the range. |
| max  | number  | The upper bound of the range. |

### <code style="color : gray"> Return </code>
| Type | Desc|
| - | - |
| number  | A random integer in the range from min to max - 1. |

### <code style="color : gray"> Example </code>
```ts
Number.random(1, 5)    // might return 4 (1 ~ 4) 
Number.random(-5, -1)  // might return -2 (-5 ~ -2)
```
</details>

-----

<details>
<summary> <code style="color : skyblue"> Number.randomND() </code></summary>

- <code style="color : skyblue">Generates a random number based on mean and sd (normal distribution).</code>

### <code style="color : gray"> Parameters </code>
| Param  | Type | Desc|
| - | - | - |
| mean  | number  | Mean for normal distribution. |
| sd  | number  | Standard deviation for normal distribution. |

### <code style="color : gray"> Return </code>
| Type | Desc|
| - | - |
| number  | A random number base on normal distribution |

### <code style="color : gray"> Example </code>
```ts
Number.randomND(3, 1)     // might return 3.5 
Number.randomND(3.2, 0)   // might return 3.2
```

</details>