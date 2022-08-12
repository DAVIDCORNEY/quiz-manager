import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EditQuestion from './EditQuestion';
import * as getToken from '../../utils/getToken';

describe('Edit Question component', () => {

    beforeEach(() => {
        Object.defineProperty(window, "localStorage", {
            value: {
                getItem: jest.fn(),
                setItem: jest.fn()
            },
            writable: true
        });
    });
    it('renders the Edit Question component', () => {
        const mock = jest.spyOn(getToken, "getToken").mockReturnValue("token");
        render(
            <BrowserRouter>
                <EditQuestion/>
            </BrowserRouter>
        )
        screen.getByText('Edit the question');
        mock.mockRestore()
    });
})