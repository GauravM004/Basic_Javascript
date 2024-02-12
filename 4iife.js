// IIFE Immediately Invoked Function Expression 
// We use IIFE because when we want to execute any function Immediately
// There might be many reasons to do so but some of the reasons include

// 1. We want a database function to IIF as soon as the application is started
// 2. We dont want any global Scope to involve in our code so we use IIFE to avoid such a problem or POLLUTION and execute our code immediately

// IIFE Syntax
(function chai () {
    //named iife
    console.log(`DB CONNECTED`);
}) (); //Semi colon is needed to tell the compiler that the function should be stopped
// to write multiple iife put semi colon after each iife
( (name) =>  {
    console.log(`DB CONNECTED TWO ${name}`);
} )("Afshan"); // Arrow function IIFE

