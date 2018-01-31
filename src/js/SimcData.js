let data;

if (window && window.SIMC_DATA) {
  data = window.SIMC_DATA;
}

export default data;

// quick check to see if JSON came through the global variable
export const validSimcData = () => {
  return data && data.git_revision;
};


