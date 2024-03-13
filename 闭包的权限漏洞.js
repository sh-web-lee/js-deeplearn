var o = (function() {
  var obj = {
    a: 1,
    b: 2
  }
  // 防止外部修改obj
  // Object.setPrototypeOf(obj.prototype, null)
  return {
    get: function(k) {
      if (obj.hasOwnProperty(k)) {
        return obj[k]
      }
    }
  }
})()

// 不修改上面的代码，修改obj
// console.log(o.get('b'))

Object.defineProperty(Object.prototype, "hack", {
  get() {
    return this;
  }
})

const obj = o.get('hack');
obj.c = 'hehehe';

console.log(o.get('c'))
