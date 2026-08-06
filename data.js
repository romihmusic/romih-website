/* ============================================================
   ROMIH SITE CONTENT
   ============================================================
   This is the ONLY file you should need to edit for day-to-day
   updates — new shows, new photos, new links, upcoming dates.
   You never need to touch index.html, styles.css, or script.js.

   After you save changes here (and upload any new photos to the
   /images folder), commit + push to GitHub — your live site
   updates automatically within a minute or two.

   Rules to keep this file from breaking:
   - Every item needs a comma after it, EXCEPT the very last one
     in a list.
   - Always keep text inside quotes: "like this"
   - Keep every { has a matching }, every [ has a matching ]
   ============================================================ */


/* ---------- PERMANENT LINKS ----------
   These are the 3 circular icons at the top (Instagram, SoundCloud,
   Collective). They never change based on the toggle. Just replace
   the "#" with your real links. */
const SOCIAL_LINKS = {
  instagram: "#",
  soundcloud: "#",
  collective: "#",
};


/* ---------- HEADER PHOTO STRIP ----------
   The scrollable photos at the top of the page. Add/remove/reorder
   freely — just list the image file paths in the order you want
   them to appear.

   TO ADD A NEW HEADER PHOTO:
   1. Upload the photo file into the /images/hero folder (in GitHub,
      use "Add file" → "Upload files").
   2. Add its filename to this list below, e.g. "images/hero/hero-09.jpg" */
const HERO_PHOTOS = [
  "images/hero/hero-01.jpg",
  "images/hero/hero-02.jpg",
  "images/hero/hero-03.jpg",
  "images/hero/hero-04.jpg",
  "images/hero/hero-05.jpg",
  "images/hero/hero-06.jpg",
  "images/hero/hero-07.jpg",
  "images/hero/hero-08.jpg",
];


/* ---------- SHOW ARCHIVE ----------
   Filtered by the chain (⛓️) / bow (🎀) toggle. Each show is one
   entry below.

   TO ADD A NEW SHOW:
   1. In /images/shows, create a new folder for the show (any name,
      no spaces — e.g. "warehouse-night-aug-2026").
   2. Upload that show's photo(s) into the new folder.
   3. Copy one of the blocks below, paste it inside the [ ] as a
      new entry, and fill in:
        title   -> show name
        venue   -> venue name
        city    -> "City, State"
        mood    -> "chain" or "bow"
        photos  -> list of image paths in that show's folder
                   (first one is used as the cover photo)
        media   -> list of {label, url} links for this show
                   (SoundCloud, YouTube, etc. — add as many as you have,
                   or leave the list empty: media: [] ) */
const SHOWS = [
  {
    title: "Placeholder Club Night",
    venue: "Venue Name",
    city: "Portland, OR",
    mood: "chain",
    photos: ["images/shows/placeholder-club-night/cover.jpg"],
    media: [
      { label: "SoundCloud", url: "#" },
    ],
  },
  {
    title: "Placeholder Rooftop Set",
    venue: "Venue Name",
    city: "Portland, OR",
    mood: "bow",
    photos: ["images/shows/placeholder-rooftop-set/cover.jpg"],
    media: [
      { label: "YouTube", url: "#" },
      { label: "SoundCloud", url: "#" },
    ],
  },
];


/* ---------- UPCOMING SHOWS ----------
   Always shown in order, NOT affected by the toggle. Add or remove
   entries freely — day/mon are just the date shown in the little
   date box (e.g. day: "14", mon: "Sep"). */
const UPCOMING = [
  { day: "14", mon: "Sep", venue: "Venue Name", city: "Portland, OR", url: "#" },
  { day: "02", mon: "Oct", venue: "Venue Name", city: "Seattle, WA", url: "#" },
];
