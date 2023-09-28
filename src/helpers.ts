import _isObject from 'lodash/isObject';
import _isArray from 'lodash/isArray';

export const any = <T>(array: T[]): boolean => array.some((val) => !!val);
export const isArray = (value: unknown): value is [] => _isArray(value);
export const isObject = (value: unknown): value is Record<string, unknown> => _isObject(value) && !isArray(value);
export const anyValues = (obj: unknown): boolean => (isObject(obj) ? any(Object.values(obj)) : false);