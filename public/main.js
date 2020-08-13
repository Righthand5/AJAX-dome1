let n = 1
console.log('1')
getHTML.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open("GET",'3.html')
    request.onload=()=>{
        const div = document.createElement("div")
        div.innerHTML=request.response
        document.body.appendChild(div)
    }
    request.onerror=()=>{
        console.log("错的");
    }
    request.send()
}
getJS.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open("GET",'/2.js')
    request.onload=()=>{
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () =>{
        console.log("失败啦")
    }
    request.send()
}

getCSS.onclick=()=> {
    const request = new XMLHttpRequest();
    request.open("GET","/style.css")
    // request.open("GET", '/style.css');
    // request.onload = () => {
    //     console.log('request.response')
    //     console.log(request.response)
    //     const style = document.createElement('style')
    //     style.innerHTML = request.response
    //     document.head.appendChild(style)
    // };
    // request.onerror = () => {
    //     console.log("失败啦");
    // };
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if (request.status>=200 && request.status<=300){
                const style = document.createElement("style")
                style.innerHTML = request.response
                document.head.appendChild(style)
            }else{
                alert('加载CSS失败')
            }
        }
    };
    request.send();
};
getXML.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open("GET",'/4.xml')
    request.onreadystatechange=()=> {
        if(request.readyState===4 && request.status===200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName("warning")[0].textContent
            console.log(text.trim());
        }
    };
    request.send()
};
getJSON.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open("GET",'/5.json')
    //console.log("complete")
    request.onreadystatechange=()=> {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const object = JSON.parse(request.response)//可以把符合JSON条件的字符串变为对应的对象或其他东西
            // console.log(object);
            console.log(myNAME)
            myNAME.textContent = object.name
        }
    };
    request.send()
};
getPAGE.onclick = ()=>{
    const  request = new XMLHttpRequest();
    request.open('GET',`/page${n+1}.json`)
    request.onreadystatechange = ()=>{
        if(request.readyState===4 && request.status === 200){
            const array = JSON.parse(request.response);
            array.forEach(item=>{
               const li = document.createElement("li");
               li.textContent = item.id
                xxx.appendChild(li);
            });
            n+=1
        }
    };
    request.send()
}
