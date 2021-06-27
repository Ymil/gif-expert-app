import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { ShowCategory } from './components/ShowCategory';

const GifExpertApp = ({defaultCategories = []}) => {
    
    const [categories, setCategories] = useState(defaultCategories)

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