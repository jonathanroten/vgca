export const initCurrentTime = () => {
  const now = new Date();
  const months = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May.',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.',
  ];
  const month = months[now.getMonth()];
  const day = String(now.getDate()).padStart(2, '0');

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const meridiemType = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedMinutes = String(minutes).padStart(2, '0');

  // Format: "Month Day, HH:MM AM/PM"
  const formattedTime = `${month} ${day} — ${hours}:${formattedMinutes} ${meridiemType}`;

  const currentTimeElement = document.getElementById('current-time');
  if (currentTimeElement) {
    currentTimeElement.textContent = formattedTime;
  } else {
    console.error('current-time element not found');
  }
};
