import * as THREE from "three";
import {
  DEFAULT_CONE_HEIGHT,
  DEFAULT_CONE_RADIUS,
  DEFAULT_CONTROLS_OPACITY,
  DEFAULT_RADIAL_SEGMENTS
} from "../utils/constants";

export default class Cone extends THREE.Mesh {
  constructor(
    color: string,
    coneRadius = DEFAULT_CONE_RADIUS,
    coneHeight = DEFAULT_CONE_HEIGHT,
    radialSegments = DEFAULT_RADIAL_SEGMENTS,
    controlsOpacity = DEFAULT_CONTROLS_OPACITY
  ) {
    super();
    this.geometry = new THREE.ConeGeometry(coneRadius, coneHeight, radialSegments);
    this.material = new THREE.MeshBasicMaterial({ color, depthTest: false });
    this.material.transparent = true;
    this.material.opacity = controlsOpacity;
  }
}
