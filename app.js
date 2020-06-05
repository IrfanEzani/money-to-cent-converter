
function convert() {
    const number = document.getElementById('number').value;
    const result = document.getElementById('answer');
    let cents = number*100;
    let fifty,twenty,ten,five, balance;

    fifty = Math.floor(cents / 50);
    balance = Math.floor(cents % 50);
    twenty = Math.floor(balance / 20);
    balance = Math.floor(balance % 20);
    ten = Math.floor(balance / 10);
    balance = Math.floor(balance % 10);
    five = Math.floor(balance / 5);
    balance = Math.floor(balance % 5);


result.textContent = 'You got ' + fifty + ' 50 cents, ' + twenty + ' 20 cents, ' + ten + ' 10 cents, ' + five + ' 5 cents, and ' + balance + ' cents.'
return;
}