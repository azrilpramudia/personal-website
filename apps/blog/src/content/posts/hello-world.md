---
title: "Sample Post: Checking Connectivity with ping and traceroute"
description: "A placeholder article used to check the blog layout. Replace it with real writing."
pubDate: 2026-11-24
category: "Networking"
tags: ["networking", "troubleshooting"]
draft: true
---

This is a placeholder article for checking the layout. Delete it or replace it with a real article before publishing.

## Why check connectivity first

When something is unreachable, the first question is where the path breaks. Basic tools answer that quickly.

## Testing reachability

```bash
ping -c 4 1.1.1.1
traceroute 1.1.1.1
```

Use `ping` to confirm the host responds, then `traceroute` to see which hop stops responding.

### Reading the output

Look at packet loss and round-trip time first. A hop that times out is not always a fault, because some routers do not answer probes.

## Summary

Start simple, narrow the problem down hop by hop, and write down what you observe.
