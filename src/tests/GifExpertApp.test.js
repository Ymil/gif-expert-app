import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"
describe('Probando GifExpertApp', () => {
    test('debe mostrar la interface', () => {        
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot()
    })

    test('debe mostrar una lista de categorias ', () => {
        const categories = [
            'Futbol', 'Basket', 'Ciclismo'
        ]

        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot()

        expect(wrapper.find('ShowCategory').length).toBe(categories.length)

    })
    
    
})
