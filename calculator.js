x = 5
y = 3
operation = '-'
if (typeof x != 'number')
    console.log('Correct the first variable');
else
    if (typeof y != 'number')
        console.log('Correct the second variable');
switch (operation) {
    case '+':
        console.log(x+y);
        break;
    case '-':
        console.log(x-y);
        break;
    case '/':
        console.log(x/y);
        break;
    case '*':
        console.log(x*y);
        break;
    default:
        console.log('Incorrect expression')
}