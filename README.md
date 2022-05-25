# keygen

### Prerequisites

- [nodejs v18](https://nodejs.org/en/download/current/)

### Run

1. `npm install` (only required to perform once to install dependencies)
1. Configure the desired private key passphrase in the `keygen.js` line 4

```js
const certPassphrase = "ALPHA BRAVO CHARLIE DELTA ECHO FOXTROT";
```

3. `npm start`

The following files should be written as output:

- public.pem
- private.pem
- passphrase
