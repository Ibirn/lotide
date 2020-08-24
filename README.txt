# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ibirn/lotide`

**Require it:**

`const _ = require('@ibirn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns first element of an array.
* `tail(array)`: returns everything but the first element in a shallow copy.
* `middle(array)`: returns either one or two elements in the middle of an array in a new array.
* `assertArraysEqual(array1, array2)`: deeply compares two arrays and logs to console whether or not they are equal. If array element might contain an object other than another array, use assertObjectsEqual instead.
* `assertEqual(x, y)`: compares two primitve values and logs to console whether they are true.
* `assertObjectsEqual(object1, object2)`:deeply compares two objects and logs to console whether or not they are equal. Can contain any time of object.
* `countLetters(str)`: returns an object with an occurence count for each character except ' '.
* `countOnly(array), object)`: Uses true/false values attached to keys in the input object to return an occurence count for true-flagged keys in the array as an object.
* `eqArrays(array1, array2)`: Returns a boolean value on whether or not two arrays are the same. Can do nested arrays, but if an array element may contains a different type of objects, use eqObjects instead.
* `findKey(object, callback)`: Returns the key in the input object with the value of the callback function.
* `findKeyByValue(object, value)`: Returns first key in the input object matching the given value.
* `flatten(array)`: reduces nested arrays into a single level copy.
* `joinList(array)`: nicely formats single-level arrays into strings.
* `letterPositions(string)`: returns an object containing the indices of all letters in the given string.
* `map(array, callback)`: performs callback function on each element of given array.
* `takeUntil(array, callback)`: returns a new array of all elements in given array until element is equal to the return of the callback function provided.
* `without(array1, array2)`: removes elements of array2 from array1 and returns in a new array.