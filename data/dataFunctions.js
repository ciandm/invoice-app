import data from './data.json';

export function getInvoiceById(id) {
  return data.filter(i => i.id === id)[0];
}

export function getAllInvoiceId() {
  return data.map(i => ({
    params: { id: i.id },
  }));
}
