# Contributing

Thanks for your interest in contributing to `email-normalize` 😊

Please take a moment to review this document before submitting a pull request.

## Adding resets

If you're unsure whether you should add a new reset, please [open a Discussion](https://github.com/maizzle/email-normalize/discussions/new) first.

This helps us check with the community if the code works and is not deprecated.

When adding a reset:

- always add it at the bottom of the `.css` file
- update/create the correct `.css` in `/src/css` (client-specific, see below)
- make sure to add a comment explaining the functionality
- make sure you also add it to `src/index.js` in the data object
- follow our [coding standards](#coding-standards)

Don't worry if you don't get it right the first time, we'll help you get your PR working.

### Client-specific resets

CSS resets are added in `src/css` under their own client `.css` file.

If a `.css` for the email client does not exist, create it under `src/css/clients` and remember to import it in `src/css/index.css` - see the existing files for an example.

### Generic resets

These are added in `src/css/generic.css`.

## Deprecated resets

These are documented in `deprecated.md`, add yours at the end of the file.

Deprecated resets are also added to `src/index.js`, for example:

```js
{
  css: '#outlook a { padding: 0; }',
  description: 'This was used to force Outlook on Windows to provide a "View in Browser" message that the user could click to view the email in their browser',
  deprecated: 1451599200000, // January 2016
}
```

The `deprecated` key is a timestamp that approximates when the reset was deprecated.

You can generate it in JavaScript: `new Date('June 14, 2021')`

If you don't know how to run that code, simply copy it and:

- open your browser's Devtools (usually F12, or right-click -> inspect element)
- go to the "Console" tab
- paste the code and hit Enter

## Coding standards

Our code formatting rules are defined in [.stylelintrc](https://github.com/maizzle/email-normalize/blob/main/.stylelintrc.json). You can check your code against these standards by running:

```sh
npm run style
```

To automatically fix any style violations in your code, you can run:

```sh
npm run style -- --fix
```

## Running tests

You can run the test suite using the following commands:

```sh
npm test
```

Please ensure that the tests are passing when submitting a pull request.

If you're adding new features to `email-normalize`, please include tests.
