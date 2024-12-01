export default function formatName(
    name: string | null,
    surname: string | null
  ): string {
    // Obtener el primer nombre completo
    const firstName = name?.split(" ")[0] || "";
  
    // Dividir el apellido en partes
    const surnameParts = surname?.split(" ") || [];
  
    // Obtener el primer apellido y la inicial del segundo apellido (si existe)
    const firstSurname = surnameParts[0] || "";
    const secondSurnameInitial = surnameParts[1]?.charAt(0).toUpperCase() || "";
  
    // Formatear el nombre con la inicial del segundo apellido
    return `${firstName} ${firstSurname} ${secondSurnameInitial ? secondSurnameInitial + "." : ""}`.trim();
  }
  