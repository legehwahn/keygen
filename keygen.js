import crypto from 'crypto';
import fs from 'fs';

const certPassphrase = 'ALPHA BRAVO CHARLIE DELTA ECHO FOXTROT';

const keyPair = await new Promise((resolve, reject) => {

	crypto.generateKeyPair('rsa', {
		modulusLength: 4096,
		publicKeyEncoding: {
			type: 'spki',
			format: 'pem'
		},
		privateKeyEncoding: {
			type: 'pkcs8',
			format: 'pem',
			cipher: 'aes-256-cbc',
			passphrase: certPassphrase
		}
	}, (error, publicKey, privateKey) => {

		if (error) {
			reject(error);
		}

		resolve({
			publicKey,
			privateKey
		});
	});
});

// Creating key files
await fs.promises.writeFile('public.pem', keyPair.publicKey);
await fs.promises.writeFile('private.pem', keyPair.privateKey);
await fs.promises.writeFile('passphrase', certPassphrase);

console.log('Keypair generated');