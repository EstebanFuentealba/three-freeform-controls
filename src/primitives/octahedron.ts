import * as THREE from "three";
import { DEFAULT_OCTAHEDRON_RADIUS } from "../utils/constants";

export default class Octahedron extends THREE.Mesh {
  constructor(color: string, octahedronRadius = DEFAULT_OCTAHEDRON_RADIUS) {
    super();
    this.geometry = new THREE.OctahedronBufferGeometry(octahedronRadius, 0);
    this.material = new THREE.MeshBasicMaterial({
      color,
      depthTest: false,
      transparent: true,
      side: THREE.DoubleSide
    });
  }
}
