import { render } from "@testing-library/react";
import { MemoryRouter} from "react-router-dom";
import Header from ".";

describe ('testes de páginas', () => {
    it('encontrar uma classe no elemento', () => {
        const {container} = render (

            <MemoryRouter>
                <Header/>
            </MemoryRouter>
        );
        expect(container.getElementsByClassName('container_header').length)
        .toBe(0)
    })
}

)
export {}