import React from 'react';
import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe de retorar el estado inicial ', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Goku'));
        const { data, loading} = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
    })

    test('debe de retornar un arreglo de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Goku'));
        await waitForNextUpdate();
        const { data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    })
    
    
})
