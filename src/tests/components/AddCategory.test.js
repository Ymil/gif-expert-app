import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Probando AddCategory', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach( () => {
        jest.clearAllMocks() 
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('should ', () => {
        expect(wrapper).toMatchSnapshot()
        
    });

    test('debe cambiar caja de texto', () => {
        let input = wrapper.find("input");
        const value = "hola mundo";
        input.simulate("change", {
            target:{
                value: value
            }
        });
        input = wrapper.find("input");
        expect(input.prop('value')).toBe(value);
    })
    
    test('disparando submit sin postear informacion', () => {        
        const form = wrapper.find("form");

        form.simulate("submit", {
            preventDefault: () => {}
        })

        expect(setCategories).not.toHaveBeenCalled()
    })


    test('verificando reset de formulario despues de submit', () => {
        let input = wrapper.find("input");
        const value = "hola mundo";
        input.simulate("change", {
            target:{
                value: value
            }
        });
        
        const form = wrapper.find("form");

        form.simulate("submit", {
            preventDefault: () => {}
        })

        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledWith(
            expect.any(Function)
        );

        input = wrapper.find("input");
        expect(input.prop('value')).toBe("");
    })
    
    
})
