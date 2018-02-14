var Bank = function() {
  this.accounts = [];
}

Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
}

Bank.prototype.accountByName = function(name){
  const foundAccount = this.accounts.filter(function(account){
    return account.name === name;
  });
  return foundAccount[0];
}

Bank.prototype.largestAccount = function(){
  const largestValue = this.accounts.reduce(function(largest, currentAccount){
    return currentAccount.value > largest.value? currentAccount : largest;
  });
  return largestValue;
}

Bank.prototype.payInterest = function(){
  const result = this.accounts.map(function(account){
    account.value *= 1.10;
    return account;
  });
  this.accounts = result;
}

Bank.prototype.businessAccounts = function(){
  const result = this.accounts.filter(function(account){
    return account.type === 'business';
  });
  return result;
}

Bank.prototype.totalValue = function(){
  const total = this.accounts.reduce(function(runningTotal, account){
    return runningTotal + account.value;
  }, 0);
  return total;
}

Bank.prototype.averageValue = function(){
  const total = this.totalValue();
  return total / this.accounts.length;
}

module.exports = Bank;
