

// for(let i = 0; i<5; i++){
//     document.write('in loop ', i,`<br />`);
// }

// document.write("loop complete")

// const names = ['sentai', 'super', 'toku'];

// // for(let i=0; i<names.length; i++){
// //     // console.log(names[i]);
// //     let html = `<div> ${names[i]} </div>`;
// // }

// let i=0

// // while(i<5){
// //     document.write('in loop ', i,`<br />`);
// //     i++;
// // }

// // document.write("loop complete")

// // while(i<names.length){
// //     console.log(names[i]);
// //     i++;
// // }


// const speak = function(name = "Ryuuranger", time="day"){
//     console.log(`good ${time}, ${name}`)
// };

// speak();

// speak("Shishiranger","morning");

// const speak = (name = "Ryuuranger", time="day") => {
//     console.log(`good ${time}, ${name}`)
// };

// speak();

// speak("Shishiranger","morning");


// const myFunc = (callbackFunc) =>{
//     let value=50;
//     callbackFunc(value);
// };

// myFunc(value => {
//     console.log(value);
// });

// let changeman = ['Dragon','Pegasus','Griffon','Mermaid','Phoenix'];

// const rollCall = (man, index) => {
//     console.log(`${index} - Change ${man}!`)
// }

// changeman.forEach(rollCall);

// changeman.forEach((man,index)=> {
//     console.log(index, man);
// });

// const ul = document.querySelector('.changeman');

// let html = ``;

// changeman.forEach(function(man){

//     html += `<li style="color:gold"><h3>Change ${man}!</h3></li>`;
// });

// changeman.forEach(man => {

//     html += `<li style="color:gold"><h3>Change ${man}!</h3></li>`;
// });

// ul.innerHTML = html;


// let sentai = {

//     genre: 'tokusatsu',
//     age: 45,
//     company: 'Toei',
//     shows: [
//         {title: 'Liveman', year: 1988},
//         {title: 'Jetman', year: 1991},
//         {title: 'Sun Vulcan', year: 1981}
//     ],
    // logShows: function(){
    //     console.log('The following are shows in sentai:');
    //     this.shows.forEach(show => {
    //         console.log(show);
    //     })
    // }
//     logShows(){
//         console.log('The following are shows in sentai:');
//         this.shows.forEach(show => {
//             console.log(show.title, show.year);
//         });
//     }
// };

// sentai.logShows();

// const para = document.querySelector('.error');
// console.log(para);

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para);
// });

// console.log(paras[0]);

// const title = document.getElementById('page-title');
// console.log(title);

// const SS = document.getElementsByClassName('SS');
// console.log(SS);
// console.log(SS[1]);

// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// const para = document.querySelector('p');

// console.log(para.innerText);

// para.innerText += " Hikounin Sentai Akibaranger";

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

// const content = document.querySelector('.content');

// console.log(content.innerHTML);

// content.innerHTML += '<h2> Kanpei Kuroda </h2>';

// const choujin = ['ryu', 'gai', 'ako', 'raita', 'kaori'];

// choujin.forEach(seigiChoujin => {
//     content.innerHTML += `<p>${seigiChoujin}</p>`;
// });

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://thaddiusgorges.com');
// link.innerText = 'T Bone!';

// const inspire = document.querySelector('p');
// console.log(inspire.getAttribute('class'));
// inspire.setAttribute('class', 'overcome');
// console.log(inspire.getAttribute('class'));
// inspire.setAttribute('style', 'color:gold');

const errorText = document.querySelector('.error');

errorText.style.color = 'red';

errorText.style.fontWeight = '';





