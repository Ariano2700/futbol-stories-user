const formatFirebaseTimestamp = (
  timestamp: { _seconds: number; _nanoseconds: number } | Date | string
): string => {
  let date: Date;

  if (timestamp instanceof Date) {
    date = timestamp; // Si es un objeto Date, úsalo directamente
  } else if (typeof timestamp === "string") {
    date = new Date(timestamp); // Convertir cadena ISO a Date
  } else {
    date = new Date(timestamp._seconds * 1000); // Convertir segundos a milisegundos
  }

  if (isNaN(date.getTime())) {
    throw new Error("Invalid timestamp provided");
  }

  const day = date.getDate(); // Día del mes
  const month = date.toLocaleString("es-ES", { month: "long" }); // Mes en texto
  const year = date.getFullYear(); // Año

  return `${day} de ${month} del ${year}`;
};

export default formatFirebaseTimestamp;
