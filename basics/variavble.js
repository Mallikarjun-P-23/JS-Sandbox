const accountId = 14
let accountEmail = "mallu@example.com"
var accountPassword = "12345"
accountCity = "dwh"
let accountState;

// accountId = 2 // not allowed
accountEmail = "hc@.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])