# NameCheap BasicDNS Deployment Guide

## Current Setup
- Domain: sampadavr.com
- DNS Provider: NameCheap BasicDNS
- Hosting: GitHub Pages (via Astro build)

## Step 1: NameCheap DNS Configuration

### In NameCheap Dashboard:
1. Go to: Domain List → sampadavr.com → Manage
2. Click: "Name Servers" tab
3. Select: "NameCheap BasicDNS"
4. Click: "Save"

### In Advanced DNS:
1. Go to: "Advanced DNS" tab
2. Remove ALL existing A records
3. Add these GitHub Pages A records:

```
Type: A Record
Host: @
Value: 185.199.108.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.109.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.110.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.111.153
TTL: Automatic
```

## Step 2: GitHub Pages Configuration

### In GitHub Repository:
1. Go to: https://github.com/pavin-as/my-astro-site/settings/pages
2. Under "Custom domain": Enter `sampadavr.com`
3. Check: "Enforce HTTPS"
4. Click: "Save"

## Step 3: Deploy Your Site

### Build and Deploy:
```bash
npm run build
git add .
git commit -m "Deploy to sampadavr.com"
git push origin main
```

## Step 4: Wait for Propagation
- DNS changes take 24-48 hours
- Check progress at: https://www.whatsmydns.net/

## Future: Switch to GitHub Name Servers

Once everything is working, you can switch to GitHub's name servers:

### In NameCheap:
1. Go to: "Name Servers" tab
2. Select: "Custom DNS"
3. Add these name servers:
   ```
   ns1.github.com
   ns2.github.com
   ns3.github.com
   ns4.github.com
   ```

### Benefits of GitHub Name Servers:
- Faster DNS resolution
- Better integration with GitHub Pages
- Automatic SSL certificate management
- Improved performance 