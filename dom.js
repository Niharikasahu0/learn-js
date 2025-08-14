// // PART 1
// // Dom =document object model
// // as a map of your webpage.
// // DOM manipulation
// // 1. selecting with id
// let header=document.getElementById("heading");
// console.log(header);

// // 2. selecting with class
// let heading=document.getElementsByClassName("heading")
// console.log(heading);
// //3 selecting tag name
// let para=document.getElementsByTagName("p")
// console.log(para);

// //query selector
// let  firstE =document.querySelector("p")
// console.log(firstE);//1st element
// // it return node list
// let  allE =document.querySelectorAll("p")
// console.log(allE);//ALL element

// // properties of dom
// // tag name=Shows the HTML tag of the element 
// // inner text=Gets or sets the visible text inside the element.
//  //innerHTML=Gets or sets everything inside the element as HTML 
//  // textContent =
// // Gets or sets all text inside the element

// // PART2
// // // attribute 
// let div=div.getAttribute("")
// style.node.style

// let div=document.querySelector("div")

// //INSERT ELEMENT
// // 1. Create the element
// let newElement = document.createElement("div");
// //2. Add content
// newElement.innerText = "Hello Mini!";

// // 3. append=Adds the element at the end of another element.
// document.body.append(newElement);

// // 4. prepend=add the element in the start
// document.body.prepend(newElement);
// //5. insertBefore=Adds the new element before a specific element
// let reference = document.getElementById("myDiv");
// document.body.insertBefore(newElement, reference);
// //6 insert after
// let reference = document.getElementById("myDiv");
// document.body.insertAfter(newElement, reference);

// //Delete element
// .node.remove()//remove the node

//Practice question


let newbutton=document.createElement("button")
newbutton.innerText("click me")
newbutton.style.color="white"
newbutton.style.backgroundColor="red"
document.querySelector("body").prepend(newbutton)

