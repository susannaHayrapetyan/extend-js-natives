/*
 * Add new 'removeLetters' function to String object,
 * which will remove all letters from string.
 * */

String.prototype.removeLetters = function() {

    return this.replace(/[a-z,A-Z]/g, '');
};

/*
 * Add new 'capitalize' function to String object,
 * which will set capital letter the first letter of string.
 * */

String.prototype.capitalize = function() {

    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

/*
 * Add new 'replaceAll' function to String object,
 * which will replace all searched strings.
 * */

String.prototype.replaceAll = function(term, replacement) {

    return this.split(term).join(replacement);
};

/*
 * Add new 'startsWith' function to String object if it doesn't exists,
 * which will check if string starts with searched string.
 * */

if(!String.prototype.startsWith) {

    String.prototype.startsWith = function(term) {

        return this.substr(0, term.length) === term;
    };
}

/*
 * Add new 'getDiff' function to Date object,
 * which will calculate and return difference between dates by given unit.
 * */

Date.prototype.getDiff = function(unit, date){
    var diff;
    date = date || new Date();
    unit = unit || 'm';

    switch(unit) {
        case 'd':
            diff = 24 * 60 * 60 * 1000;
            break;
        case 'h':
            diff = 60 * 60 * 1000;
            break;
        case 'm':
            diff = 60 * 1000;
            break;
    }

    return Math.round((date.getTime() - this.getTime())/diff);
};

/*
 * Add new 'getOnlyDate' function to Date object,
 * which will return date with time 00:00:00.
 * */

Date.prototype.getOnlyDate = function(){

    this.setHours(Math.abs(this.getTimezoneOffset()/60),0,0,0);

    return this;
};