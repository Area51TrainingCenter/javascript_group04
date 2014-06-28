function funcion1() {
  console.log('funcion1', this);
}

var obj = {
  funcion2 : function() {
    console.log('funcion2', this);
  }
};

function funcion3() {
  console.log('funcion3', this);
}

funcion1();
funcion1.apply(obj);
obj.funcion2();
new funcion3();