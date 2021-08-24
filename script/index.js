


const openNavbar=()=>{
    const x=document.getElementById("optionsbar-container");
    if(x.style.height==="0px"){
        x.style.height="200px"

    }
    else if(x.style.height==="200px"){
        x.style.height="0px"
    }
    else{
        x.style.height="200px"
    }
   
}


const closeShareModal=(modal_id)=>{
    let shareModal=document.getElementById(modal_id);
    shareModal.style.display="none"
}

const openShareModal=(modal_id)=>{
    console.log(modal_id)
    let shareModal=document.getElementById(modal_id);
    shareModal.style.display="flex"
}