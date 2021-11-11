import ItemCount from './ItemCount';

export default function ItemListContainer() {
    
    return (
        <div className="row container">
            <h1>Item List Container</h1>

            <div className="col s12 m3">
                <div className="card">
                    
                    <span className="card-title">Camisa</span>
                    <div className="card-action">
                        <ItemCount stock={5} initial={1} />
                    </div>
                </div>
            </div>
        </div>
    )
}
