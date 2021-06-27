import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GetGifs";


export const useFetchGifs = (category) => {
    const [state, setState] = useState(
        {
            gifs: [],
            loading: true
        }
    )

    useEffect(
        () => {
            getGifs(category).then( gifs => (
                setState(                    
                    {
                        gifs: gifs,
                        loading: false
                    }
                )
            ));
        }
    , [category]);

    return state;
}
