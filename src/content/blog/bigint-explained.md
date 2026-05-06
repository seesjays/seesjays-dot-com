---
layout: "../../layouts/BlogPost.astro"
title: "JavaScript BigInts Explained"
date: "2022-04-20"
subtext: "What's the Big Deal around the BigInt? What makes it better or worse compared to regular JavaScript numbers"
sector: technical
hue: 45
---

In your travels with JavaScript you’ll probably come across a time in which you need to interact with *very,* ***very*** large values, perhaps for some math or simulation. But if you go about using these values, you may find some issues with what outputs you get. Comparisons will inexplicably not work, math won't make sense, and you'll have an all-around bad time. There’s a specific (and relatively new) primitive that you’ll have to get around to using when running operations with _really_ big numbers. Here’s a primer:

## Number Safety
This has nothing to do with workplace training videos. Rather, number safety in JavaScript is more related to the fact that numbers, beyond a certain value, are going to lose their ability to “make sense” within the world.

That value of no return is **9,007,199,254,740,991.** Memorize it. (Or don’t, you can access it as a constant via `Number.MAX_SAFE_INTEGER`)

### Nonsensical Numbers

You may think that this is the “max” integer, and that if you operated on it in the wrong way by say, adding one, you’d overflow and send your precious value right back to the bottom of signed integer land, causing your computer to explode, like it does in fun languages like C#.

Neat fact: Nope! You can actually go beyond `Number.MAX_SAFE_INTEGER` quite easily:

```js
let maxsafe = Number.MAX_SAFE_INTEGER;
let beyondsafe = maxsafe + 1;

console.log(maxsafe); // 9007199254740991
console.log(beyondsafe); // 9007199254740992
```

### So if this isn’t the maximum number in JS, what is it?

It’s the last number that can be represented with actual precision before things like math and comparisons start getting wonky, the byproduct of floating-point number limitations. For an understandable (and entirely non-exhaustive) example:

```js
const beyondsafeA = Number.MAX_SAFE_INTEGER + 1;
// 9007199254740992. Makes sense!

const beyondsafeB = Number.MAX_SAFE_INTEGER + 2;
// Believe it or not, also 9007199254740992. Makes no sense!

console.log(beyondsafeA == beyondsafeB); 
// true, which is nonsensical. Welcome to the Wild West of numbers.
```

Test it all you want. The numbers just don’t add up (correctly)

## “Oh no! Whatever shall I do if I need to work with numbers beyond ~9 quadrillion?”

These are the situations the `bigint` was designed for. Introduced in ES2020 and currently sporting great support in the [browsers that matter,](https://caniuse.com/bigint) BigInts are a _new primitive type_ that are meant for representing numbers bigger than you would typically use a standard `number` for.

### BigInt Creation + Usage

```js
// Declaration is easy. Just append an 'n' to the end of any numbers you want made into bigints
const life = 42n;
const bigintMaxSafe = 9007199254740991n;

// constructor form
const bigintMaxSafeConstruct = BigInt(Number.MAX_SAFE_INTEGER);
typeof bigintMaxSafeConstruct; // 'bigint'
```  

```js
const bigintbeyondsafeA = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
// 9007199254740992. Makes sense!

const bigintbeyondsafeB = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
// 9007199254740993. Makes sense!

console.log(bigintbeyondsafeA == bigintbeyondsafeB); 
// false, which is sensical. Welcome to modern society.
```

### Important caveats

Notice that the numbers that were added to the BigInt were also BigInts. This is because _you cannot mix BigInt and numbers in math_. If you do, you’ll wind up with a `TypeError: Cannot mix BigInt and other types, use explicit conversions.`. So, remember to convert your regular numbers to BigInts.

> Or convert your BigInt to a regular number using `Number(bigintValue)`

### Increased Limitations

In the same vein, you can’t use functions from the `Math` library with BigInts.

```js
Math.max(2n, 3n);
Math.pow(2n, 2);
// Both of these result in a TypeError.
```

##### Bigints can’t have decimals and are rounded down
BigInts will only be BigInts. You can’t involve any decimals in their initial creation. Division that results in decimal values will be rounded to a lower whole number, which is also of type `bigint.`

```js
const biggy = 1.5n;
// SyntaxError: Invalid or unexpected token.

const alsobiggy = BigInt(2.5);
// RangeError: The number 2.5 cannot be converted to a BigInt because it is not an integer.

const foo = 4n / 3n; // 1n
const bar = 3n / 4n; // 0n
```

#### Comparisons between number and BigInt work just fine.

```js
const bigintValue = 1n;
const numberValueA = 1;
const numberValueB = 2;

bigintValue === numberValueA; // false, they're not (exactly) equal.

bigintValue == numberValueA; // true, they're loosely equal.

bigintValue < numberValueB; // true
```

<br/>

---

> It’s recommended to use bigint only when you genuinely expect values above 2^53 (MAX_SAFE_INTEGER), so stick to normal numbers if you’re not working around the ballpark range of 9 quadrillion.
