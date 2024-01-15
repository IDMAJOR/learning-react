
function Button(){

    // let count = 0;

    // const haddleClick2 = (name)=>{
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} You touched me! ${count} time/s`)
    //     }else{
    //         console.log(`${name} stop  touching me!`)
    //     }
    // }

    const haddleClick = (e)=>{
        e.target.textContent = 'ouch!';
    }

    return(<button onClick={(e)=> haddleClick(e)}>CLICK ME!</button>)
}

export default Button