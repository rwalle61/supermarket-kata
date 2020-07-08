# Supermarket Kata

Try it out at https://supermarketkata.netlify.app/

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Running the Tests](#running-the-tests)

## Overview

This is a simple ReactJS front-end that allows a user to add/remove items into a basket and have the basket total automatically updated based on item price and applicable discounts.

I have:

1. used functional programming over OO
2. used javascript
3. not needed to use any functional libraries such as `lodash-fp`
4. used bootstrap + a little bit of custom styling
5. used redux
6. written clean code
7. used TDD - see the git history. As the complexity of this task was mainly in the effects of the add/remove items buttons, I mainly used integration tests to be confident about these interactions. I unit tested key functions (e.g. pricing items) to cover edge cases. I used acceptance and integration tests to ensure that important business rules are protected when changes come later.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

[Download Node.js v8 or above](https://github.com/nodejs/node#download)

### Installing

Clone the repo

```bash
git clone git@github.com:rwalle61/supermarket-kata.git
```

Install dependencies

```bash
yarn install
```

### Run the app

```bash
yarn start
```

The app will be running at `http://localhost:3000`.

## Running the Tests

### Jest watch mode

```bash
yarn test
```

### All tests

```bash
yarn test:ci
```
