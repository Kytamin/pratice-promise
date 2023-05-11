let onMyBirthday= (isKayoSick)=>{{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(!isKayoSick){
                resolve(2)
            }else {
                reject()
            }
        },3000)
    })
}}

onMyBirthday(false)
.then((result)=>{
    console.log(`I have ${result} cakes`)
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log(`Party`)
})

onMyBirthday(true)
    .then((result) => {
        console.log(`I have ${result} cakes`);
    })
    .catch(() => {
        console.log(`Im sad :(`);
    })
    .finally(() => {
        console.log("any way we still have the Party");
    });