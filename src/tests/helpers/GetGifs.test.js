import { getGifs } from "../../components/helpers/GetGifs";

describe('Probando useFetchGifs', () => {
    test('Debe traer 5 elementos ', async() => {
        const gifs = await getGifs('ciclismo');

        expect(gifs.length).toBe(5)
    })

    test('Debe traer 10 elementos ', async() => {
        const gifs = await getGifs('ciclismo', 10);

        expect(gifs.length).toBe(10)
    })
    
    test('No Debe traer elementos ', async() => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0)
    })
})
