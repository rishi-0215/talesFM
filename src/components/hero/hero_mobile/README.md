# Mobile Hero Section

This folder contains the mobile-specific hero section components for the TalesFM landing page.

## Overview

The mobile hero section is designed specifically for screens below 810px width, providing an optimized experience for mobile devices.

## Files

- `HeroMobile.jsx` - Main mobile hero component with viewport detection
- `HeroMobileContent.jsx` - Mobile-optimized content layout and styling
- `README.md` - This documentation file

## Features

- **Responsive Design**: Optimized for mobile screens (< 810px)
- **Static Layout**: No animations - clean, static design
- **Touch-Friendly**: Larger touch targets and mobile-optimized layout
- **Performance**: No animations for optimal mobile performance
- **Accessibility**: Mobile-accessible design patterns

## Usage

The mobile hero section automatically activates when the viewport width is below 810px. It provides:

1. **Mobile-optimized typography** with appropriate font sizes
2. **Simplified layout** with stacked download buttons
3. **Reduced decorative elements** for better mobile performance
4. **Touch-friendly interactions** with larger click areas
5. **Optimized animations** that work well on mobile devices

## Viewport Detection

The component uses a custom hook `useIsHeroMobileViewport()` to detect when the screen width is below 810px and automatically renders the mobile version.

## Design Differences

Compared to desktop/tablet versions:
- No scroll animations
- Static phone display
- No decorative elements
- Clean, minimal design for better mobile UX 