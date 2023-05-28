let name = prompt("Enter your full name:");
let gender = prompt("Enter your gender:");
let age = parseInt(prompt("Enter your age:"));
let storyName = prompt("Enter the title of your story:");
let characterName = prompt("Enter the name of another character:");
let locate = prompt("Enter a location:");
let adjective = prompt("Enter an adjective:");
let verb = prompt("Enter a verb:");
let objectName = prompt("Enter the name of an object:");
let isTrue = prompt("true or false");

function trueStory() {
    let story = `My name is ${name}. I am ${gender}. I am ${age} years old. The title of my 
    story is ${storyName}. One day, ${characterName} and I went to ${locate}. It was 
    a ${adjective} place. We decided to ${verb} and found a mysterious ${objectName}. 
    It was an adventure of a lifetime, filled with excitement and unexpected twists.
    This is actually a ${isTrue} story`;
  
    return story;
  }
  
  let myStory = trueStory();
  print(myStory);