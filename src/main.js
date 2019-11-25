let html = document.querySelector("#demo")
let style = document.querySelector("#style")
let string = `/*你好,我是一名前端工程师
接下来我想要演示一个画太极的过程
我先制作一个div
*/
#div1{
    width:400px;
    height:400px;
    border:1px solid red;
}
/*然后我把div变成一个圆圈*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成，一黑一白*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个魔丸和灵珠*/
#div1::before{
    width:200px;
    height:200px;
    left:50%;
    top:0;
    transform:translateX(-50%);
    border-radius:50%;
    background:#000;
    background:radial-gradient(circle,rgba(255,255,255,1)0%,rgba(255,255,255,1)25%,rgba(0,0,0,1)25%,rgba(0,0,0,1)100%);
}
#div1::after{
    width:200px;
    height:200px;
    left:50%;
    bottom:0;
    background:#fff;
    border-radius:50%;
    transform:translateX(-50%);
    background:radial-gradient(circle,rgba(0,0,0,1)0%,rgba(0,0,0,1)25%,rgba(255,255,255,1)25%,rgba(255,255,255,1)100%,rgba(0,0,0,1)100%)
}
`
let string2 = ""
let n = 0
// string = string.replace(/\n/g,"<br>")
html.innerHTML = string2
/*setTimeout(() => {
   n=n+1
   demo.innerHTML = n 
}, 3000);*/

/*setInterval(() => {
    n = n + 1
    demo.innerHTML = n
}, 1000);*/
// for(i=0;i<string.length;i++){
//     console.log(i,string[i])
// }
let step=()=>{
    setTimeout(() => {
        if(string[n]==="\n"){
            //如果n是回车，不照搬
            string2=string2+"<br>"
        }
        else if(string[n]===" "){
            //如果n是回车就照搬
            string2+="&nbsp"
        }
        else{
            string2+=string[n]
        }
        html.innerHTML = string2
        style.innerHTML=string.substring(0,n)
        window.scrollTo(0,99999)
        html.scrollTo(0,99999)
        if(n<string.length-1){
            n+=1
            step()
        }
        else{

        }
    }, 50);
}
step()
