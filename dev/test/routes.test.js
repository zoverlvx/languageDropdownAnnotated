import React from "react";
import {shallow, mount} from "enzyme";
import {MemoryRouter} from "react-router-dom";
import toJson from "enzyme-to-json";
import Routes from "../js/components/routes";

const component = shallow(<Routes />);
const tree = toJson(component);

describe("<Routes />", () => {
    it("renders 1 <Routes /> component", () => {
	    console.log(tree); 
		expect(component).toHaveLength(1);
	});

	it("provides a snapshot of Routes' tree", () => { 
		expect(tree).toMatchSnapshot();
	});

	it("should render the LanguageBtnCreator onload", () => {
        const component = mount(
            <MemoryRouter initialEntries={["/"]} initialIndex={0}>
                <Routes />
            </MemoryRouter>
        	)
        expect(component.find(Home).length).toBe(1)
	});
});