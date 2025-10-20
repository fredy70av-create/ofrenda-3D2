import * as THREE from './three.module.js';

export const crearPan = (escena, x, y, z) => {
  const panMat = new THREE.MeshStandardMaterial({ color: 0xd2b48c });
  const pan = new THREE.Mesh(
    new THREE.SphereGeometry(0.9, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2),
    panMat
  );
  pan.position.set(x, y, z);
  escena.add(pan);

  const huesitoMat = new THREE.MeshStandardMaterial({ color: 0xd2b48c });
  const posicionesHuesitos = [
    { x: 0, z: 0 }, { x: 0.3, z: 0 }, { x: -0.3, z: 0 },
    { x: 0, z: 0.3 }, { x: 0, z: -0.3 }
  ];
  posicionesHuesitos.forEach(pos => {
    const huesito = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.4), huesitoMat);
    huesito.position.set(x + pos.x, y + 0.2, z + pos.z);
    huesito.rotation.x = Math.PI / 2;
    escena.add(huesito);
  });
};
