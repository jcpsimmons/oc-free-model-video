# OC-Free-Model-Video

This repository contains a static website demonstrating how to use OpenRouter's free router `openrouter/openrouter/free` in OpenCode for small coding tasks and experiments.

## Project Overview

Use OpenRouter's free router in OpenCode for small coding tasks and experiments.

## Quick Start

1. **Install OpenCode** (macOS):
   ```bash
   brew install anomalyco/tap/opencode
   ```

2. **Connect your OpenRouter key**:
   ```bash
   opencode
   ```
   Type `/connect`, choose **OpenRouter**, and paste your API key.

3. **Set the free router as default**:
   Search and select `openrouter/openrouter/free` in the model picker.

4. **Test it**:
   ```bash
   opencode models openrouter
   opencode run -m openrouter/openrouter/free "Reply with: setup works"
   ```

5. **Use it in a project**:
   ```bash
   opencode -m openrouter/openrouter/free
   ```

## Project Files

- `astro.config.mjs`: Astro configuration
- `package.json`: Project dependencies
- `src/pages/index.astro`: The main tutorial page (source)
- `dist/`: Built static site (generated)

## Usage

To explore the tutorial:

1. Run `npm run dev` to start the development server
2. Visit `http://localhost:4321` in your browser
3. Navigate through the OpenRouter setup steps

The built static site is available in the `dist/` directory and can be deployed to GitHub Pages or any static hosting service.

## Features

- Responsive design optimized for both desktop and mobile
- Clean, dark-themed interface
- Step-by-step tutorial guide
- Error handling guidance
- Model switching instructions
