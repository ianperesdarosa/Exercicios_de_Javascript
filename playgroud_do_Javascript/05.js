const main = function(num)  {
    const process = num % 2;

    if (process == 0) {

        return `O número ${process} é Par`;
        
    } else {

        return `O número ${process} é ìmpar`;
    }
}

console.log(main(2));