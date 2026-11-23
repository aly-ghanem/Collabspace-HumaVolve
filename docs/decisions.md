# Decision Log

Write 2–3 lines per decision in your own words: what you chose, why, what you rejected.

| Date | Decision | Why | Alternatives rejected |
|---|---|---|---|
| 24/11 | Zustand + persist instead of a mock API layer | No backend; one store is simple to reason about and survives refresh | MSW + TanStack Query (too much setup for 3 days), Redux (boilerplate) |
| 24/11 | Tailwind tokens mapped from Figma variables | Pixel accuracy and one source of truth for colors/type | CSS Modules, a UI kit (would fight the design) |
| 24/11 | Radix primitives for modals/menus/tabs | Accessibility (focus trap, Esc, ARIA) without a visual style | Building from scratch, MUI |
| | | | |
