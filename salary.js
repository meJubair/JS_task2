function salary1() {
    const salary = prompt("What is your hourly salary?");
    const hours = prompt("How many hours did you work today?");
    
    if (hours <= 7) {alert(`Total salary for today is ` + hours * salary);}

    else if (hours <= 9) {alert(`Total salary for today is ` + ((7 * salary) + ((hours-7) * (salary*1.5))));}

    else {alert(`Total salary for today is ` + (((7 * salary) + (2 * salary*1.5)) + ((hours-9) * (salary*2))));}

}

salary1()