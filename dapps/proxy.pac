function FindProxyForURL(url, host) {
	// our local URLs from the domains below example.com don't need a proxy:
	if (shExpMatch(host, "*.parity"))
	{
		return "PROXY localhost:8888; DIRECT";
	}

  return "DIRECT";
}