#!/usr/bin/env python3
"""Fetch figure portraits from Wikimedia with license + attribution.
Usage: python3 fetch_photos.py
Edit FIGURES below. Slug -> Wikipedia article title.
Downloads to ../img/figures/<slug>.jpg and appends to CREDITS.md.
"""
import json, os, sys, urllib.parse, urllib.request, ssl

OUT = os.path.join(os.path.dirname(__file__), "..", "img", "figures")
CREDITS = os.path.join(os.path.dirname(__file__), "..", "img", "figures", "CREDITS.md")
UA = "theaicults-build/1.0 (kevin@mentatix.io)"
CTX = ssl.create_default_context()

# slug : wikipedia title
FIGURES = {
    # already have (skip-safe re-fetch)
    "julian-huxley": "Julian Huxley",
    "nick-bostrom": "Nick Bostrom",
    "elon-musk": "Elon Musk",
    "sam-altman": "Sam Altman",
    "peter-thiel": "Peter Thiel",
    "eliezer-yudkowsky": "Eliezer Yudkowsky",
    "jeffrey-epstein": "Jeffrey Epstein",
    "richard-sutton": "Richard S. Sutton",
    "marvin-minsky": "Marvin Minsky",
    "max-more": "Max More",
    # extropianism / singularitarianism
    "ray-kurzweil": "Ray Kurzweil",
    "julian-assange": "Julian Assange",
    "robin-hanson": "Robin Hanson",
    "demis-hassabis": "Demis Hassabis",
    # cosmism
    "ben-goertzel": "Ben Goertzel",
    "anthony-levandowski": "Anthony Levandowski",
    # rationalism
    "curtis-yarvin": "Curtis Yarvin",
    "yann-lecun": "Yann LeCun",
    "scott-alexander": "Scott Alexander (writer)",
    # effective altruism
    "peter-singer": "Peter Singer",
    "william-macaskill": "William MacAskill",
    "sam-bankman-fried": "Sam Bankman-Fried",
    "holden-karnofsky": "Holden Karnofsky",
    "sam-harris": "Sam Harris",
    # longtermism
    "toby-ord": "Toby Ord",
    "ezra-klein": "Ezra Klein",
    "derek-thompson": "Derek Thompson (journalist)",
    "hilary-greaves": "Hilary Greaves",
}

def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    return urllib.request.urlopen(req, timeout=20, context=CTX).read()

def api(params):
    url = "https://en.wikipedia.org/w/api.php?" + urllib.parse.urlencode(params)
    return json.loads(get(url))

def commons(params):
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    return json.loads(get(url))

os.makedirs(OUT, exist_ok=True)
rows = []
for slug, title in FIGURES.items():
    try:
        # 1) get thumbnail + source file title
        d = api({"action": "query", "titles": title, "prop": "pageimages",
                 "piprop": "thumbnail|name", "pithumbsize": 500, "format": "json"})
        pages = d["query"]["pages"]
        page = next(iter(pages.values()))
        thumb = page.get("thumbnail", {}).get("source")
        filename = page.get("pageimage")
        if not thumb:
            print(f"  ✗ {slug}: no image"); rows.append((slug, title, "NO IMAGE", "", "")); continue
        # 2) download
        img = get(thumb)
        path = os.path.join(OUT, slug + ".jpg")
        with open(path, "wb") as f:
            f.write(img)
        # 3) license + author from commons
        lic, author = "see Wikimedia", ""
        if filename:
            try:
                c = commons({"action": "query", "titles": "File:" + filename,
                             "prop": "imageinfo", "iiprop": "extmetadata", "format": "json"})
                cp = next(iter(c["query"]["pages"].values()))
                meta = cp["imageinfo"][0]["extmetadata"]
                lic = meta.get("LicenseShortName", {}).get("value", lic)
                author = meta.get("Artist", {}).get("value", "")
                import re
                author = re.sub("<[^>]+>", "", author).strip()
            except Exception:
                pass
        print(f"  ✓ {slug}  [{lic}]  {len(img)//1024}kb")
        rows.append((slug, title, lic, author, "File:" + (filename or "")))
    except Exception as e:
        print(f"  ✗ {slug}: {e}")
        rows.append((slug, title, "ERROR", str(e), ""))

with open(CREDITS, "w") as f:
    f.write("# Figure photo credits\n\nAll portraits sourced from Wikimedia Commons.\n\n")
    f.write("| Figure | License | Author | Source file |\n|---|---|---|---|\n")
    for slug, title, lic, author, src in rows:
        f.write(f"| {title} | {lic} | {author} | {src} |\n")
print(f"\nWrote credits -> {CREDITS}")
