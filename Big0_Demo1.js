const all = ['cat', 'pill', 'sebastian', 'frankly', 'rivers', 'gonna', 'play', 'nemo'];
const large = new Array(100000).fill('nemo');
const findNemo = (array)=>{
    let t0 = new Date();
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('Nemo has founded');
        }
    }
    let t1 = new Date();
    console.log('Finded in: ' +  (t1 - t0) + ' milliseconds');

}

findNemo(large); // Our first O(n) notation, equal the numbers of elements and steps to find

