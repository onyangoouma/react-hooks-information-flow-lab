import React from "react";

function Filter({ onCategoryChange}) {
    return (
        <div className="Filter">
            <select name="filter" onChange={onCategoryChange}>
                <option value="All">Filter by category</option>
                <option value="produce">produce</option>
                <option value="Dairy"> Dairy</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
    );
}

export default Filter;