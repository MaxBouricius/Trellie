const Trellie = ({trellie}) =>{
    
    let listItemsToBeRendered = trellie.activities.map(activity => {
        return(
            <li className="trellie__activity">
                <h3 className="trellie__label">{activity.label || "----"}</h3>
            </li>
        );
    })
    return(
        <>
            <section className="trellie">
                <header className="trellie__header">
                    <h2 className="trellie__heading">{trellie.title || "Placeholder"}</h2>
                    <div className="trellie__number">{trellie.count || "?"}</div>
                    <button className="trellie__dots">...</button>

                </header>
                <ul className="trellie__activities">

                </ul>
            </section>
        </>
    )
}

export default Trellie;