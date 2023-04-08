const Carousel2 = ()=>{
    const data = []

    return(
        <div>
            <div>
                {data.map(e=>{
                    return(
                        <div>
                            <img src={e}></img>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}