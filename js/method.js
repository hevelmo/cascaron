/*
  In this file will be present most of the hard programming and performance of
  The web application, here is the hard logic, handlers methods of the 
  DOM elements events.
  This section is used to declare global variables, with values used Throughout
  The system, especially those that keeps session variable values from php
*/


/* ------------------------------------------------------ *\
 [Variables] 'Zone'
\* ------------------------------------------------------ */



//var variable;




/* ------------------------------------------------------ *\
 [functions] 'Zone'
 function nameFunction (arg) {
 }
\* ------------------------------------------------------ */







/* ------------------------------------------------------ *\
 [functions] validateEmail
\* ------------------------------------------------------ */

function validateEmail(email) {
    var re = /^(([^<>()[\]\\., ;:\s@\"] + (\.[^<>()[\]\\., ;:\s@\"] + )*)|(\". + \"))@((\[[0-9] {1, 3}\.[0-9] {1, 3}\.[0-9] {1, 3}\.[0-9] {1, 3}\])|(([a-zA-Z\-0-9] + \.) + [a-zA-Z] {2, }))$/;
    //return re.test(email);
    return true;
}

/* ------------------------------------------------------ *\
 [functions] resetAlert
\* ------------------------------------------------------ */

//It performs whit alertify libary an css
function resetAlert () {
    alertify.set({
        labels : {
            ok     : "OK",
            cancel : "Cancel"
        },
        delay : 5000,
        buttonReverse : false,
        buttonFocus   : "ok"
    });
 }
 

/* ------------------------------------------------------ *\
 [functions] 'Zone'
 var Method = {
 function_name : function(event) {}
 }

 for event name event handlers methods use indicate the name
 of the event and the element afected
\* ------------------------------------------------------ */



/*Make a group of methods for each url defined in room.js, in order to control the elements events, 
  and the porformance of  each section. 
  Depending on the complexity of the url, could be more than one group of methods.
  Could exist some group of general methods*/

/* ------------------------------------------------------ *\
 [Methods] Home
\* ------------------------------------------------------ */

//This group of methods will be not used it's only example, remove it later
var demoMethods = {
    changeLan : function (event) {
        var lan, date, newDate;
        lan = PRO.getValue($(this));
        date = $(domEl.h3_demo_date).data('date');
        newDate = PRO.momentToRoman(date, lan);
        $(domEl.h3_demo_date).text(newDate);
    }
}

/* ------------------------------------------------------ *\
 [Methods] inputVal
\* ------------------------------------------------------ */

var inputValMetdods = {
    isIntegerKP: function (event) {
        return /\d/.test(String.fromCharCode(event.keyCode));
    }
}

