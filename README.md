# Clipora AI

AI-powered platform concept that transforms scripts into animated videos in Animation, 2D and 3D styles.

## V1 status

This repository currently contains the first responsive, interactive frontend prototype.

### Included
- Premium responsive studio dashboard
- Script input with character and word count
- Animation, 2D and 3D visual-style selection
- YouTube 16:9 and Reels/Shorts 9:16 formats
- 10 / 20 / 30 second duration choices
- 720p / 1080p / 4K quality choices
- Live estimated credit calculator
- Empty project library state and responsive mobile navigation

### Important: prototype, not live video generation
The Generate button validates the script and shows a clear preview message. It does **not** generate a video or deduct credits. A production release still needs:
1. Authentication and user accounts
2. Backend API and database for users, jobs, credits and video history
3. A video-generation provider integration and asynchronous job processing
4. Secure file storage and downloadable output delivery
5. Payment provider integration, subscriptions and webhook verification
6. Server-side credit reservation, settlement and refund logic

The proposed $39/month plan and 600 monthly credits are product-planning assumptions, not a live offer. Validate unit economics against actual provider costs before launch.

## Run locally

Open `index.html` in a browser. No build step is required for this first static prototype.

## Project files
- `index.html` — app structure
- `styles.css` — responsive visual system
- `app.js` — client-side interactions and estimate calculator

## Next engineering milestone
Build the secure backend and provider adapter, then connect authentication, persistent jobs, storage and billing. Keep provider API keys on the server; never expose them in browser code.
