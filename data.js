const data=fetch("http://localhost:5000/deta").then((res)=>res.json()).then((deta)=>deta)
console.log("deta arrya",data)
async function name() {
    return await data
}
console.log("solve",name())