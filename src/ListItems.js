
import React from 'react';
import './ListItems.css';

function ListItems(props){
    const items = props.items;
    const ListItems = items.map((item)=>
    {
        return <div className="list" key={item.key}>
            <p>
                <input className="checkBox" type = "checkBox"/>
                <input className="textArea" 
                id = {item.tex} value = {item.text} 
                onChange ={
                    (e) =>{
                        props.setUpdate(e.target.value, item.key)
                    }
                }
                />
                <span className="deleteIcon" onClick={ () => props.deleteItem(item.key)}>X</span>
            </p>
        </div>
    })
    return(
        <div> {ListItems} </div>
    )
}
export default ListItems;