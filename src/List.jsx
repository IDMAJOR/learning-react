import PropTypes from 'prop-types'

function List(props){

    const itemList = props.items;
    const category = props.category;

    // friuts.sort((a,b) => a.name.localeCompare(b.name));
    // friuts.sort((a,b) => b.calories - a.calories );
    // let lowFruit = friuts.filter(fruit => fruit.calories >= 100)

    

    const ListItems = itemList.map(items =>   <li key={items.id}>
                                                    {items.name} &nbsp;
                                                    <b>{items.calories}</b>
                                                </li>)

    return(
        <>
        <h3 className='category'>{category}</h3>
        <ol className='list-items'>{ListItems}</ol>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    }))
}

List.defaultProps = {
    category: "category",
    items: [],
}

export default List