function myFunc(num){
    var m = num%2;
    var n = 1;
    var result = 0;
    
    for (n = 0; n < 5; n++) {
    result = result + (m*n);
    
    }
    return result;
    }

    console.log(myFunc(16))

// str="abc"
// temp = 456
// // alert(str);
// console.log(str+temp);

// let data = [
//     {ID:1},
//     {ID:2},
//     {ID:33},
//     {ID:66},
//     {ID:'abc'},
//     {ID:'xyz'},
//     {ID:'A1'}
// ]

// let newData = data.map((object, index) => {
//     if(typeof object.ID==='string') {
//        return index%2===0?object.ID.slice(0,object.ID.length/2):object.ID.repeat(2)} else if (typeof object.ID==='number') {
//             return index%2===0?object.ID/2:object.ID*2
//         } else {
//            return `Operation cannot be performed on datatype:${typeof object.ID}`
//         }
// });

// console.log(newData)



