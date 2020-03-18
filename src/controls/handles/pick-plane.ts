import * as THREE from "three";
import Plane from "../../primitives/plane";
import {
  DEFAULT_COLOR_PLANE,
  DEFAULT_PLANE_HEIGHT,
  DEFAULT_PLANE_WIDTH,
  DEFAULT_CONTROLS_OPACITY,
  DEFAULT_PLANE_SEGMENTS
} from "../../utils/constants";
import Line from "../../primitives/line";
import { PickPlaneGroup } from "./index";

export default class PickPlane extends PickPlaneGroup {
  /**
   * @hidden
   */
  public readonly plane: Plane;
  /**
   * @hidden
   */
  public readonly boundary: Line;
  /**
   * @hidden
   */
  public readonly crossX: Line;
  /**
   * @hidden
   */
  public readonly crossY: Line;

  constructor(
    color = DEFAULT_COLOR_PLANE,
    width = DEFAULT_PLANE_WIDTH,
    height = DEFAULT_PLANE_HEIGHT,
    planeSegments = DEFAULT_PLANE_SEGMENTS,
    controlsOpacity = DEFAULT_CONTROLS_OPACITY
  ) {
    super();
    const boundaryGeometry = new THREE.Geometry();
    const crossXGeometry = new THREE.Geometry();
    const crossYGeometry = new THREE.Geometry();

    const vertexMaxX = width / 2;
    const vertexMaxY = height / 2;

    boundaryGeometry.vertices.push(new THREE.Vector3(vertexMaxX, vertexMaxY, 0));
    boundaryGeometry.vertices.push(new THREE.Vector3(vertexMaxX, -vertexMaxY, 0));
    boundaryGeometry.vertices.push(new THREE.Vector3(-vertexMaxX, -vertexMaxY, 0));
    boundaryGeometry.vertices.push(new THREE.Vector3(-vertexMaxX, vertexMaxY, 0));

    crossXGeometry.vertices.push(new THREE.Vector3(0, vertexMaxY, 0));
    crossXGeometry.vertices.push(new THREE.Vector3(0, -vertexMaxY, 0));

    crossYGeometry.vertices.push(new THREE.Vector3(-vertexMaxX, 0, 0));
    crossYGeometry.vertices.push(new THREE.Vector3(vertexMaxX, 0, 0));

    this.boundary = new Line(color, boundaryGeometry, controlsOpacity);
    this.crossX = new Line("black", crossXGeometry, controlsOpacity);
    this.crossY = new Line("black", crossYGeometry, controlsOpacity);
    this.plane = new Plane(color, width, height, planeSegments);

    this.add(this.plane);
    this.add(this.boundary);
    this.add(this.crossX);
    this.add(this.crossY);
  }

  /**
   * @hidden
   */
  public getInteractiveObjects = () => {
    return [this.plane];
  };

  public setColor = (color: string) => {
    const planeMaterial = this.plane.material as THREE.MeshBasicMaterial;
    const boundaryMaterial = this.boundary.material as THREE.MeshBasicMaterial;
    planeMaterial.color.set(color);
    boundaryMaterial.color.set(color);
  };
}
