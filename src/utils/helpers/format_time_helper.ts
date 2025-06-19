type TimeParts = {
  hours: number;
  minutes: number;
  seconds: number;
};

function parseTime(timeStr: string): TimeParts | null {
  const regex = /^(\d{2}):(\d{2}):(\d{2})$/;
  const match = timeStr.match(regex);
  if (!match) return null;

  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  const seconds = Number(match[3]);

  if (
    hours < 0 || hours > 23 ||
    minutes < 0 || minutes > 59 ||
    seconds < 0 || seconds > 59
  ) {
    return null;
  }

  return { hours, minutes, seconds };
}

