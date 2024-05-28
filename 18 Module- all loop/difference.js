// for(i=0; i<=20; i++){
//     console.log(i)
// }
// for(i=0; i<=20; i=i+1 ){
//     console.log(i)
// }
// for(i=0; i<=20; i += 1 ){
//     console.log(i)
// }


// even number

// for(i=0; i<=20; i=i+ 2 ){
//     console.log(i)
// }

// for(i=0; i<=20; i=i+1 ){
//     if(i % 2 ===0){
//         console.log(i);
//     }
// }


// for(i=0; i<=20; i=i+1 ){
//     if(i % 2 !==1){
//         console.log(i);
//     }
// }


// let i=0;
// while( i<=20 )
// {
//     if (i%2===0){
//         console.log(i);

//     }
//     i = i+1;
// }

// let i=0;
// while( i<=20 )
// {
//     if ( i % 2 !==1){
//         console.log(i);

//     }
//     i = i+1;
// }


// ODD number

// for(i=1; i<=20; i=i+ 2 ){
//     console.log(i)
// }

// for(i=0; i<=20; i=i+1 ){
//     if(i % 2 ===1){
//         console.log(i);
//     }
// }


// for(i=0; i<=20; i=i+1 ){
//     if(i % 2 !==0){
//         console.log(i);
//     }
// }


// let i=0;
// while( i<=20 )
// {
//     if (i%2===1){
//         console.log(i);
//     }
//     i = i+1;
// }

// let i=0;
// while( i<=20 )
// {
//     if ( i % 2 !==0){
//         console.log(i);

//     }
//     i = i+1;
// }


// for ( i= 0; i<=30; i++){
//     if( i % 5===0){
//         console.log(i)
//     }
// }

// for (i=0; i<=30; i++){
//     if( i % 3===0){
//         console.log(i)
//     }
// }
// for (i=0; i<=30; i++){
//     if( i % 3===0 || i% 5===0){
//         console.log(i)
//     }
// }
// for (i=0; i<=100; i++){
//     if( i % 3===0 && i% 5===0){
//         console.log(i)
//     }
// }


let total =0;
for(i=1; i<=30; i++){
    if(i%3===0){
       console.log(i)
        total= total + i ;
        console.log('Total', total)
    }
}
console.log('Total', total)