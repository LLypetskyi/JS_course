// // Створіть функцію, яка додає 3 цифри і виводить результат в перемінну, в консоль, в алерт

console.log(" ----------------------------------");

let testObject = {
  key1: "first value",
  key2: "second value",
  key3: "third value",
  key4: "fourth value",
};

let myConsoleObject = {
  info: function info(object) {
    console.info(
      'This is an example of how works some "console info-function"- ',
      object
    );
    console.log(" ----------------------------------");
  },
  table: function table(object) {
    console.log(
      'This is an example of how works some "console table-function"- '
    );
    console.table(object);
    console.log(" ----------------------------------");
  },
  assert: function assert(object) {
    console.log(
      'This is an example of how works some "console assert-function", Assertion failed becouse condition 5 === 6 return false'
    );
    console.assert(5 === 6, object);
    console.log(" ----------------------------------");
  },
  count: function count(object) {
    console.log(
      'This is an example of how works some "console count-function", displays a number of times this function is called'
    );
    console.count(object);
    console.log(" ----------------------------------");
  },
  countReset: function countReset(string) {
    console.log(
      'This is an example of how works some "console countReset-function", resets the counter value.'
    );
    console.countReset("string");
    console.log(" ----------------------------------");
  },
  debug: function debug(object) {
    console.log(
      'This is an example of how works some "console debug-function"'
    );
    console.debug(object);
    console.log(" ----------------------------------");
  },
  dir: function dir(object) {
    console.log('This is an example of how works some "console dir-function"');
    console.dir(object);
    console.log(" ----------------------------------");
  },
  dirxml: function dirxml(object) {
    console.log(
      'This is an example of how works some "console dirxml-function", displays an interactive tree from the children of the specified XML / HTML element'
    );
    console.dirxml(object);
    console.log(" ----------------------------------");
  },
  error: function error(object) {
    console.log(
      'This is an example of how works some "console error-function"'
    );
    console.error(object);
    console.log(" ----------------------------------");
  },
  log: function log() {
    console.log('This is an example of how works some "console log-function"');
    console.log("This is some explanation of the parameter");
    console.log(" ----------------------------------");
  },
  time: function time() {
    console.log('This is an example of how works some "console time-function"');
    console.time("answer time");
    alert("Click to continue");
    console.timeLog("answer time");
    alert("Do a bunch of other stuff...");
    console.timeEnd("answer time");
    console.log(" ----------------------------------");
  },
  trace: function trace() {
    console.log(
      'This is an example of how works some "console trace-function"'
    );
    console.trace();
    console.log(" ----------------------------------");
  },
  warn: function warn() {
    console.log('This is an example of how works some "console warn-function"');
    console.warn("Be carefully");
    console.log(" ----------------------------------");
  },

  groupCollapsed: function groupCollapsed() {
    console.log(
      'This is an example of how works some "console groupCollapsed-function"'
    );
    console.log("This is the outer level");
    console.groupCollapsed();
    console.log("Level 2");
    console.groupCollapsed();
    console.log("Level 3");
    console.log(" ----------------------------------");
  },
  group: function group() {
    console.log(
      'This is an example of how works some "console group-function"'
    );
    console.log("This is the outer level");
    console.group();
    console.log("Level 2");
    console.group();
    console.log("Level 3");
    console.log(" ----------------------------------");
  },
  groupEnd: function groupEnd() {
    console.log(
      'This is an example of how works some "console groupEnd-function"'
    );
    console.log("This is the outer level");
    console.group();
    console.log("Level 2");
    console.group();
    console.log("Level 3");
    console.log(" ----------------------------------");
  },
};

// Метод console.assert() записывает сообщение об ошибке в консоль
// в случае, если утверждение ложно. Если утверждение истинно - ничего не происходит.
myConsoleObject.info(testObject);
myConsoleObject.table(testObject);
myConsoleObject.assert(testObject);
myConsoleObject.count(testObject);
myConsoleObject.countReset("testObject");
myConsoleObject.debug(testObject);
myConsoleObject.dir(testObject);
myConsoleObject.dirxml(testObject);
myConsoleObject.error(testObject);
myConsoleObject.log("testObject");
myConsoleObject.time(testObject);
myConsoleObject.trace();
myConsoleObject.warn();
myConsoleObject.log(
  "methods such as groupCollapsed, group, groupEnd - output nested information about the parameter by levels"
);
myConsoleObject.groupCollapsed(testObject);
myConsoleObject.group(testObject);
myConsoleObject.groupEnd(testObject);
