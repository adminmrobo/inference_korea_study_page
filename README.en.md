# Inference Korea Study Board · Chick Inference Lab

[한국어](README.md) · **English** · [中文](README.zh.md)

[Inference Korea](https://songys.github.io/inference-korea/) is a study community focused on inference engineering: how to run AI models efficiently and reliably.
This repository is the study board for our 10-week reading of *Inference Engineering* (Kiely, P., 2026, Baseten Books).
The Study Leader and the chicks are joined by the Assistant and the Fruit Fly Researcher, sent over from the lab while the busy Professor is away.

- Dates: October 24 – December 26, 2026, every Saturday at 8:00 PM KST (tentative), 10 sessions
- Where: online on Zoom (join link, meeting ID and passcode are under "How to join" on the Briefing page)
- Format: one book presentation and one paper presentation per session; special sessions (guest lectures) are announced on Discord
- Slides: [Google Drive folder](https://drive.google.com/drive/folders/1NxhUYActOe-POABwqiYdxXBaBg5tY44c)
- Source of schedule and presenters: [study timetable (Google Sheets)](https://docs.google.com/spreadsheets/d/1pVf5_bPLA5_UhImUO7EJ_Puh3Q5b485w65WVo1QlFsI/edit?usp=sharing)
- Our event: [LangCon 2026](https://songys.github.io/2026Langcon/)

## Pages (Korean · English · Chinese)

| Page | 한국어 | English | 中文 |
|---|---|---|---|
| Briefing | `index.html` | `en/index.html` | `zh/index.html` |
| Schedule | `schedule.html` | `en/schedule.html` | `zh/schedule.html` |
| Topic Guide | `topic.html` | `en/topic.html` | `zh/topic.html` |
| Study Guide | `guide.html` | `en/guide.html` | `zh/guide.html` |

Every page has a language switcher (한국어 / EN / 中文) at the top right.

```
assets/
  css/board.css   shared styles
  js/data.js      book ranges, papers, videos, Zoom, links, LangCon (shared by all three languages)
  js/board.js     date logic, Google Sheets sync, per-language UI text, shared parts
  img/            character images
```

## Updates happen in Google Sheets only

Each time a page opens, it reads the 시간표 (timetable) tab of the Google Sheet. **Nothing needs to be committed for weekly updates.**

| Edit in the sheet | What changes on the board |
|---|---|
| **발제자** (presenter) cell, as `책 : name, 논문: name` (책 = book, 논문 = paper) | session cards, next meeting, open presenter slots, ticker |
| **날짜** (date) cell | D-day, order, calendar links, study period |
| (optional) add a **시간** (time) column | start time of that session |
| (optional) **발표자료** (slides) column with a link | "Open slides" on the session card (otherwise links to the Drive folder) |
| (optional) **비고** (note) column | shown in the ticker and on the card; write `휴강` (or `skip` / `cancel`) to skip that session |
| (optional) **완료** (done) column with `O` | marks the session done even before its time |

- Two hours after a session starts it is marked **done** automatically: its egg hatches and "next meeting" moves on.
- The sheet must be shared as **"Anyone with the link: Viewer"**. If it can't be read, the defaults in `data.js` are shown.
- Don't rename the sheet headers 회차 (session), 날짜 (date) or 발제자 (presenter). Column order can change.
- On the English and Chinese pages, presenter names are romanized when they appear in the `names` table in `data.js`. Add a new presenter there only if you want a romanized name.
- Preview another date: add `?today=2026-11-10` to the page URL.

Content that rarely changes (book ranges, reference papers, videos, Zoom details, the Discord link `discord`, extra ticker notices `notices`) lives in `assets/js/data.js`.

## Publishing with GitHub Pages

1. Put the contents of this folder at the repository root (keep file names and folders as they are).
2. In **Settings → Pages → Build and deployment**, set Source to `Deploy from a branch`, branch `main`, folder `/ (root)`.
3. After a minute or two the site is live at `https://<account>.github.io/<repository>/`.

There is no build step. Fonts load from Google Fonts.

## Character credits

- Study Leader: character provided by the study organizers
- Chicks (PeepCore, Pree, Deco, Engi): LangCon 2026 poster characters
- Assistant and Fruit Fly Researcher: from Ahn Sang-Sun's series "How Does AI Tell Images Apart?" (CC BY-NC 4.0)

The numbers in the lab demo and the chick metaphors are illustrative and were made for this board.

---
Page by: Reon Ahn (Ahn, Sang-Sun) · contact: sangsun.ahn@m-robo.com · page: [www.ahnboat.xyz](https://www.ahnboat.xyz)
