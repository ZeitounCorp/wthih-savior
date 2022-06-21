# Wthih-Savior

**The solution for handling errors with ease**

- Lightweight: No (extra) dependencies making it easy to maintain.
- Easy to use: Simply call `wthih` function inside one of your try/catch blocks.
- Work both on the server and the browser without any configuration on your side.

## tl;dr

- Install by executing `npm install wthih-savior` or `yarn add wthih-savior`.
- Import by adding `import wthih from 'wthih-savior'`.

## Usage

```javascript
import wthih from 'wthih-savior';

try {
  // code that may raise an error
} catch (error) {
  // handle error on one site
  wthih('stackoverflow', error.message);
  // handle error on multiple sites
  wthih(['stackoverflow', 'dev.to', 'medium'], error.message);
}
```

## Demo

A minimal usage demo can be found in `sample` directory.

## Before you continue

This library is under constant development. This documentation is written for wthih-savior V1.x (main branch).

## Getting started

### Compatibility

All browsers/clients are supported.
Support all version of Node.js starting from v12.

### Installation

Add Wthih-Savior to your project by executing `npm install wthih-savior` or `yarn add wthih-savior`.

## License

The ISC License.

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/ZeitounCorp.png?s=100" width="100">
    </td>
    <td>
      Lenny Zeitoun (@ZeitounCorp)<br />
      <a href="mailto:lenny@zeitouncorporate.com">lenny@zeitouncorporate.com</a><br />
      <a href="https://zeitouncorporate.com">https://zeitouncorporate.com</a>
    </td>
  </tr>
</table>

## Thank you

```

```
