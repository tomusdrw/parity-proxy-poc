# Running

Configure your system/browser proxy. Specify `proxy.pac` file:

```
http://localhost:8888/proxy.pac
```

Instructions: [Ubuntu](http://askubuntu.com/questions/37306/how-do-i-configure-apt-to-use-a-proxy-pac-file), [Mac OS](https://support.apple.com/kb/PH18553)

PAC file redirects all `*.dapp` and `*.ipfs` addresses to your local server.

## Launch proxy

```
$ npm i
$ npm start
$ open http://parity.dapp || xdg-open http://parity.dapp
```
