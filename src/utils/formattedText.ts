export const formattedText = (text: string) => {
  // Line break remover
  return text.replace(/(\r\n|\r)/gm, '').replace(/(\n)/gm, ' ');
};
