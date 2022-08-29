function toMoney(value: string): number {
  return parseFloat(value.replace(/[^\d\.-]/g, ""));
}
export { toMoney };
