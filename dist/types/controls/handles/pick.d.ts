import Octahedron from "../../primitives/octahedron";
import { PickGroup } from "./index";
export default class Pick extends PickGroup {
    private readonly octahedron;
    constructor(octahedronRadius?: number);
    /**
     * @hidden
     */
    getInteractiveObjects: () => Octahedron[];
    setColor: (color: string) => void;
}
