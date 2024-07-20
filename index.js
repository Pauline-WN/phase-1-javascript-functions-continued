// code your solution here
// Define saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define mondayWork function
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Define wrapAdjective function
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example Tests
  console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("read a book")); // "This Saturday, I want to read a book!"
  
  console.log(mondayWork()); // "This Monday, I will go to the office."
  console.log(mondayWork("attend a meeting")); // "This Monday, I will attend a meeting."
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer")); // "You are !!!a dedicated programmer!!!"
  console.log(wrapAdjective("%")("a dedicated programmer")); // "You are %a dedicated programmer%!"
  
