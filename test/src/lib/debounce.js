export function debounce(fn, delay) {
  let timeoutID = null;
  return function() {
    clearTimeout(timeoutID);
    const args = arguments;
    const _this = this;
    timeoutID = setTimeout(function() {
      fn.apply(_this, args);
    }, delay);
  };
};