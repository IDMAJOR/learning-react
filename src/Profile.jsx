
function Profile(){

    const imageUrl = './src/assets/PhillyFullfCake_HERO_061523_55087_final (2).webp'

    const haddleClick3 = (e)=>{
        e.target.style.display = 'none';
    }

    return(
        <img onDoubleClick={haddleClick3} src={imageUrl}></img>
    )
}

export default Profile