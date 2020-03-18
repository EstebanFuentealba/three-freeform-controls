import * as THREE from "three";
import Octahedron from "../../primitives/octahedron";
import { DEFAULT_OCTAHEDRON_RADIUS } from "../../utils/constants";
import { PickGroup } from "./index";

export default class Pick extends PickGroup {
  private readonly octahedron: Octahedron;

  constructor(octahedronRadius = DEFAULT_OCTAHEDRON_RADIUS) {
    super();
    this.octahedron = new Octahedron("white", octahedronRadius);
    this.add(this.octahedron);
  }

  /**
   * @hidden
   */
  public getInteractiveObjects = () => {
    return [this.octahedron];
  };

  public setColor = (color: string) => {
    const octahedronMaterial = this.octahedron.material as THREE.MeshBasicMaterial;
    octahedronMaterial.color.set(color);
  };
}
