# GTEM Website - Technical Specification

---

## Component Inventory

### shadcn/ui Components (Built-in)

| Component | Purpose | Location |
|-----------|---------|----------|
| Button | CTAs, navigation actions | Hero, Contact, Navigation |
| Card | Feature cards, partner cards, achievement cards | Multiple sections |
| Badge | Labels, tags, status indicators | Hero, Methodology |
| Separator | Visual dividers | Between sections |
| Sheet | Mobile navigation drawer | Navigation |
| ScrollArea | Smooth scrolling containers | If needed |

### Third-Party Registry Components

| Component | Registry | Purpose |
|-----------|----------|---------|
| None required | - | Built-in components sufficient |

### Custom Components

| Component | Purpose | Props |
|-----------|---------|-------|
| AnimatedSection | Scroll-triggered fade-in wrapper | children, delay, className |
| CountUp | Animated number counter | end, duration, suffix |
| Timeline | Vertical timeline display | items, currentIndex |
| PhaseCard | Methodology phase card | number, title, duration, items |
| FeatureCard | Key feature display | icon, title, description |
| PartnerCard | Partner institution display | name, role, location |
| AchievementCard | Achievement category card | icon, title, items |
| BudgetBar | Budget visualization | items |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Page load hero sequence | Framer Motion | AnimatePresence + staggered motion.div | Medium |
| Scroll-triggered reveals | Framer Motion | useInView + motion.div | Low |
| Navigation scroll effect | React hooks | useScroll + conditional classes | Low |
| Button hover effects | Tailwind CSS | hover: classes + transition | Low |
| Card hover lift | Tailwind CSS | hover:translate-y + shadow | Low |
| Count-up numbers | Custom hook | useCountUp with requestAnimationFrame | Medium |
| Timeline sequential reveal | Framer Motion | staggerChildren variant | Medium |
| Phase card border hover | Tailwind CSS | hover:border-color transition | Low |
| Parallax hero background | Framer Motion | useScroll + useTransform | Medium |
| Budget bar animation | Framer Motion | animate width on inView | Low |
| Checkmark bounce | Framer Motion | scale spring animation | Low |

---

## Animation Library Choices

### Primary: Framer Motion
- **Rationale**: Best React integration, declarative API, excellent performance
- **Use for**: All scroll-triggered animations, page load sequences, complex transitions

### Secondary: Tailwind CSS Transitions
- **Rationale**: Simple hover effects don't need JS
- **Use for**: Button hovers, card lifts, link color changes

### Custom Hooks
- **useCountUp**: Number animation for stats
- **useScrollPosition**: Navigation background change

---

## Project File Structure

```
app/
├── src/
│   ├── sections/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Overview.tsx
│   │   ├── Partners.tsx
│   │   ├── Methodology.tsx
│   │   ├── KeyFeatures.tsx
│   │   ├── CaseStudy.tsx
│   │   ├── Timeline.tsx
│   │   ├── Achievements.tsx
│   │   ├── Outputs.tsx
│   │   ├── Impact.tsx
│   │   ├── Funding.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── components/
│   │   ├── AnimatedSection.tsx
│   │   ├── CountUp.tsx
│   │   ├── PhaseCard.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── PartnerCard.tsx
│   │   ├── AchievementCard.tsx
│   │   └── BudgetBar.tsx
│   ├── hooks/
│   │   ├── useCountUp.ts
│   │   └── useScrollPosition.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── images/
├── components/ui/    # shadcn components
├── tailwind.config.js
└── package.json
```

---

## Dependencies

### Core (Auto-installed)
- react
- react-dom
- typescript
- vite
- tailwindcss
- @radix-ui/* (via shadcn)

### Animation
- framer-motion

### Icons
- lucide-react (via shadcn)

### Fonts
- @fontsource/inter (or Google Fonts CDN)

---

## Color Configuration (Tailwind)

```javascript
// tailwind.config.js extend colors
colors: {
  primary: {
    DEFAULT: '#2e5a8b',
    dark: '#1a3a5c',
    light: '#4a7ab8',
  },
  accent: {
    DEFAULT: '#d4a853',
    light: '#e8c87a',
  },
}
```

---

## Performance Considerations

1. **Image Optimization**
   - Use WebP format where possible
   - Lazy load below-fold images
   - Proper sizing for responsive

2. **Animation Performance**
   - Use transform/opacity only
   - Apply will-change sparingly
   - Respect prefers-reduced-motion

3. **Code Splitting**
   - Sections can be lazy loaded if needed
   - Framer Motion tree-shaking

---

## Accessibility

1. **Reduced Motion**
   - Disable animations for prefers-reduced-motion
   - Keep content accessible without animations

2. **Keyboard Navigation**
   - All interactive elements focusable
   - Visible focus indicators

3. **Screen Readers**
   - Proper heading hierarchy
   - Alt text for images
   - ARIA labels where needed

---
