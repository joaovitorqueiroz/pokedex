export const formattedText = (text: string | undefined) => {
  const _text = typeof text === 'string' ? text : '';
  // Line break remover
  return _text.replace(/(\r\n|\r)/gm, '').replace(/(\n)/gm, ' ');
};
