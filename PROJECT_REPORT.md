# PujaConnect - Detailed Project Report

## Project Overview

PujaConnect is a responsive web platform prototype for discovering, comparing, and booking verified Pandits for religious ceremonies. It supports home-based pujas and temple-based ceremonies with ritual details, indicative pricing, availability information, booking requests, Pandit responses, and admin moderation.

## Problem Statement

Pandit booking is often handled through personal references, phone calls, or temple visits. Users may not know which providers are verified, what materials are required, how long a ritual takes, what it costs, or whether a Pandit is available. This creates uncertainty, scheduling conflicts, last-minute cancellations, and limited choice.

## Objectives

- Digitize Pandit discovery and puja booking.
- Present verified religious service providers.
- Make ritual details, duration, and pricing easier to understand.
- Simplify date, time, location, and booking-request management.
- Support multiple rituals, languages, cities, and regional traditions.

## Scope of the Prototype

- Responsive desktop and mobile web interface.
- Search and filtering by city and ritual type.
- Verified Pandit profiles with experience, languages, pricing, and availability.
- Ritual catalog with duration, materials, price range, and home or temple service type.
- Booking request form for ritual, date, time, address, and service type.
- Booking history and status tracking.
- Pandit desk for accepting or rejecting incoming requests.
- Pandit onboarding form for admin verification.
- Admin dashboard with provider approvals, booking metrics, and feedback visibility.

## User Roles

### User

Discovers Pandits, compares rituals, submits booking requests, and tracks status.

### Pandit

Creates a profile, lists rituals and prices, manages availability, and responds to requests.

### Administrator

Verifies provider profiles, manages rituals, monitors bookings, and reviews feedback or reports.

## Main User Flow

1. A user selects a city and ritual or browses the catalog.
2. The user compares verified Pandit profiles and ritual details.
3. The user selects a Pandit, date, time slot, and service location.
4. The user submits a booking request.
5. The Pandit accepts or rejects the request.
6. The user sees the updated status in booking history.
7. An administrator reviews provider approvals and operational metrics.

## Functional Highlights

### Discovery

Users can filter sample Pandits by city and ritual type. Profiles show verified status, languages, experience, pricing, and availability.

### Booking

The form captures ritual, Pandit, date, time slot, service type, and address. A submitted request appears in booking history as pending.

### Pandit Desk

The Pandit view presents incoming requests and allows accept or reject actions. New Pandit profiles enter an admin approval queue.

### Admin Dashboard

The admin view summarizes provider approvals, booking volume, completion rate, and pending actions.

## Data Model

- **Users:** identity, contact information, role, and booking history.
- **Pandits:** profile, city, experience, languages, rituals, pricing, availability, and verification status.
- **Rituals:** name, description, duration, materials, price range, and location type.
- **Bookings:** user, Pandit, ritual, date, time, location, price, status, and cancellation reason.
- **Availability:** Pandit, date, time slot, and booking lock status.
- **Feedback and reports:** rating, comments, issue category, and resolution state.

## Technology

The current prototype uses HTML5, CSS3, and vanilla JavaScript with in-memory demo data. A production build can use React or Next.js, a Node.js and Express REST API, PostgreSQL or MongoDB, secure authentication, and deployment through Vercel, Netlify, or AWS.

## Non-Functional Requirements

- Target page load below three seconds on a normal broadband connection.
- Responsive layout for desktop, tablet, and mobile widths.
- Clear, respectful, and accessible language.
- Secure authentication and role-based permissions in production.
- Server-side validation and conflict-safe booking transactions.
- Scalable city, ritual, language, and provider data model.

## KPI Plan

- Number of registered users.
- Number of verified Pandits.
- Booking completion rate.
- Cancellation and rejection rate.
- Average time from search to booking request.
- Average Pandit response time.
- Percentage of bookings without scheduling conflicts.

## Cultural and Operational Considerations

Ritual descriptions, material lists, regional traditions, and service terminology should be reviewed by knowledgeable domain advisors before production launch. Pricing should be clearly labeled as indicative until confirmed by the Pandit. Verification should follow a documented admin process, and user reports should have a defined review path.

## Current Limitations

This submission build is a frontend prototype using in-memory sample data. Refreshing the page resets demo actions. It does not yet provide real account creation, database persistence, payment processing, messaging, or live provider availability.

## Future Enhancements

- Online payments and donations.
- Regional language support.
- Puja reminder notifications.
- Live puja streaming.
- Astrology and horoscope services.
- Native mobile applications.
- Calendar integrations and automated travel-distance checks.

## Local Run Instructions

```powershell
python -m http.server 4173
```

Open `http://localhost:4173/` after starting the server.

## Submission Status

- GitHub repository: local project is ready to publish, but no remote is connected yet.
- Detailed project report: this file is complete and can be published with the repository.
- Deployed project: local preview works at `http://localhost:4173/`; a public HTTPS deployment is still required.
- Feedback video: use the accompanying `FEEDBACK_VIDEO_SCRIPT.md`; the final video must be recorded and uploaded by the project owner.
