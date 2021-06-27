import PropTypes from 'prop-types'
import { ShowGif } from './ShowGif'
import { useFetchGifs } from './hooks/useFetchGifs'
import "animate.css"
export const ShowCategory = ({category}) => {
    const {gifs, loading} = useFetchGifs(category);
    
    return (
        <>
            <h2>{category}</h2>

            {
                loading && <p className="animate__animated animate__flash">Cargando...</p>
            }
            <div className="card-grid">
                { gifs.map(
                    (gif) => <ShowGif {...gif} />
                )}
            </div>
        </>
    )
}

ShowCategory.propType = {
    category: PropTypes.string.isRequired
}


