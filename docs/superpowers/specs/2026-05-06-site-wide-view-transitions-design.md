# Site-Wide View Transitions Design

## Goal

Add site-wide Astro view transitions and prevent the sunset shader from flashing white between internal page loads.

## Scope

This change applies to all pages that use `src/layouts/Layout.astro`. Internal same-origin links should navigate through Astro's client router. External links, downloads, modified-click navigation, and links explicitly marked for reload should keep normal browser behavior.

## Architecture

`src/layouts/Layout.astro` will import Astro's `ClientRouter` from `astro:transitions` and render it in the document head. Keeping the router in the shared layout makes the behavior site-wide without touching individual pages.

The sunset section remains owned by `src/components/Sunset.astro` and `src/components/InnserSunset.jsx`. The sunset component should be persisted across Astro navigations so the existing hydrated shader instance is reused instead of being torn down and recreated for every page swap.

## Visual Behavior

The sunset region should never expose a white background during navigation or hydration. The static Astro wrapper, the React island fallback, and the shader component should all use the same warm fallback color that matches the shader palette.

The page transition should be restrained and rely on Astro's default transition behavior unless verification shows a specific mismatch. No additional JavaScript animation library is needed for this change.

## Accessibility And Preferences

Astro's transition router should remain responsible for reduced-motion behavior and route announcement. The implementation should not add looping UI animation beyond the existing shader behavior.

## Testing

Run the production build to verify Astro compilation. Then run the local dev server and manually navigate between home, blog index, and a blog post to confirm:

- internal links transition client-side;
- the sunset shader persists between pages;
- no white flash appears in the sunset area;
- modified-click and external browser behavior are unchanged.
