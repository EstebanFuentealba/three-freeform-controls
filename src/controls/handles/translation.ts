import * as THREE from "three";
import Cone from "../../primitives/cone";
import {
  DEFAULT_COLOR_ARROW,
  DEFAULT_CONE_HEIGHT,
  DEFAULT_CONE_RADIUS,
  DEFAULT_LINE_HEIGHT,
  DEFAULT_RADIAL_SEGMENTS,
  DEFAULT_CONTROLS_OPACITY
} from "../../utils/constants";
import Line from "../../primitives/line";
import { TranslationGroup } from "./index";

export default class Translation extends TranslationGroup {
  private readonly cone: Cone;
  private readonly line: Line;
  public parallel = new THREE.Vector3(0, 1, 0);

  constructor(
    color = DEFAULT_COLOR_ARROW,
    lineHeight = DEFAULT_LINE_HEIGHT,
    coneRadius = DEFAULT_CONE_RADIUS,
    coneHeight = DEFAULT_CONE_HEIGHT,
    radialSegments = DEFAULT_RADIAL_SEGMENTS,
    controlsOpacity = DEFAULT_CONTROLS_OPACITY
  ) {
    super();
    this.cone = new Cone(color, coneRadius, coneHeight, radialSegments, controlsOpacity);
    const lineGeometry = new THREE.Geometry();
    lineGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
    lineGeometry.vertices.push(new THREE.Vector3(0, lineHeight, 0));

    this.line = new Line(color, lineGeometry, controlsOpacity);
    this.cone.geometry.scale(coneRadius, coneHeight, coneRadius);
    this.cone.translateY(lineHeight);

    this.add(this.cone);
    this.add(this.line);
  }

  /**
   * @hidden
   */
  public getInteractiveObjects = () => {
    return [this.cone];
  };

  public setColor = (color: string) => {
    const coneMaterial = this.cone.material as THREE.MeshBasicMaterial;
    const lineMaterial = this.line.material as THREE.MeshBasicMaterial;
    coneMaterial.color.set(color);
    lineMaterial.color.set(color);
  };
}
