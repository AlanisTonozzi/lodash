/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 */
const chunk = (array, size = 1) => {
  let i = 0;
  const chunks = [];

  while (i < array.length) {
    const chunk = [];
    while (chunk.length < size && i < array.length) {
      chunk.push(array[i]);
      i++;
    }
    chunks.push(chunk);
  }

  return chunks;
};

module.exports = chunk;
