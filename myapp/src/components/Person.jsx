const Person = (props) =>{
    console.log(props);
    const {name, email,list} = props
    
    return (
        <>
            <h2>Name : {name}</h2>
            <h2>Email : {email}</h2>
            {
                list.map((item, index) => {
                    return <h2 key = {index}>{item}</h2>
                })
            }
        </>
    )
}

export default Person