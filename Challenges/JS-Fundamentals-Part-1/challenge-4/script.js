const bill = prompt('What is the bill value ?', 50);

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

alert(`The bill was ${bill}, the tip was ${tip}, and the total value ${Number(bill) + tip}`);
