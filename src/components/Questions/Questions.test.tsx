import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Questions from './Questions';
import * as getToken from '../../utils/getToken';

describe('Questions component', () => {

    beforeEach(() => {
        Object.defineProperty(window, "localStorage", {
            value: {
                getItem: jest.fn(),
                setItem: jest.fn()
            },
            writable: true
        });
    });
    it('renders the questions component', () => {
        const mock = jest.spyOn(getToken, "getToken").mockReturnValue("token");
        render(
            <BrowserRouter>
                <Questions/>
            </BrowserRouter>
        )
        screen.getByText('Please answer the following questions');
        mock.mockRestore()
    });
})