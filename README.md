# Scratchie Growth Deck

A responsive React presentation showcasing Scratchie's 6-pillar growth strategy to reach 15,000 subscribers.

## Project Structure

```
src/
├── components/
│   ├── slides/
│   │   ├── index.js                    # Export all slide components
│   │   ├── TitleSlide.jsx             # Main title slide
│   │   ├── ExecutiveSummarySlide.jsx  # Executive summary
│   │   ├── MissingLinkSlide.jsx       # Market positioning
│   │   ├── TargetSegmentsSlide.jsx    # Target market segments
│   │   ├── GrowthStrategySlide.jsx    # 6-pillar strategy overview
│   │   ├── CallToActionSlide.jsx      # Final call to action
│   │   └── PlaceholderSlide.jsx       # Placeholder for unrefactored slides
│   └── Slide.jsx                      # Reusable slide wrapper component
├── data/
│   └── chartData.js                   # Chart data for all slides
├── utils/
│   └── pdfExport.js                   # PDF export functionality
└── ScratchieGrowthDeck.jsx           # Main presentation component
```

## Features

- **Responsive Design**: Works on all screen sizes and aspect ratios
- **Component-Based Architecture**: Each slide is a separate, reusable component
- **Interactive Navigation**: Click navigation dots or use arrow buttons
- **PDF Export**: Print-friendly PDF generation
- **Chart Integration**: Uses Recharts for data visualization
- **Modern UI**: Built with Tailwind CSS and Lucide React icons

## Slide Components

### Completed Components
- `TitleSlide`: Full-width title with growth metrics
- `ExecutiveSummarySlide`: Two-column opportunity and strategy overview
- `MissingLinkSlide`: Market positioning with competitor analysis
- `TargetSegmentsSlide`: Pie chart and segment descriptions
- `GrowthStrategySlide`: Interactive 6-pillar strategy grid
- `CallToActionSlide`: Investment summary and projected returns

### Placeholder Components
The following slides use `PlaceholderSlide` and can be refactored into individual components:
- Channel Performance Projections
- Growth Timeline
- Conversion Funnel & Key Metrics
- Budget Allocation
- Risk Mitigation & Success Actions
- Pillar detail slides (1-6)

## Development

### Running the Project
```bash
npm run dev
```

### Adding New Slides
1. Create a new component in `src/components/slides/`
2. Export it from `src/components/slides/index.js`
3. Import and add to the slides array in `ScratchieGrowthDeck.jsx`

### Chart Data
All chart data is centralized in `src/data/chartData.js` for easy maintenance and reuse.

## Technologies Used

- **React 19.1.0**: Component framework
- **Vite**: Build tool and dev server
- **Tailwind CSS 3.x**: Utility-first CSS framework
- **Recharts**: Chart library for data visualization
- **Lucide React**: Icon library

## Responsive Breakpoints

- `sm:` - 640px and up
- `lg:` - 1024px and up  
- `xl:` - 1280px and up

All slides are optimized for these breakpoints with appropriate text sizing, spacing, and layout adjustments.
