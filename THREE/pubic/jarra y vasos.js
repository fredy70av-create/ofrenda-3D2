import * as THREE from './three.module.js';

export const crearJarra = (escena, x, y, z) => {
  const jarraMat = new THREE.MeshStandardMaterial({ color: 0x3366cc });
  const jarraCuerpo = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.9, 1.5, 32), jarraMat);
  jarraCuerpo.position.set(x, y, z);
  escena.add(jarraCuerpo);

  const asaGeo = new THREE.TorusGeometry(0.5, 0.1, 16, 90, Math.PI);
  const asa = new THREE.Mesh(asaGeo, jarraMat);
  asa.position.set(x + 0.9, y, z);
  asa.rotation.z = Math.PI / 2;
  escena.add(asa);
};

export const crearVasoAgua = (escena, x, y, z) => {
  const vasoMat = new THREE.MeshStandardMaterial({ color: 0x0000ff });
  const vaso = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.7, 16), vasoMat);
  vaso.position.set(x, y, z);
  escena.add(vaso);
};
