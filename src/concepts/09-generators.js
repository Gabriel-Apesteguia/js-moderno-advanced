
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generationFunctionsComponent = ( element ) => {

    //const myGenerator = myFirstGeneratorFunction();
    //console.log( myGenerator.next() );
    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append( button );

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${ value }`;
    }


    button.addEventListener('click', renderButton);


}



function* idGenerator() {
    let currentId = 0;
    while(true) {
        yield ++currentId;
    }
}


/* 
function* myFirstGeneratorFunction() {

    yield 'Mi primer valor';
    yield 'Mi segundo valor';
    yield 'Mi tercer valor';
    yield 'Mi cuarto valor';
    
    return 'Ya no hay valores';
    yield 'Ya no se puede hacer nada';
}

 */


