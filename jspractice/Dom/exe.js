let head=document.getElementById("heading")
console.log(head);
head.style.textAlign="center"


let para=document.createElement("p")
para.innerText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, exercitationem libero tempora nihil perspiciatis voluptas assumenda pariatur eius quae eveniet voluptatibus labore dolore tempore repudiandae necessitatibus recusandae neque? Mollitia, dolorem?"
para.style.fontVariant="small-caps"
para.style.fontSize="20px"
para.style.color="orange"

let image=document.createElement("img")
image.src="images/pexels-jeremy-bishop-20147085.jpg"

console.log(image);



head.append(para)
head.append(image)
let ryt=document.write("srikanth")
console.log(ryt);                       //error don't use