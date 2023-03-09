export const convertUtcToLocal = (utcDate: string) => {
    const date = new Date(utcDate);
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone,
    };
    return date.toLocaleString(undefined, options);
  };
  