export const formatId = (id: number, size = 3) => {
  let idFormatted = String(id);
  let counter = idFormatted.length;

  while (counter < size) {
    idFormatted = '0' + idFormatted;
    counter++;
  }

  return '#' + idFormatted;
};
