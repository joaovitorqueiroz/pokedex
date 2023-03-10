export const formattedText = (text: string | undefined) => {
  if (!text || typeof text !== 'string') {
    return '';
  }
  // remove all white-spaces characters ([ \f\n\r\t\vā\u00a0\u1680ā\u2000ā-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff])
  return text.replace(/\s+/g, ' ').trim();
};
