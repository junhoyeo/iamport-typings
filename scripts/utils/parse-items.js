const parseItems = (haystack) => {
  const items = haystack.split('\n').flatMap((line) => {
    if (!line) {
      return [];
    }
    const firstQuoteIndex = line.indexOf('(');
    const key = line.substring(0, firstQuoteIndex).trim();
    const value = line
      .substring(firstQuoteIndex + 1)
      .replace(')', '')
      .trim();
    return { key, value };
  });

  items.sort((a, b) => a.key.localeCompare(b.key));

  return items;
};

module.exports = {
  parseItems,
};
