// eslint-disable-next-line no-extend-native
Number.prototype.toNaira = function() {
  return this / 100;
};

// eslint-disable-next-line no-extend-native
Number.prototype.toKobo = function() {
  return this * 100;
}

// eslint-disable-next-line no-extend-native
String.prototype.toKobo = function() {
  return this * 100;
};

// eslint-disable-next-line no-extend-native
String.prototype.toNaira = function() {
  return this / 100;
}