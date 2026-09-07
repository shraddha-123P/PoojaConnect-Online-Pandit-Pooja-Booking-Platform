# PujaConnect

PujaConnect is a responsive web prototype for discovering, comparing, and booking verified Pandits for home and temple-based religious ceremonies.

## Features

- User-facing discovery with city, ritual, language, experience, pricing, availability, and verified profile details
- Interactive booking request flow with ritual, date, time slot, location type, address, pricing, and request confirmation
- Booking history dashboard with status tracking for confirmed, pending, and rejected requests
- Pandit desk with profile submission, pricing input, and incoming booking accept/reject actions
- Admin dashboard with provider approval queue, booking monitoring metrics, and feedback/report snapshot
- Ritual catalog covering duration, material requirements, price ranges, and home/temple service type
- PRD snapshot for core entities, functional scope, non-functional requirements, and future phases
- Responsive layout for desktop and mobile browsers

## Suggested Backend Mapping

- Users: authentication, role, contact details, booking history
- Pandits: profile, verification status, languages, rituals, pricing, city, availability
- Rituals: name, description, duration, materials, price range, location type
- Bookings: user, Pandit, ritual, date, time, location, status, cancellation reason
- Availability: Pandit, date, slot, status, conflict lock

## Run

Open `index.html` directly in a browser, or serve the folder with any static server.

```powershell
python -m http.server 4173
```

Then visit `http://localhost:4173`.
