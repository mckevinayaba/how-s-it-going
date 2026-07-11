## Add a photo to the Learn page "Featured Article" section

Yes — that green placeholder box on the right should be a real image. Right now it's an empty gradient div on `src/pages/Learn.tsx` (line 103).

### What to add

A warm, editorial photo that speaks to the article "Why what we eat at home matters more than most of us were told" — i.e. a home kitchen scene with family/food warmth, not a stock salad shot.

### How

1. Generate a premium editorial photo (`src/assets/learn-featured-kitchen.jpg`, ~1200×960):
   - Warm morning light in a lived-in home kitchen
   - Hands preparing everyday whole ingredients (fresh tomatoes, turmeric root, dates, a wooden board)
   - Soft, natural palette that matches the site's warm/oat/green tokens
   - Editorial, documentary feel — not staged stock photography
2. Replace the empty gradient div in `src/pages/Learn.tsx` with an `<img>` inside a rounded frame:
   - Same `rounded-xl2 ring-1 ring-line` container, `aspect-[5/4]`
   - `object-cover`, `loading="lazy"`, descriptive alt text
   - Subtle inner shadow / soft warm overlay to blend with the card
3. Keep the two-column layout and copy untouched.

### Optional follow-up (not in this plan unless you want it)

Do the same treatment for the six "Topics" cards below — they're currently text-only. Say the word and I'll add small illustrative thumbnails per topic in a second pass.
