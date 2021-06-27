import { shallow } from 'enzyme'
import { useFetchGifs } from '../../components/hooks/useFetchGifs'
import {ShowCategory} from '../../components/ShowCategory'
import '@testing-library/jest-dom'
jest.mock('../../components/hooks/useFetchGifs')

describe('Probando ShowCategory', () => {
    
    /* test('should ', () => {
        let wrapper = shallow(<ShowCategory category='clean'/>)
        expect(wrapper).toMatchSnapshot()
    }); */

    test('should mostrar items cuando se cargan imagenes de useFetchGifs', () => {
       
        const gifs = [
            {
                id: 'abc',
                title: 'cualquier cosa',
                url: 'http://localhost/',
            },
            {
                id: 'abcd',
                title: 'cualquier cosa',
                url: 'http://localhost/',
            },
        ]
        useFetchGifs.mockReturnValue(
            {
                gifs: gifs,
                loading: false
            }
        );
        let wrapper = shallow(<ShowCategory category='clean'/>);

        expect(wrapper.find("ShowGif").length).toBe(gifs.length)
        
    })
    
    
    
})
