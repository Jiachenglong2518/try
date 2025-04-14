var a = 'global'
var obj = {
  a: 2,
  fna: () => {
    console.log(this, 'fna');
    console.log(this.a);
  },
  foo() {
    console.log(this.a)
    return () => {
      console.log(this.a);
      console.log(this);
    }
  },
  foo1: function () {
    console.log(this.a);
    const fn = () => {
      console.log(this.a);
      console.log(this); 
    }
    fn()
  }
}

// obj.foo()()
// obj.fna()

const fn = obj.foo()
fn()

const globalFn = () => {
  console.log(this.a, 'globaFn');
}

const globalFn1 = function () {
  console.log(this.a, 'globalFn1');
}

globalFn()
globalFn1()