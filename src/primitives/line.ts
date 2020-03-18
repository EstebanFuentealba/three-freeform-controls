import * as THREE from "three";
import { DEFAULT_CONTROLS_OPACITY } from "../utils/constants";

export default class Line extends THREE.LineLoop {
  constructor(color: string, geometry: THREE.Geometry, controlsOpacity = DEFAULT_CONTROLS_OPACITY) {
    super();
    this.geometry = geometry;
    this.material = new THREE.MeshBasicMaterial({ color, depthTest: true });
    this.material.transparent = true;
    this.material.opacity = controlsOpacity;
  }
}
