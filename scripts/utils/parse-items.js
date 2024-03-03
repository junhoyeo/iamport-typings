const parseItems = (haystack) => {
  const items = haystack.split('\n').flatMap((line) => {
    if (!line) {
      return [];
    }
    const firstQuoteIndex = line.indexOf('(');
    const key = line.substring(0, firstQuoteIndex).trim();

    let value = line.substring(firstQuoteIndex + 1).trim();
    if (value.endsWith(')')) {
      value = value.substring(0, value.length - 1);
    }
    return { key, value };
  });

  items.sort((a, b) => a.key.localeCompare(b.key));

  return items;
};

module.exports = {
  parseItems,
};
