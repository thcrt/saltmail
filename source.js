const saltLength = 6;
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

var salt = '';
while (salt.length < saltLength) {
  salt += characters.charAt(Math.floor(Math.random() * characters.length));
}

navigator.clipboard.writeText(salt);
