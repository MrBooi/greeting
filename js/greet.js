var enteredName = document.querySelector('.inputName');
var counterOfNameElement = document.querySelector('.counter');
var greetMeBtn = document.querySelector('.GreetBtn');
var displayNameElement = document.querySelector('.displayName');
var greetLangaugeElement = document.querySelector('.greet');
var clearBtn = document.querySelector('.clear');

function NamesGreetedLocalStorage(storedUsers) {
  var namesGreeted = {};
  var name = "";
  var lang = "";

  function setname(value) {
    if (value !== " ") {
      name = value;
    }
  }

  function setLang(value) {
    lang = value;
  }

  function setGreeted() {
    if (storedUsers) {
      namesGreeted = storedUsers;
    }
    if (name !== "") {
      if (namesGreeted[name] === undefined) {
        namesGreeted[name] = 0;
      }
    }
  }

  function greet() {
    if (lang === "English") {
      return "Hello, " + name;
    } else if (lang === "Afrikaans") {
      return "Hallo, " + name;
    }
    if (lang === "IsiXhosa") {
      return "Molo, " + name;
    }
  }

  function getName() {
    return name;
  }

  function getLang() {
    return lang;
  }

  function getNamesList() {
    return namesGreeted;
  }

  function restNamesList() {
    return namesGreeted = {};
  }

  function CounterNames() {
    return Object.keys(namesGreeted).length;
  }

  return {
    names: setname,
    langauge: setLang,
    greeted: setGreeted,
    getName: getName,
    getLangaunge: getLang,
    message: greet,
    nameMap: getNamesList,
    counter: CounterNames,
    reset: restNamesList
  }
}

var storedUsers = localStorage.getItem('Names') ? JSON.parse(localStorage.getItem('Names')) : {};
var addToStorage = NamesGreetedLocalStorage(storedUsers);
counterOfNameElement.innerHTML = Object.keys(storedUsers).length;

function addBtn() {
  var radioCheck = document.querySelector("input[name='langauge']:checked");
  var enterLangauge = radioCheck.value;
  var name = enteredName.value.trim();
  addToStorage.names(name);
  addToStorage.langauge(enterLangauge);
  addToStorage.greeted();
  localStorage.setItem("Names", JSON.stringify(addToStorage.nameMap()));
  counterOfNameElement.innerHTML = addToStorage.counter();
  displayNameElement.innerHTML = addToStorage.message();
  enteredName.value = "";
  if (name == "") {
    displayNameElement.innerHTML = "Enter name and choose langauge";
    displayNameElement.classList.add("danger");

  }
}

function clearClicked() {
  localStorage.clear();
  addToStorage.reset();
  window.location.reload();
  counterOfNameElement.innerHTML = addToStorage.counter();
  displayNameElement.innerHTML = "Enter name and choose langauge";
  console.log(localStorage.clear());
}



greetMeBtn.addEventListener("click", addBtn);
clearBtn.addEventListener("click", clearClicked);









// function namesGreetedLocalStorage(storedUsers) {
//   var namesGreeted = {};
//   var name = "";
//   var lang = "";
//   var greetMessage = "";
//
//   function setInfo(value, langauge) {
//     name = value;
//     if (storedUsers) {
//       namesGreeted = storedUsers;
//     }
//     if (namesGreeted[name] === undefined) {
//       namesGreeted[name] = 0;
//     }
//     lang = langauge;
//     if (lang === "English") {
//       greetMessage = "Hello, " + name;
//     } else if (lang === "Afrikaans") {
//       greetMessage = "Hallo, " + name;
//     }
//     if (lang === "IsiXhosa") {
//       greetMessage = "Molo, " + name;
//     }
//
//   }
//   function displayMessage() {
//
//     return greetMessage;
//   }
//
//   function getNamesList() {
//     return namesGreeted;
//   }
//
//   var CounterNames = function () {
//     return Object.keys(namesGreeted).length;
//   }
//
//   return {
//     greeted: setInfo,
//     message: displayMessage,
//     nameMap: getNamesList,
//     counter: CounterNames
//   }
// }
//
// // retriving old stored names
// var storedUsers = localStorage.getItem('Names') ? JSON.parse(localStorage.getItem('Names')) : {};
// var addToStorage = namesGreetedLocalStorage(storedUsers);
//
//
// function addBtn() {
//   var radioCheck = document.querySelector("input[name='langauge']:checked");
//
//   var name = enteredName.value;
//
//   if (name !== "" && radioCheck !== null) {
//     var enterLangauge = radioCheck.value;
//     addToStorage.greeted(name, enterLangauge);
//     localStorage.setItem("Names", JSON.stringify(addToStorage.nameMap()));
//     counterOfNameElement.innerHTML = addToStorage.counter();
//     displayNameElement.innerHTML = addToStorage.message();
//   }
//
// }
