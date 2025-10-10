function outer() {
  let count = 0; // 外部变量
  let a = '2'
  function inner() {
    count++;
    console.log(count);
    console.log(this);
    console.log(this.a)
  }

  return inner;
}
const a = '1'

const d = outer()
d()
