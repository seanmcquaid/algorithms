let array = [5,2,6,1,4,3];
let sorted = false;

while(sorted === false){
    let count = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] > array[i+1]){
            let stash = array[i];
            array[i] = array[i+1];
            array[i+1] = stash;
            sorted = false;
            count++;
        }
    }
    if(count == 0){
        sorted = true;
    }
}
console.log(array);