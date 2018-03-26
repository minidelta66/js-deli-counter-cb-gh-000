var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';

}

function nowServing() {
  var person = katzDeliLine[0];
  katzDeliLine.shift[0];
  return person;
}
