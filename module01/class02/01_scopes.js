var variable0 = 10;

function funcion1() {
  var variable1 = 100;

  function funcion2() {
    var variable2 = 20;
    console.log('funcion2', variable1);

    function funcion3() {
      console.log('funcion3', variable2);
    }

    funcion3();
  }

  function funcion4() {
    console.log('funcion4', variable2);
  }

  funcion2();
  funcion4();
  console.log('funcion1:variable0', variable0);
  console.log('funcion1', variable2);
};

funcion1();
console.log('global', variable1);