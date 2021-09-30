import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas sobre GifGridItem', () => {

    const title = 'Este es un título';
    const url = 'https_//localhost/algo.png';
    const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

    test('debe de mostrar el componente correctamente ', () => {        
        expect(wrapper).toMatchSnapshot();
    })   
    
    test('debe de tener un párrafo con el title  ', () => {
        const textoTitulo = wrapper.find('p').text().trim();
        expect(title).toBe(textoTitulo);
    })

    test('debe de tener la imagen igual al url y al alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('debe de tener la clase "animate__fadeIn" ', () => {
        const div = wrapper.find('div');
        console.log(div.prop('className'))
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
    })
    
    
    
})
