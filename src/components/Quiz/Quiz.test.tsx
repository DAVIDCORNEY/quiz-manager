import { render, screen } from '@testing-library/react';
import Quiz from './Quiz';
import * as getToken from '../../utils/getToken';

describe('Quiz component', () => {

    beforeEach(() => {
        Object.defineProperty(window, "localStorage", {
            value: {
                getItem: jest.fn(),
                setItem: jest.fn()
            },
            writable: true
        });
    });
    it('renders the quiz component', () => {
        const mock = jest.spyOn(getToken, "getToken").mockReturnValue("token");
        render(<Quiz/>)
        screen.getByText('Quiz');
        mock.mockRestore()
    });
})
