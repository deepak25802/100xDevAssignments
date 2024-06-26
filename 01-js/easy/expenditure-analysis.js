/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const ans = [];

  for(let i=0; i<transactions.length; i++) {
    const transaction = transactions[i];
    const category = transaction.category;
    const spent = transaction.price;

    const idx = ans.findIndex((ele) => ele.category === category);
    if(idx === -1)
      ans.push({"category": category, "totalSpent": spent});
    else 
      ans[idx]["totalSpent"] += spent;
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;
