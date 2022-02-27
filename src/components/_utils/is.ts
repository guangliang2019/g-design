const opt = Object.prototype.toString;

export function isNumber(obj: any): obj is any[] {
  return opt.call(obj) === "[object Number]" && obj === obj;
}

export function isString(obj: any): obj is string {
  return opt.call(obj) === "[object String]";
}
