function updateClock() {
  const now = new Date();

  let hours = now.getHours(); // 0–23
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12; // converts 0–23 to 0–11
  // keep 0 as 0, since you want 0:xx:xx format

  const pad = (n) => n.toString().padStart(2, "0");

  document.getElementById("clock").textContent =
    `${hours}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
}

updateClock();
setInterval(updateClock, 1000);

function formatExpiry() {
  const now = new Date();

  // move to the next day
  const expiry = new Date(now);
  expiry.setDate(now.getDate() + 1);
  expiry.setHours(2, 0, 0, 0); // 2:00 AM

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = months[expiry.getMonth()];
  const day = expiry.getDate(); // 1–2 digits naturally
  const year = expiry.getFullYear(); // 4 digits

  let hours = expiry.getHours();
  const minutes = expiry.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;

  const pad = (n) => n.toString().padStart(2, "0");

  document.getElementById("expiry").textContent =
    `Expires ${month} ${day}, ${year} at ${hours}:${pad(minutes)} ${ampm}`;
}
formatExpiry();
