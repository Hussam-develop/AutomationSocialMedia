# Hadith Daily Automation

Next.js/Vercel endpoint that generates a 1080×1350 Arabic PNG for one hadith from *Al-Arba'in al-Nawawiyyah*.

## Endpoints

- `/api/hadith-image?number=1` — deterministic preview of hadith 1.
- `/api/hadith-image?date=2026-10-05` — maps the date to hadith 1, then increments one hadith per day for 42 days.
- After day 42, the endpoint returns HTTP 410 and never repeats.

## Deployment

Push this project to the `main` branch of `Hussam-develop/AutomationSocialMedia`. The connected Vercel project should create a production deployment automatically.

Optional environment variable:

`HADITH_START_DATE=2026-10-05`

The app fetches the pinned Arabic hadith dataset at build/runtime from AhmedBaset/hadith-json v1.2.0 and uses Noto Naskh Arabic for image rendering.

## Metricool

Use the public image URL as the post media URL, for example:

`https://YOUR-PRODUCTION-DOMAIN/api/hadith-image?date=2026-10-05`

Do not publish a text-only fallback if media creation fails.
