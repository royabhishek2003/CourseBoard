import './Filter.css'

function Filter({filtercource, filterData}) {
    return (
        <div className="filter-container">
            {filterData.map((data) => {
                return (
                    <button  
                        key={data.id} 
                        onClick={() => { filtercource(data.title) }} 
                        className="filter-btn"
                    >
                        {data.title}
                    </button>
                );
            })}
        </div>
    );
}

export default Filter;
