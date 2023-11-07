# Logical Operators

| **Operator** | **Description** | **Example** |
|:------------:|:----------------:|:------------:|
| `&&`           | Logical AND.  Returns true if both operands are true, otherwise false.     | `true && true` evaluates to `true` |
| `\|\|`         | Logical OR. Returns true if at least one of the operands is true, otherwise false.      | `true \|\| false` evaluates to `true` |
| `!`            | Logical NOT. Returns the opposite of the operand. If it's true, it returns false. If it's false, it returns true.      | `!true` evaluates to `false` |

In JavaScript, there are three logical operators: `&&` (logical AND), `||` (logical OR), and `!` (logical NOT).

The && operator returns true if both operands are truthy, and false otherwise. Here's an example:
```js
const a = 10;
const b = 20;
const c = 30;

console.log(a < b && b < c); // true
console.log(a < b && b > c); // false
```

In the first console.log() statement, both `a < b` and `b < c` are `true`, so the overall expression evaluates to `true`. In the second console.log() statement, `b > c` is `false`, so the overall expression evaluates to false.

The `||` operator returns `true` if at least one of the operands is truthy, and `false` otherwise. Here's an example:

```js
const x = 5;
const y = 10;

console.log(x > 3 || y < 5); // true
console.log(x < 3 || y < 5); // false
```
In the first console.log() statement, `x > 3` is `true`, so the overall expression evaluates to `true`. In the second console.log() statement, both `x < 3` and `y < 5` are `false`, so the overall expression evaluates to `false`.

The `!` operator returns the opposite of the operand's truthiness. If the operand is truthy, `!` returns `false`. If the operand is falsy, `!` returns `true`. Here's an example:
```js
const z = 10;

console.log(!(z > 5)); // false
console.log(!(z < 5)); // true
```
In the first console.log() statement, `z > 5` is `true`, so `!(z > 5)` evaluates to `false`. In the second console.log() statement, `z < 5` is `false`, so `!(z <br 5)` evaluates to `true`.
</br>
</br>
Phew that was a lot to grasp, if you dindt understand anything, sit back, relax for a while and try to understand it again. we gotta keep our foundations strong.