let age = prompt("your age is");

if (age < 18) {
  alert("too young");
} else if (age < 27) {
    alert("right age for military service");
}
else if (age < 41) {
    alert("you are in reserve");
}
else if (age < 55) {
    alert("you are in backup reserve");
}
else {
  alert("too aged");
}