import { shallow } from "enzyme"
import { ShowGif } from "../../components/ShowGif"

describe('Progando showgif', () => {
    let title = "Imagen de deportes";
    const url = "https://media1.giphy.com/media/qYxZiiuxQIiexrKqj3/giphy.gif?cid=3a8a57599peodb6t6zyy2238q7w80r88zh1oweg5udlwg4du&rid=giphy.gif&ct=g";
    const wrapper = shallow(
        <ShowGif title={title} url={url}/>
    );
    test('Probando carga general', () => {        
        expect(wrapper).toMatchSnapshot()
    });

    test('Debe tener el parrafo title', () => {
        const p = wrapper.find('.title');
        expect(p.text()).toBe(title);
    });

    test('Probando titulo vacio', () => {
        let title = "";
        const wrapper = shallow(
            <ShowGif title={title} url={url}/>
        );
        const p = wrapper.find('.title');
        expect(p.text()).toBe("Sin titulo");
    });
    
    test('la imagen debe tener la misma url que la que se paso por props', () => {
        const img = wrapper.find("img");
        expect(img.prop('src')).toBe(url)
    });

    test('verificando clases', () => {
        const {className} = wrapper.props('className');        
        expect(className.includes('animate__pulse')).toBe(true)
    })
    

})
