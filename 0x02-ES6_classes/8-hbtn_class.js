export default class HolbertonClass {
  constructor(size, location, teacher) {
    this._size = size;
    this._location = location;
    this._teacher = teacher;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return null;
  }
}
