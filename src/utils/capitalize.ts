export const capitalize = (text: string | undefined) => {
  const _text = typeof text === 'string' ? text : '';
  return _text.charAt(0).toUpperCase() + _text.slice(1);
};
