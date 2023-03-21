window.customerName = 'bob';
function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}
window.bestCustomer = undefined;
function setBestCustomer() {
  window.bestCustomer = 'not bob';
}
window.bestCustomer = undefined;
function overwriteBestCustomer(newCustomer) {
  window.bestCustomer = newCustomer;
}
const leastFavoriteCustomer = 'bob';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'not bob';
}