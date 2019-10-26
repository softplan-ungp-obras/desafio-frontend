export default {
  limitText(text, limit = 50) {
    return text.slice(0, limit) + (text.length > limit ? '...' : '');
  },
};
