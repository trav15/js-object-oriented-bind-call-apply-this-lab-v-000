//Your code here

function justInvoke(func) {
  return func();
}

function setThisWithCall(fn, thisValue, arg) {
  return func.call(thisValue, arg);
}