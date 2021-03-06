import Octahedron from "../../primitives/octahedron";
import { RotationGroup } from "./index";
export default class Rotation extends RotationGroup {
    private readonly ring;
    private readonly handlebar;
    constructor(color?: string, ringRadius?: number, octahedronRadius?: number);
    /**
     * @hidden
     */
    getInteractiveObjects: () => Octahedron[];
    setColor: (color: string) => void;
}
