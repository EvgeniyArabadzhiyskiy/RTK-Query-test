// const getName = state => state.auth.user.name;
const getIsLOggedIn = state => state.auth.isLoggedIn;
// const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser




const authSelectors = {
  // getName,
  getIsLOggedIn,
  // getIsFetchingCurrent,
};

export default authSelectors;