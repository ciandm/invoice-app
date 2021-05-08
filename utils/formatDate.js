import addDays from 'date-fns/addDays';
import getDate from 'date-fns/getDate';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import parseISO from 'date-fns/parseISO';

const formatDate = date => {
  // eslint-disable-next-line
  let [year, month, day] = date.split('-');
  if (month === '01' || month === 1) {
    month = 'Jan';
  }
  if (month === '02' || month === 2) {
    month = 'Feb';
  }
  if (month === '03' || month === 3) {
    month = 'Mar';
  }
  if (month === '04' || month === 4) {
    month = 'Apr';
  }
  if (month === '05' || month === 5) {
    month = 'May';
  }
  if (month === '06' || month === 6) {
    month = 'Jun';
  }
  if (month === '07' || month === 7) {
    month = 'Jul';
  }
  if (month === '08' || month === 8) {
    month = 'Aug';
  }
  if (month === '09' || month === 9) {
    month = 'Sep';
  }
  if (month === '10' || month === 10) {
    month = 'Oct';
  }
  if (month === '11' || month === 11) {
    month = 'Nov';
  }
  if (month === '12' || month === 12) {
    month = 'Dec';
  }

  return `${day} ${month} ${year}`;
};

export const getPaymentDueDate = (date, terms = 7) => {
  const paymentDueDate = addDays(parseISO(date), terms);
  const year = getYear(paymentDueDate);
  // month begins from 0 so need to account for this in return statement below
  const month = getMonth(paymentDueDate);
  const day = getDate(paymentDueDate);
  return `${year}-${month < 10 ? `0${month + 1}` : month + 1}-${
    day < 10 ? `0${day}` : day
  }`;
};

export default formatDate;
