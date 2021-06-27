import { useFetchGifs } from "../../components/hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks'
describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe retornar el estado inicial', async() => {
        const category = "ciclismo"; 
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category))
        const {gifs, loading} = result.current;
        await waitForNextUpdate();

        expect(gifs).toEqual([])
        expect(loading).toBe(true)
    })

    test('Debe retornar un arreglo de imagenes y el loading en false', async() => {
        const category = "ciclismo"; 
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category))
        await waitForNextUpdate();
        const {gifs, loading} = result.current;

        expect(gifs.length).toBe(5)
        expect(loading).toBe(false)
    })
    
})
