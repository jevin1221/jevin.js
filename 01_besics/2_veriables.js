const accountId = "12-01"
let accountEmail = "jevin@Email.com"
var accountPassword = "21-04"
accountCity = "surat"
let accountState;

// accountId = 2// not  allowed

// prefer not to use var 
// beccause of issue in block scope and funcatinol scope.

accountEmail = "je@.com"
accountPassword = "21-04"
accountCity = "junagadh"

console.log(accountId);

console.table([accountId,accountEmail ,accountPassword ,accountCity , accountState])