---
name: nextjs-theme-builder
description: Use this skill when the user asks to create new pages, components, or update the UI in the Next.js project. It ensures all new code adheres to the existing design system and theme consistency.
---

# Next.js Theme & Page Builder Skill

## Goal
To generate Next.js pages and components that are visually and structurally consistent with the existing project theme (Tailwind CSS, fonts, and shared layouts).

## Instructions

1. **Analyze Existing Theme**:
   - Before generating any UI code, check `tailwind.config.js` and `app/globals.css` to identify the primary color palette, spacing, and typography.
   - Look at `app/layout.tsx` to understand the persistent wrapper and navigation structure.

2. **Maintain Layout Consistency**:
   - All new pages in the `app/` directory must utilize the existing `layout.tsx`.
   - Ensure components use the project's standard container widths (e.g., `max-w-7xl mx-auto`).

3. **Component Reusability**:
   - Check the `components/` directory first. If a Button, Card, or Header component exists, use it instead of writing raw HTML.
   - Use Lucide-React or the project's default icon library for all icons.

4. **Code Standards**:
   - Use TypeScript for all files (`.tsx`, `.ts`).
   - Use Functional Components with Arrow functions.
   - Ensure all images use the Next.js `next/image` component for optimization.

## Design Constraints
- **Colors**: Never use arbitrary hex codes if Tailwind theme colors (e.g., `bg-primary`) are available.
- **Responsiveness**: Always use mobile-first classes (e.g., `grid-cols-1 md:grid-cols-3`).
- **Theme**: If the project supports Dark Mode, ensure `dark:` classes are included in every component.

## Example Usage
**User:** "Add a new pricing page to the site."
**Agent Action:** 1. Activate `nextjs-theme-builder`.
2. Scan `app/globals.css` for theme colors.
3. Create `app/pricing/page.tsx`.
4. Import existing `Navbar` and `Footer` components.
5. Apply consistent padding and typography matching the Home page.