describe('The greeting function', function() {
  it('should display  ', function() {
    var addToStorage = namesGreetedLocalStorage();
    addToStorage.names("Greg");
    addToStorage.langauge('IsiXhosa');
    addToStorage.greeted();
    assert.equal(addToStorage.message(), "Molo, Greg");
    assert.equal(addToStorage.counter(), 1);
  });

  // it('should display   ', function() {
  //   var addToStorage = namesGreetedLocalStorage();
  //     addToStorage.names("Ezile", "English");
  //   addToStorage.langauge("Ayabonga", "English");
  //    addToStorage.greeted();
  //    localStorage.setItem("Names", JSON.stringify(addToStorage.nameMap()));
  //    assert.equal(addToStorage.message(), "Hello, Ezile");
  //   assert.equal(addToStorage.message(), "Hello, Ayabonga");
  //   assert.equal(addToStorage.counter(), 1);
  //
  //
  // });


  // it('should display   ', function() {
  //   var addToStorage = namesGreetedLocalStorage();
  //   addToStorage.greeted("Ayabonga", "English");
  //   addToStorage.greeted("Ezile", "English");
  //   addToStorage.greeted("Greg", "IsiXhosa");
  //   assert.equal(addToStorage.message(), "Hello, Ezile");
  //   assert.equal(addToStorage.message(), "Hello, Ayabonga");
  //   assert.equal(addToStorage.message(), "Molo, Greg");
  //   assert.equal(addToStorage.counter(), 3);
  //
  //
  // });

});
