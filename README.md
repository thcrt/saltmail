### saltmail
#### _Salt your email addresses for fun and profit_

---
---

## Huh?

This bookmarklet copies a 6-character random lowercase alphanumeric string to your keyboard.

## Hmm?

Salts are used [in cryptography](https://en.wikipedia.org/wiki/Salt_(cryptography)) to prevent attackers running rainbow tables on password hashes (an attack where hashes of common passwords are pre-computed and compared against a breached hash). 

I apply some poetic license to this term to better describe what I'm doing here: this 6-character random string is intended to be appended to email addresses to reduce an attacker's capacity to guess your email address.

## Why?

It's a reasonably common practice to use a different email address for each service requiring it. This can aid in mail sorting and filtering, as well as letting you see where spammers or phishers find your address.

For instance, users of a large email service may employ 'plus addressing' to turn `bbaggins@took.net` into `bbaggins+gandalf@took.net` for a fireworks supplier, `bbaggins+smaug@took.net` for their budgeting software, and so forth. If you have your own domain, you may dedicate the entire 'user' portion of the address to this purpose, which I'd imagine is rather common among those with a personal website and domain name, and is also my approach. 

The problem with this approach is that it makes the email address in use for a service extremely predictable: I can take an educated guess that, if you use `gwaihir@bombadil.org` for a ridesharing app, you likely use `gamgee@bombadil.org` for your gardening service. Furthermore, if you don't have a catch-all inbox configured, to which all mail is routed unless otherwise specified, I may be able to determine whether you use various popular services by sending an email to a number of addresses on your domain and seeing which don't return a delivery error.

## So what?

So, provided you want to maintain one address per service, you're faced with a dilemma. Random addresses necessitate maintaining a separate system to store associations between addresses and services (which you should already have in the form of a password manager, but that's beside the point). 

Smarter is to add a degree of randomness. That's where this bookmarklet comes in. Add it to your bookmarks bar, and whenever you click it, you'll get a suffix ready and waiting in your clipboard to include in the address however you please.

## How?

Just make a bookmark to the following address (make sure to copy and paste it exactly):

```js
javascript:void%20function(){const%20a=%22abcdefghijklmnopqrstuvwxyz0123456789%22;for(var%20b=%22%22;b.length%3C6;)b+=a.charAt(Math.floor(Math.random()*a.length));navigator.clipboard.writeText(b)}();
```

Add it to your bookmarks bar and simply click it to copy a salt to your clipboard!

In case you're curious, this minified bookmarklet is generated from the source below using the excellent [Bookmarkleter](https://chriszarate.github.io/bookmarkleter/) with URL encoding, IIFE and variable mangling enabled.

---
---

_made with <3 by [theo](https://theocourt.com)_
