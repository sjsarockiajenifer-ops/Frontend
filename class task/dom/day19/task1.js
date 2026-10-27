const fetchdata=async()=>{
    const get=await fetch("https://dummyjson.com/products")
    const change=await Get.json()
    console.log("change:",change)
    const datas=change.users
    const showdata_tbody=document.getElementById("showdata")
    const getshow=""
}
change.forEach((element) => {
    getshow += `<tr>
    <td>${element.s.no}</td>
    <td>${element.category}</td>
    <td>${element.price}</td>
    </tr>`
});

showdata_tbody.innerHTML=getshow;
fetchdata()