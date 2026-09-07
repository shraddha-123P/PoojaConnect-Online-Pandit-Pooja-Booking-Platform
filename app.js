const rituals = [
  {
    name: "Satyanarayan Katha",
    duration: "2.5 hours",
    materials: "Kalash, flowers, fruits, panchamrit, tulsi leaves, prasad, havan samagri",
    priceRange: "₹3,100 - ₹5,500",
    locationType: "Home / Temple",
    description: "Family prosperity ritual with katha, aarti, prasad, and optional havan.",
  },
  {
    name: "Griha Pravesh",
    duration: "3 hours",
    materials: "Coconut, mango leaves, kalash, rice, havan kund, ghee, navagraha items",
    priceRange: "₹5,100 - ₹9,500",
    locationType: "Home",
    description: "Housewarming ceremony with Ganesh puja, vastu shanti, havan, and griha entry rituals.",
  },
  {
    name: "Havan",
    duration: "1.5 hours",
    materials: "Havan kund, samidha, ghee, camphor, janeu, roli, chawal, flowers",
    priceRange: "₹2,500 - ₹4,500",
    locationType: "Home / Temple",
    description: "Fire ritual for blessings, purification, festivals, and family sankalp ceremonies.",
  },
  {
    name: "Naamkaran",
    duration: "2 hours",
    materials: "Puja thali, flowers, rice, kumkum, diya, sweets, baby horoscope details",
    priceRange: "₹3,500 - ₹6,500",
    locationType: "Home",
    description: "Naming ceremony with Ganesh puja, nakshatra-based guidance, and family blessings.",
  },
  {
    name: "Mundan",
    duration: "2 hours",
    materials: "Ganesh puja items, flowers, new clothes, turmeric, sandalwood, prasad",
    priceRange: "₹3,000 - ₹6,000",
    locationType: "Home / Temple",
    description: "First hair removal ceremony with sankalp, protective mantras, and family rituals.",
  },
];

const pandits = [
  {
    id: "acharya-sharma",
    name: "Acharya Dev Sharma",
    location: "Bengaluru",
    experience: 18,
    languages: ["Hindi", "Sanskrit", "Kannada"],
    rituals: ["Satyanarayan Katha", "Griha Pravesh", "Havan"],
    pricing: { "Satyanarayan Katha": 4100, "Griha Pravesh": 7600, Havan: 3200 },
    availability: "Today, Fri, Sun",
    rating: 4.8,
    bio: "Specialist in Vedic home rituals, griha shanti, and family ceremonies with complete material guidance.",
    photo: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=80",
    verified: true,
  },
  {
    id: "pandit-joshi",
    name: "Pandit Mahesh Joshi",
    location: "Pune",
    experience: 12,
    languages: ["Marathi", "Hindi", "Sanskrit"],
    rituals: ["Satyanarayan Katha", "Naamkaran", "Mundan"],
    pricing: { "Satyanarayan Katha": 3600, Naamkaran: 4300, Mundan: 3900 },
    availability: "Thu, Sat, Mon",
    rating: 4.7,
    bio: "Known for clear explanations, punctual ceremonies, and Maharashtrian ritual traditions.",
    photo: "https://images.unsplash.com/photo-1598124146163-36819847286d?auto=format&fit=crop&w=900&q=80",
    verified: true,
  },
  {
    id: "acharya-mishra",
    name: "Acharya Harinarayan Mishra",
    location: "Delhi NCR",
    experience: 24,
    languages: ["Hindi", "Sanskrit", "English"],
    rituals: ["Griha Pravesh", "Havan", "Mundan"],
    pricing: { "Griha Pravesh": 8900, Havan: 4200, Mundan: 5200 },
    availability: "Fri, Sun, Tue",
    rating: 4.9,
    bio: "Senior priest for elaborate havan, vastu shanti, and lifecycle ceremonies across NCR temples and homes.",
    photo: "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=900&q=80",
    verified: true,
  },
  {
    id: "pandit-iyer",
    name: "Pandit S. Narayan Iyer",
    location: "Mumbai",
    experience: 15,
    languages: ["Tamil", "Hindi", "Sanskrit"],
    rituals: ["Naamkaran", "Havan", "Griha Pravesh"],
    pricing: { Naamkaran: 5200, Havan: 3600, "Griha Pravesh": 8200 },
    availability: "Sat, Sun, Wed",
    rating: 4.6,
    bio: "Supports South Indian and pan-Indian rituals with bilingual guidance for families.",
    photo: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=900&q=80",
    verified: true,
  },
];

let pendingPanditProfiles = [
  { id: "pending-1", name: "Pandit Raghav Tripathi", city: "Jaipur", languages: "Hindi, Sanskrit, Rajasthani", price: 4100, status: "Pending review" },
  { id: "pending-2", name: "Acharya Venkatesh Rao", city: "Hyderabad", languages: "Telugu, Sanskrit, Hindi", price: 5200, status: "Documents pending" },
];

let bookings = [
  { id: "PC-1042", ritual: "Griha Pravesh", pandit: "Acharya Dev Sharma", date: "2026-08-29", time: "09:00 AM", status: "Confirmed" },
  { id: "PC-1043", ritual: "Naamkaran", pandit: "Pandit Mahesh Joshi", date: "2026-09-02", time: "11:30 AM", status: "Awaiting Pandit" },
];

const formatter = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
let selectedPandit = pandits[0];
let activeFilter = "all";

const panditGrid = document.querySelector("#panditGrid");
const ritualGrid = document.querySelector("#ritualGrid");
const ritualSelect = document.querySelector("#ritualSelect");
const citySelect = document.querySelector("#citySelect");
const dateInput = document.querySelector("#dateInput");
const timeSelect = document.querySelector("#timeSelect");
const locationTypeSelect = document.querySelector("#locationTypeSelect");
const addressInput = document.querySelector("#addressInput");
const selectedPanditPanel = document.querySelector("#selectedPandit");
const summaryRitual = document.querySelector("#summaryRitual");
const summaryDuration = document.querySelector("#summaryDuration");
const summaryPrice = document.querySelector("#summaryPrice");
const requestStatus = document.querySelector("#requestStatus");
const bookingHistory = document.querySelector("#bookingHistory");
const panditRequests = document.querySelector("#panditRequests");
const approvalList = document.querySelector("#approvalList");

function money(value) {
  return formatter.format(value || 0);
}

function getSelectedRitual() {
  return rituals.find((ritual) => ritual.name === ritualSelect.value) || rituals[0];
}

function getVisiblePandits() {
  const city = citySelect.value;
  return pandits.filter((pandit) => {
    const cityMatch = city === "all" || pandit.location === city;
    const ritualMatch = activeFilter === "all" || pandit.rituals.includes(activeFilter);
    const selectedRitualMatch = pandit.rituals.includes(ritualSelect.value);
    return pandit.verified && cityMatch && ritualMatch && selectedRitualMatch;
  });
}

function renderRitualOptions() {
  ritualSelect.innerHTML = rituals.map((ritual) => `<option value="${ritual.name}">${ritual.name}</option>`).join("");
}

function renderPandits() {
  const visiblePandits = getVisiblePandits();
  if (!visiblePandits.includes(selectedPandit)) {
    selectedPandit = visiblePandits[0] || pandits.find((pandit) => pandit.rituals.includes(ritualSelect.value)) || pandits[0];
  }

  if (!visiblePandits.length) {
    panditGrid.innerHTML = '<div class="empty-state">No verified Pandits match this city and ritual yet. Try another city or puja type.</div>';
    renderBooking();
    return;
  }

  panditGrid.innerHTML = visiblePandits.map((pandit) => {
    const selected = pandit.id === selectedPandit.id ? " selected" : "";
    return `
      <article class="pandit-card${selected}">
        <div class="pandit-photo" style="background-image: url('${pandit.photo}')"><span>Verified</span></div>
        <div class="pandit-body">
          <div><h3>${pandit.name}</h3><p>${pandit.bio}</p></div>
          <div class="pandit-facts">
            <span>${pandit.location}</span><span>${pandit.experience} yrs exp.</span><span>${pandit.languages.join(", ")}</span><span>★ ${pandit.rating}</span>
          </div>
          <div class="ritual-tags">${pandit.rituals.map((ritual) => `<span>${ritual}</span>`).join("")}</div>
          <div class="pandit-meta">
            <span class="price">${money(pandit.pricing[ritualSelect.value])}</span>
            <button class="primary-button" type="button" data-select="${pandit.id}">${selected ? "Selected" : "Select"}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
  renderBooking();
}

function renderRituals() {
  ritualGrid.innerHTML = rituals.map((ritual) => `
    <article class="ritual-card">
      <h3>${ritual.name}</h3>
      <p>${ritual.description}</p>
      <dl>
        <div><dt>Duration</dt><dd>${ritual.duration}</dd></div>
        <div><dt>Materials</dt><dd>${ritual.materials}</dd></div>
        <div><dt>Price range</dt><dd>${ritual.priceRange}</dd></div>
        <div><dt>Location</dt><dd>${ritual.locationType}</dd></div>
      </dl>
    </article>
  `).join("");
}

function renderBooking() {
  const ritual = getSelectedRitual();
  const price = selectedPandit.pricing[ritual.name];
  selectedPanditPanel.innerHTML = `
    <div class="mini-profile">
      <div class="avatar" style="background-image: url('${selectedPandit.photo}')"></div>
      <div><strong>${selectedPandit.name}</strong><span>${selectedPandit.location} • Available ${selectedPandit.availability}</span></div>
    </div>
  `;
  summaryRitual.textContent = ritual.name;
  summaryDuration.textContent = ritual.duration;
  summaryPrice.textContent = price ? money(price) : "Select matching Pandit";
  requestStatus.textContent = "Draft";
  requestStatus.classList.remove("confirmed");
}

function renderBookingHistory() {
  bookingHistory.innerHTML = bookings.map((booking) => `
    <tr>
      <td>${booking.id}</td>
      <td>${booking.ritual}</td>
      <td>${booking.pandit}</td>
      <td>${booking.date} • ${booking.time}</td>
      <td><span class="table-status ${booking.status.toLowerCase().replaceAll(" ", "-")}">${booking.status}</span></td>
    </tr>
  `).join("");
}

function renderPanditRequests() {
  const pendingBookings = bookings.filter((booking) => booking.status === "Awaiting Pandit");
  panditRequests.innerHTML = pendingBookings.length ? pendingBookings.map((booking) => `
    <article class="request-card">
      <div><strong>${booking.ritual}</strong><span>${booking.id} • ${booking.date} at ${booking.time}</span></div>
      <div class="request-actions">
        <button type="button" data-accept="${booking.id}">Accept</button>
        <button type="button" data-reject="${booking.id}">Reject</button>
      </div>
    </article>
  `).join("") : '<div class="empty-state compact-empty">No pending booking requests.</div>';
}

function renderApprovals() {
  approvalList.innerHTML = pendingPanditProfiles.length ? pendingPanditProfiles.map((profile) => `
    <article class="approval-card">
      <div><strong>${profile.name}</strong><span>${profile.city} • ${profile.languages} • ${money(Number(profile.price))}</span></div>
      <span>${profile.status}</span>
      <button type="button" data-approve="${profile.id}">Approve</button>
    </article>
  `).join("") : '<div class="empty-state compact-empty">No provider profiles awaiting approval.</div>';
}

function updateMetrics() {
  document.querySelector("#verifiedCount").textContent = `${pandits.filter((pandit) => pandit.verified).length}+`;
  document.querySelector("#activeBookings").textContent = bookings.filter((booking) => booking.status !== "Rejected").length;
  document.querySelector("#pendingPandits").textContent = pendingPanditProfiles.length;
  document.querySelector("#monitoredBookings").textContent = bookings.length + 36;
}

function refreshAll() {
  renderPandits();
  renderBookingHistory();
  renderPanditRequests();
  renderApprovals();
  updateMetrics();
}

function setTomorrowAsDefault() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  dateInput.value = tomorrow.toISOString().slice(0, 10);
}

renderRitualOptions();
setTomorrowAsDefault();
renderRituals();
refreshAll();

document.querySelector("#startBookingButton").addEventListener("click", () => {
  document.querySelector("#booking").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#sendRequestButton").addEventListener("click", () => {
  const ritual = getSelectedRitual();
  bookings.unshift({
    id: `PC-${1044 + bookings.length}`,
    ritual: ritual.name,
    pandit: selectedPandit.name,
    date: dateInput.value,
    time: timeSelect.value,
    status: "Awaiting Pandit",
    locationType: locationTypeSelect.value,
    address: addressInput.value,
  });
  requestStatus.textContent = "Request sent";
  requestStatus.classList.add("confirmed");
  renderBookingHistory();
  renderPanditRequests();
  updateMetrics();
});

panditGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-select]");
  if (!button) return;
  selectedPandit = pandits.find((pandit) => pandit.id === button.dataset.select) || selectedPandit;
  renderPandits();
});

document.querySelector(".filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  document.querySelectorAll(".filter").forEach((filterButton) => filterButton.classList.remove("active"));
  button.classList.add("active");
  activeFilter = button.dataset.filter;
  if (activeFilter !== "all") ritualSelect.value = activeFilter;
  renderPandits();
});

citySelect.addEventListener("change", renderPandits);
ritualSelect.addEventListener("change", renderPandits);

panditRequests.addEventListener("click", (event) => {
  const acceptButton = event.target.closest("[data-accept]");
  const rejectButton = event.target.closest("[data-reject]");
  const targetId = acceptButton?.dataset.accept || rejectButton?.dataset.reject;
  if (!targetId) return;
  bookings = bookings.map((booking) => booking.id === targetId ? { ...booking, status: acceptButton ? "Confirmed" : "Rejected" } : booking);
  renderBookingHistory();
  renderPanditRequests();
  updateMetrics();
});

approvalList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-approve]");
  if (!button) return;
  pendingPanditProfiles = pendingPanditProfiles.filter((profile) => profile.id !== button.dataset.approve);
  renderApprovals();
  updateMetrics();
});

document.querySelector("#profileForm").addEventListener("submit", (event) => {
  event.preventDefault();
  pendingPanditProfiles.unshift({
    id: `pending-${Date.now()}`,
    name: document.querySelector("#profileName").value,
    city: document.querySelector("#profileCity").value,
    languages: document.querySelector("#profileLanguages").value,
    price: Number(document.querySelector("#profilePrice").value),
    status: "Pending review",
  });
  renderApprovals();
  updateMetrics();
  document.querySelector("#admin").scrollIntoView({ behavior: "smooth", block: "start" });
});
