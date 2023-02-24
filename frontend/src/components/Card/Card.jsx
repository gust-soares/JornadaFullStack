import "./Card.css"

function Card(props) {
    const item = props.item;

    const tags = item.tags;
    return (
        <div className="Card">
            <h1>{item.nome}</h1>

            {tags && (
                <div className="tag-wrapper">
                    {tags.map(function (tag) {
                        return (
                            <div key={`tag-${index}`} className="tag">
                                {tag}
                            </div>
                        );
                    })}
                </div>
            )}
            <img src={item.imagemUrl} alt={item.nome} />
        </div>
    );
}

export default Card;