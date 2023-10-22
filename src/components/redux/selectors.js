export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserName = (state) => state.auth.user.username;
export const selectIsRefreshing = (state) => state.auth.isFetchingCurrentUser; //loading
export const selectAreDealsLoading = (state) => state.deals.isLoading;
export const selectDeals = (state) => state.deals.deals;
