/** "1 resenha", "4 resenhas". Portuguese uses the plural for zero too. */
export function plural(count: number, one: string, many: string): string {
  return `${count} ${count === 1 ? one : many}`;
}
