const opt = Object.prototype.toString;

export function isNumber(obj: any): obj is any[] {
  return opt.call(obj) === '[object Number]' && obj === obj
}