const opt = Object.prototype.toString;

export function isNumber(obj: any): obj is any[] {
  return opt.call(obj) === "[object Number]" && obj === obj;
}

export function isString(obj: any): obj is string {
  return opt.call(obj) === "[object String]";
}

export function isUndefined(obj: any): obj is undefined {
  return obj === undefined;
}

export function isObject(obj: any): obj is { [key: string]: any } {
  return opt.call(obj) === '[object Object]';
}

export function isFunction(obj: any): obj is (...args: any[]) => any {
  return typeof obj === 'function';
}

export function isArray(obj: any): obj is any[] {
  return opt.call(obj) === '[object Array]';
}