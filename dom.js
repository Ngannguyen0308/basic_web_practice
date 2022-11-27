console.log('dom.js');

console.dir(window); 

//same as window.document
console.dir(document); 

window.addEventListener('load', function() { // bo sung nhiu hanh dong vao su kien tai td khac nhau
    console.dir(this.document);

    var myButton = document.getElementById('button-1');
    console.dir(myButton);

    var myOutPut = this.document.getElementsByClassName('my-text');
    console.dir(myOutPut);

    console.dir(myOutPut[1]);
    
    var myDiv = this.document.getElementsByTagName('div');
    console.dir(myDiv);
    console.dir(myDiv[0]);

    myDivButton = this.document.querySelector('div p');
    console.dir(myDivButton);


    var myOutputText = this.document.getElementById('output');
    myOutputText.innerHTML = 'different text';
    
})

