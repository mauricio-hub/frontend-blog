export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Agrega ceros iniciales si es necesario
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };