function FindProxyForURL(url, host) {
	// our local URLs from the domains below example.com don't need a proxy:
	if (shExpMatch(host, "*.parity"))
	{
		return "PROXY localhost:8888; DIRECT";
	}

  if (shExpMatch(host, "*.ipfs"))
  {
		return "PROXY localhost:8888";
  }

  return "DIRECT";
}
