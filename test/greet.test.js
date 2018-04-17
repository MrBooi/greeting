describe('The greeting function', function() {
  it('should display "Aya" if entered name Aya in a textfield of name ', function() {
    var addToStorage = NamesGreetedLocalStorage();
    addToStorage.names("Aya");
    assert.equal(addToStorage.getName(), "Aya");

  });

  it('should display "English" if clicked on the radio button English ', function() {
    var addToStorage = NamesGreetedLocalStorage();
    addToStorage.langauge("English");
    assert.equal(addToStorage.getLangaunge(), "English");

  });
  it('should display "IsiXhosa" if clicked on the radio button IsiXhosa ', function() {
    var addToStorage = NamesGreetedLocalStorage();
    addToStorage.langauge("IsiXhosa");
    assert.equal(addToStorage.getLangaunge(), "IsiXhosa");

  });
  it('should display "Afrikaans" if clicked on the radio button Afrikaans ', function() {
    var addToStorage = NamesGreetedLocalStorage();
    addToStorage.langauge("Afrikaans");
    assert.equal(addToStorage.getLangaunge(), "Afrikaans");

  });

  it('should display "Molo, Xola" has a greet message if user entered Xola has a name and click on the radio button IsiXhosa ', function() {
    var addToStorage = NamesGreetedLocalStorage();
    addToStorage.names("Xola");
    addToStorage.langauge("IsiXhosa");
    assert.equal(addToStorage.message(), "Molo, Xola");

  });
  it('should display "Hello, Andre" has a greet message if user entered Xola has a name and click on the radio button IsiXhosa ', function() {
    var addToStorage = NamesGreetedLocalStorage();
    addToStorage.names("Andre");
    addToStorage.langauge("English");
    assert.equal(addToStorage.message(), "Hello, Andre");

  });
  it('should display "Hallo, Greg" has a greet message if user entered Xola has a name and click on the radio button IsiXhosa ', function() {
    var addToStorage = NamesGreetedLocalStorage();
    addToStorage.names("Greg");
    addToStorage.langauge("Afrikaans");
    assert.equal(addToStorage.message(), "Hallo, Greg");

  });

  it('should display  "2" has a number of counter if user greeted twice with different names ', function() {
    var addToStorage = NamesGreetedLocalStorage();
    addToStorage.names("Greg");
    addToStorage.langauge('IsiXhosa');
    addToStorage.greeted();
    addToStorage.names("Aya");
    addToStorage.greeted();
    assert.equal(addToStorage.counter(), 2);
  });


  it('should display "1" has a number of counter if user entered same name twice  ', function() {
    var addToStorage = NamesGreetedLocalStorage();
    addToStorage.names("Aya");
    addToStorage.langauge('IsiXhosa');
    addToStorage.greeted();
    addToStorage.names("Aya");
    addToStorage.langauge('IsiXhosa');
    assert.equal(addToStorage.counter(), 1);
  });

  it('should display this "{ Ezile: 0, Ayabonga: 0 }" object has an output if entered Ezile and Ayabonga has names   ', function() {
    var addToStorage = NamesGreetedLocalStorage();
    addToStorage.names("Ezile");
    addToStorage.langauge("Afrikaans");
    addToStorage.greeted();
    addToStorage.names("Ayabonga");
    addToStorage.langauge("Afrikaans");
    addToStorage.greeted();
    assert.deepEqual(addToStorage.nameMap(), { Ezile: 0, Ayabonga: 0 });

  });


});
