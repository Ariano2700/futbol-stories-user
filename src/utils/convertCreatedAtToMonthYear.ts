const convertCreatedAtToMonthYear = (createdAt: Date) => {
  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = date.toLocaleString('es-ES', { month: 'long' }); // Mes en español

  return {year, month};
};
export default convertCreatedAtToMonthYear;
