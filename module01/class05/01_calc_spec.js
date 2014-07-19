describe("Calc", function() {
  var suma = 0;

  // custom matcher
  beforeEach(function() {
    suma = Calc.sumar(10, 15, 5);

    this.addMatchers({
      toResult: function(operation) {
        var expect = this.actual;

        var values = [].slice.call(arguments, 1),
            result = 0;

        for (var i = 0; i < values.length; i++) {
          if (operation === 'suma') {
            result = result + values[i];
          }
        }

        return expect === result;
      }
    });
  });

  it("debe sumar 2 o más valores", function() {
    expect(suma).toResult('suma', 10, 15, 5);
  });

  it("debe devolver el valor correcto", function() {
    expect(suma).toEqual(30);
  });

  it("debe devolver un número", function() {
    expect(typeof suma).toEqual('number');
  });

  it ("no debe sumar 1 valor", function() {
    expect(function() {
      Calc.sumar(10);
    }).toThrow();
  });
});

describe('Custom Matchers', function() {
  beforeEach(function() {
    this.addMatchers({
      toBeInstanceOf: function(constructor) {
        return this.actual instanceof constructor;
      },
      is: function(selector) {
        return this.actual.webkitMatchesSelector(selector);
      },
      isChildOf: function(parent) {
        return this.actual.parentNode === parent;
      }
    });
  })

  it("instanceof", function() {
    var fecha = new Date();
    expect(fecha).toBeInstanceOf(Object);
  });

  it("custom matcher", function() {
    expect(document.body).is('body');
  });
})