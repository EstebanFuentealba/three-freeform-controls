import * as THREE from "three";
import {
  DEFAULT_COLOR_RING,
  DEFAULT_RING_NUM_POINTS,
  DEFAULT_RING_RADIUS,
  DEFAULT_OCTAHEDRON_RADIUS
} from "../../utils/constants";
import Line from "../../primitives/line";
import Octahedron from "../../primitives/octahedron";
import { RotationGroup } from "./index";

export default class Rotation extends RotationGroup {
  private readonly ring: Line;
  private readonly handlebar: Octahedron;

  constructor(
    color = DEFAULT_COLOR_RING,
    ringRadius = DEFAULT_RING_RADIUS,
    octahedronRadius = DEFAULT_OCTAHEDRON_RADIUS
  ) {
    super();
    const ringNumberOfPoints = DEFAULT_RING_NUM_POINTS;
    const ringGeometry = new THREE.Geometry();
    const angle = (2 * Math.PI) / ringNumberOfPoints;
    for (let i = 1; i < ringNumberOfPoints + 1; i++) {
      ringGeometry.vertices.push(
        new THREE.Vector3(ringRadius * Math.cos(i * angle), ringRadius * Math.sin(i * angle), 0)
      );
    }
    this.ring = new Line(color, ringGeometry);
    this.handlebar = new Octahedron(color, octahedronRadius);
    this.handlebar.position.y = ringRadius;
    this.add(this.ring);
    this.add(this.handlebar);
  }

  /**
   * @hidden
   */
  public getInteractiveObjects = () => {
    return [this.handlebar];
  };

  public setColor = (color: string) => {
    const ringMaterial = this.ring.material as THREE.MeshBasicMaterial;
    const handlebarMaterial = this.handlebar.material as THREE.MeshBasicMaterial;
    ringMaterial.color.set(color);
    handlebarMaterial.color.set(color);
  };
}
