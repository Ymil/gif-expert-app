import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { ShowCategory } from './components/ShowCategory';

const GifExpertApp = () => {
    const [categories, setCategories] = useState([
        'Futbol', 'Basket', 'Ciclismo'
    ]) 

    const handlerAdd = () => {
        //categories.push('Tenis')
        setCategories(['Tenis',...categories]);
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory setCategories={setCategories} />
            <hr />            
            <ul>
                {
                    categories.map((category) => (
                        <ShowCategory 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ul>
        </>
    )
}
export default GifExpertApp;