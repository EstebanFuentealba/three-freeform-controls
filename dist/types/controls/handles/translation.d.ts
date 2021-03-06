import * as THREE from "three";
import Cone from "../../primitives/cone";
import { TranslationGroup } from "./index";
export default class Translation extends TranslationGroup {
    private readonly cone;
    private readonly line;
    parallel: THREE.Vector3;
    constructor(color?: string, lineHeight?: number, coneRadius?: number, coneHeight?: number, radialSegments?: number, controlsOpacity?: number);
    /**
     * @hidden
     */
    getInteractiveObjects: () => Cone[];
    setColor: (color: string) => void;
}
