# Hero Component Structure

The hero component has been refactored into a modular structure for better maintainability and organization.

## Components

### 1. `hero.tsx` (Main Component)
- **Purpose**: Main entry point that orchestrates the hero section
- **Responsibilities**: 
  - Manages the `showDownload` state
  - Connects animations with content
  - Simple and clean interface

### 2. `HeroAnimations.tsx` (Animation Logic)
- **Purpose**: Handles all GSAP animations and scroll triggers
- **Responsibilities**:
  - Phone rotation and movement animations
  - Text fade animations
  - Download section animations
  - Side elements animations
  - Responsive animation values
  - Tablet detection logic

### 3. `HeroContent.tsx` (Content Structure)
- **Purpose**: Renders all the visual content and layout
- **Responsibilities**:
  - Main title and subtitle
  - Phone image container
  - Download buttons
  - Decorative side elements
  - Responsive styling
  - All visual elements

### 4. `HeroStyles.tsx` (Style Utilities)
- **Purpose**: Centralized responsive styles management
- **Responsibilities**:
  - Tablet-specific styles
  - Responsive design values
  - Style organization and reusability

## Benefits of This Structure

1. **Separation of Concerns**: Animations, content, and styles are separated
2. **Maintainability**: Each file has a single responsibility
3. **Reusability**: Styles and animations can be reused
4. **Readability**: Code is easier to understand and modify
5. **Testing**: Each component can be tested independently

## Usage

```tsx
import Hero from './components/hero/hero';

// In your page component
<Hero />
```

## File Structure

```
hero/
├── hero.tsx           # Main component
├── HeroAnimations.jsx # Animation logic (hook)
├── HeroContent.jsx    # Content rendering
├── HeroStyles.jsx     # Style utilities
└── README.md         # This documentation
```

## Animation Features

- **Phone Animation**: Rotates from portrait to landscape and back
- **Text Fade**: Titles fade out as user scrolls
- **Download Section**: Appears and moves with scroll
- **Side Elements**: Animate in from the sides
- **Responsive**: Different animations for tablet and desktop

## Responsive Design

- **Desktop**: Full animations and larger elements
- **Tablet**: Optimized animations and smaller elements
- **Mobile**: Simplified animations (handled by tablet mode) 