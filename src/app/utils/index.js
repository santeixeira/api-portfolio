const rand = function() {
  return Math.random().toString(36).substr(2); // remove `0.`
};

export const id = function() {
  return rand() + rand() + new Date().toISOString(); // to make it longer
};
