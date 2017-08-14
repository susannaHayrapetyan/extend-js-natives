# extend-js-natives

This module added some necessary functions to javascript native objects.

## String.prototype.removeLetters()
Returns new string without letters.

## String.prototype.capitalize()
Returns new string with only its first character capitalized.

## String.prototype.replaceAll()
Returns new string with all matches of a pattern replaced by a replacement.

## String.prototype.startsWith()
Returns true if a string begins with the characters of another string, otherwise false.

## Date.prototype.getDiff(unit, date)
Returns difference between dates calculated by unit.
Unit value can be 'd' - day, 'h' - hour, 'm' - minute, by default it's calculating by minute.
Default value of date is current date.

## Date.prototype.getOnlyDate()
Returns date object with only date, time is 00:00:00(GMT).
