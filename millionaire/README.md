# Who Wants to Be a Millionaire? — Meteorology Edition

A browser quiz game for meteorology students. It runs from undergrad basics up to Ph.D. qualifying-exam material.

## How to play
- There are 15 questions. One is drawn at random from the bank for each level, so every game is different.
- **Tiers:** Q1–5 Undergrad (30 s each), Q6–10 M.S. (45 s), Q11–15 Ph.D. Quals (60 s).
- **Safe havens:** Q5 ($1,000) and Q10 ($32,000). A wrong answer or running out of time drops you to the last safe haven you passed. You can walk away at any time and keep what you have.
- Every answer is followed by a short explanation.

### Lifelines (one use each)
- **50:50:** removes two wrong answers.
- **Phone an Expert:** three experts are offered at random (with their specialties); you pick who to call. In their home and adjacent fields they are always right. In unrelated fields they hedge and occasionally miss. Overall accuracy is about 99%.
- **Ask the Grad Students:** the cohort votes. They are reliable on early questions, noisier near the top, and sometimes pulled toward a classic misconception.

Keyboard: `A`–`D` to answer, `Enter` to continue, `Esc` to close a lifeline.

## Run it
No build step is needed. Open `index.html` in a browser, or publish it with GitHub Pages:

1. Push these files to a repository.
2. Go to **Settings → Pages**, set the source to `main` / root, and save.
3. The game will be live at `https://<username>.github.io/<repo>/`.

## Files
| File | What it holds |
|---|---|
| `index.html` | The game (layout, styles, logic) |
| `questions.js` | The question bank: 75 questions, 5 per level |
| `experts.js` | Expert roster, their home and adjacent fields, and the miss rate |

## Adding questions
Copy a block in `questions.js` and edit it:

```js
{ level: 9, category: "Cloud Physics",
  q: "Your question?",
  options: ["Correct", "Wrong", "Wrong", "Wrong"],
  answer: 0,                // index of the correct option (options are shuffled at runtime)
  trap: 2,                  // optional: misconception the grad students lean toward
  explanation: "Why the answer is right." },
```

`category` must be one of the names listed at the top of `experts.js`, so the expert lifeline knows whose field the question falls in.

## Disclaimer
This is a fan-made, non-commercial educational game. It is not affiliated with any TV show or with the scientists named. Expert lifeline answers are fictional and auto-generated, and they are not real quotes.
