# Romih Website

## One-time setup (GitHub Pages)

1. Go to [github.com](https://github.com) and create a free account if you don't have one.
2. Click **New repository**. Name it something like `romih-website`. Keep it **Public**. Don't add a README (you already have one).
3. On the new empty repo page, click **uploading an existing file**, then drag in *everything* from this folder (`index.html`, `styles.css`, `script.js`, `data.js`, `README.md`, and the whole `images` folder). Commit the changes.
4. Go to **Settings → Pages** (left sidebar).
5. Under "Build and deployment" → Source, choose **Deploy from a branch**. Branch: `main`, folder: `/ (root)`. Click **Save**.
6. Wait ~1 minute, then refresh — GitHub will show your live URL, something like:
   `https://yourusername.github.io/romih-website/`

That's your permanent link. Every time you push a change (steps below), it updates automatically within a minute or two.

---

## Everyday workflow — updating content

You will only ever need to touch **`data.js`** and the **`images` folder**. Never `index.html`, `styles.css`, or `script.js`.

Everything below can be done entirely on GitHub's website — no software to install.

### Add a new show to the archive
1. In your repo, open the `images/shows` folder → **Add file → Create new file**.
2. Type a folder name followed by a slash and a filename, e.g. `warehouse-aug-2026/cover.jpg` — GitHub creates the folder for you as you type. (Easier: use **Add file → Upload files** and drag your photo(s) in — type the new folder name in the upload box first.)
3. Open `data.js` → click the pencil (✏️) icon to edit → add a new block inside the `SHOWS` list, copying the pattern already there. Fill in the title, venue, city, `mood` ("chain" or "bow"), the photo path(s) you just uploaded, and any media links.
4. Scroll down, click **Commit changes**.

### Add/change header photos
1. Upload new photos into `images/hero` (**Add file → Upload files**).
2. Edit `data.js`, add the new file path to the `HERO_PHOTOS` list.
3. Commit changes.

### Update your permanent links (Instagram, SoundCloud, Collective)
Edit `data.js` → change the values inside `SOCIAL_LINKS` → commit.

### Add/update upcoming shows
Edit `data.js` → add or edit an entry in `UPCOMING` → commit.

### If something breaks
`data.js` is plain text, so a missing comma or bracket can break the page. If that happens, click the "History" of the file in GitHub and revert to the last working version.

---

## Local editing (optional)

If you'd rather edit on your computer instead of GitHub's website, install [GitHub Desktop](https://desktop.github.com), clone your repo, edit files with any text editor (VS Code, Notepad, TextEdit), then use GitHub Desktop to commit and push.
