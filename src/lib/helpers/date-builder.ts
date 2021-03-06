import {
	CALENDAR_WEEKS,
	getMonthDays,
	getMonthFirstDay,
	getNextMonth,
	getPreviousMonth,
	THIS_MONTH,
	THIS_YEAR,
	zeroPad
} from './date-helper';

export const buildCalendar = (month = THIS_MONTH, year = THIS_YEAR) => {
	const monthDays = getMonthDays(month, year);
	const monthFirstDay = getMonthFirstDay(month, year);

	const thisMonthDates = Array.from({length: monthDays + monthFirstDay}).map((_, i) => {
		const day = i + 1;
		if (day <= monthFirstDay) return [month, 0, year];

		return [month, day- monthFirstDay, year]
	});

	return thisMonthDates;
};

export default (month = THIS_MONTH, year = THIS_YEAR) => {
	// Get number of days in the month and the month's first day

	const monthDays = getMonthDays(month, year);
	const monthFirstDay = getMonthFirstDay(month, year);
	// Get number of days to be displayed from previous and next months
	// These ensure a total of 42 days (6 weeks) displayed on the calendar

	const daysFromPrevMonth = monthFirstDay - 1;
	const daysFromNextMonth = CALENDAR_WEEKS * 7 - (daysFromPrevMonth + monthDays);
	// Get the previous and next months and years

	const { month: prevMonth, year: prevMonthYear } = getPreviousMonth(month, year);
	const { month: nextMonth, year: nextMonthYear } = getNextMonth(month, year);
	// Get number of days in previous month
	const prevMonthDays = getMonthDays(prevMonth, prevMonthYear);
	// Builds dates to be displayed from previous month

	const prevMonthDates = [...new Array(daysFromPrevMonth)].map((n, index) => {
		const day = index + 1 + (prevMonthDays - daysFromPrevMonth);
		return [prevMonthYear, zeroPad(prevMonth, 2), zeroPad(day, 2)];
	});
	// Builds dates to be displayed from current month

	const thisMonthDates = [...new Array(monthDays)].map((n, index) => {
		const day = index + 1;
		return [year, zeroPad(month, 2), zeroPad(day, 2)];
	});
	// Builds dates to be displayed from next month

	const nextMonthDates = [...new Array(daysFromNextMonth)].map((n, index) => {
		const day = index + 1;
		return [nextMonthYear, zeroPad(nextMonth, 2), zeroPad(day, 2)];
	});
	// Combines all dates from previous, current and next months
	return [...prevMonthDates, ...thisMonthDates, ...nextMonthDates];
};
