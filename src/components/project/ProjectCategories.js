const ProjectCategories = ({ filter, categories }) => {
    return (
        <div className="filter-btns text-center">
            {
                categories.map((cat, i) => {
                    return <button type="button" className="filter-btn" onClick={() => filter(cat)} key={i}>{cat}</button >
                })
            }
        </div>
    )
}

export default ProjectCategories;