const List = () => {

    const products = [
        {id: 1, name: 'Product 1'},
        {id: 2, name: 'Product 2'},
        {id: 3, name: 'Product 3'},
        {id: 4, name: 'Product 4'},
        {id: 5, name: 'Product 5'},
    ]


    const listItems = products.map((product) => {
        return <h3 key={product.id}>{product.name}</h3>
    })
    return (
        <>
        <h2>Products</h2>
        {listItems}
        {
            // products.map((product) => {
            //     return <h3 key={product.id}>{product.name}</h3>
            // })
        }
        </>
    )
}           
export default List