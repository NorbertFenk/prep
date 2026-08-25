# Notes

## Roadmap (remaining lessons)
1. ~~Lessons 0001–0008: full URL→pixels journey~~ done (7–8 quiz results still unverified — check warm-ups in 0009)
2. Lesson 0010: HTTP/2 & QUIC — **built 2026-08-25**, quiz pending user report. Sources verified live today: hpbn.co/http2 (incl. packet-loss/TCP-HOL section), cloudflare.com/learning/performance/what-is-http3, .../http2-vs-http1.1. Glossary: 7 terms added.
3. Lesson 0011: CDNs — **built 2026-08-25**, quiz pending user report. Sources verified live today: cloudflare.com/learning/cdn/what-is-a-cdn, .../cdn/cdn-load-balance-reliability, anycast glossary page referenced live from both. Glossary: origin, edge/PoP, anycast, latency added (CDN term already existed since lesson 1).
4. Lesson 0012: mock-interview gauntlet — **built 2026-08-25**, per user's full-marks report on lessons 7–11 (see learning record 0008; unverified by design). New reusable component assets/gauntlet.js (+ styles in course.css): shuffled timed deck, Solid/Shaky/Froze self-grading, auto-links missed categories to their lessons. Graduation: ≥80% solid, zero freezes. Post-course wisdom push: r/cscareerquestions + r/networking. Course roadmap COMPLETE pending user's gauntlet run.
- Optional/later: auth flow (cookies/sessions/tokens) if user's interviews touch backend; NAT/home network likely out of scope

- User: codes, networks foggy. Interview prep is the driver.
- Lesson style: short, one thing per lesson, always ends with spoken-answer practice (interviews are spoken).
- Verified resources 2026-08-22: hpbn.co, alex/what-happens-when, Cloudflare Learning Center.
- 2026-08-24: hpbn.co has no rendering chapter (networking book) — for lesson 0006 verified web.dev/articles/howbrowserswork and web.dev/learn/performance/understanding-the-critical-path instead.
- 2026-08-25: lesson 0008 (server side) verified Cloudflare reverse-proxy + load-balancing pages and nginx.com/resources/glossary/load-balancing (F5). hpbn.co has no load-balancer chapter.
- 2026-08-25: lesson 0009 (capstone, 60-second answer) built entirely from already-verified sources. Started assets/ component library: course.css + quiz.js extracted (identical inline copies existed in all 8 prior lessons); old lessons left as-is. Lesson 0009 is first to link them.
