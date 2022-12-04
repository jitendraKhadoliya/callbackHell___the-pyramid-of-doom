const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");



setTimeout(()=>{
    heading1.textContent = "changed Heading One";
    heading1.style.color = "red";
    setTimeout(()=>{
        heading2.textContent = "changed Heading One";
        heading2.style.color = "red";
        setTimeout(()=>{
            heading3.textContent = "changed Heading One";
            heading3.style.color = "red";
            setTimeout(()=>{
                heading4.textContent = "changed Heading One";
                heading4.style.color = "red";
                setTimeout(()=>{
                    heading5.textContent = "changed Heading One";
                    heading5.style.color = "red";
                    setTimeout(()=>{
                        heading6.textContent = "changed Heading One";
                        heading6.style.color = "red";
                            
                    },1000) 
                },200)
            },1000)
                
        },1000)        
    },2000)
},1000)





// console.log(heading1);
// function myData(element,text,color,time,onSuccessCallback,onFailureCallBack){
//     setTimeout(()=>{
//         if(element){
//             element.textContent = text;
//             element.style.color = color;
//         }

//         if(onSuccessCallback){
//             onSuccessCallback();
//         }
//         else{
//         if(onFailureCallBack){
//             onFailureCallBack();
//         }
//     }
//     },time)
// }

// myData(heading1,"one","blue",1000,()=>{
//     myData(heading2,"two","red",1000,()=>{
//         myData(heading3,"three","orenge",1000,()=>{
//             myData(heading4,"four","pink",1000,()=>{
//                 myData(heading5,"five","voilet",1000,()=>{
//                     myData(heading6,"six","blue",1000,()=>{
    
//                     },()=>{
//                         console.log("error at heading 6")
//                     })
//                 },()=>{
//                     console.log("error at heading 5")
//                 })
//             },()=>{
//                 console.log("error at heading 4")
//             })
//         },()=>{
//             console.log("error at heading 3")
//         })
//     },()=>{
//         console.log("error at heading 2")
//     })
// },()=>{
//     console.log("error at heading 1")
// })