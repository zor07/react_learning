import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe("ProfileStatus component", () => {

    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status="test status"/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("test status")
    })

    test("After creation span should be displayed", () => {
        const component = create(<ProfileStatus status="test status"/>)
        const root = component.root;
        const span = root.findByType("span")
        expect(span).not.toBeNull()
    })

    test("After creation span should contain correct status", () => {
        const component = create(<ProfileStatus status="test status"/>)
        const root = component.root;
        const span = root.findByType("span")
        expect(span.children[0]).toBe("test status")
    })

    test("After creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="test status"/>)
        const root = component.root;
        expect(() => root.findByType("input")).toThrow()
    })

    test("Input should be displayed in edit mode instead of span", () => {
        const component = create(<ProfileStatus status="test status"/>)
        const root = component.root;
        const span = root.findByType("span")
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("test status")
        expect(() => root.findByType("span")).toThrow()
    })

    test("Callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="test status" updateStatus={mockCallback} />)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })

})