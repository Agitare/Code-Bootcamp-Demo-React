import React, { useState, useEffect } from "react";

import Fruit from "./File";
import AddFruit from "./AddFile";
//import "./Program.css";

export default function Fruits(props) {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/fruits');
            res
                .json()
                .then(data => setFruits(data))
                .catch(err => console.log(err));
        }

        fetchData();
    }, []);

    const onDelete = (id) => {
        fetch('/api/fruits/${id}', {
            method: 'DELETE'
        })
        .then(deletedFruit =>
            setFruits(fruits.filter(fruit => fruit.id !== id))
        );
    }
/*
    const fruitElements = fruits.map(
        fruitData => {
          return <Fruit key={fruitData.id} type={fruitData.type}>{fruitData.name}</Fruit>
        }
    );
*/
    const fruitElements = fruits.map(
        fruitData => {
            return <Fruit
                key ={fruitData.id}
                type={fruitData.type}
                onDelete={() => onDelete(fruitData.id)}
                >
                    {fruitData.name}
                </Fruit>
        }
    )
    
    return (
        <React.Fragment>
            <AddFruit onFruitAdded={(newFruit) => setFruits([...fruits, newFruit])}/>
            <div className="fruits">
                {fruitElements}
            </div>
        </React.Fragment>
    );
};