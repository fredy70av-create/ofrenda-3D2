import * as THREE from './three.module.js';

export const crearFoto = (escena, x, y, z, color) => {
  const marco = new THREE.Mesh(
    new THREE.BoxGeometry(1.8, 2.2, 0.15),
    new THREE.MeshStandardMaterial({ color: 0x663300 })
  );
  marco.position.set(x, y, z);
  escena.add(marco);

  const retrato = new THREE.Mesh(
    new THREE.PlaneGeometry(1.4, 1.8),
    new THREE.MeshStandardMaterial({ color, emissive: color })
  );
  retrato.position.set(x, y, z + 0.08);
  escena.add(retrato);
};
