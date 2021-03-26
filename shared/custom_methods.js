let oneMonthFromNow = () => {
	let date = new Date();
	let targetMonth = date.getMonth() + 1;
	date.setMonth(targetMonth);
	if (date.getMonth() !== targetMonth % 12) date.setDate(0); // last day of the previous month
	return date;
};

module.exports = { oneMonthFromNow };
