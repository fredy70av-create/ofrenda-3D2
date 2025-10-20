import * as THREE from './three.module.js';

export const crearCalaveritaRealista = (escena, x, y, z) => {
  const cabezaMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const cabeza = new THREE.Mesh(new THREE.SphereGeometry(0.55, 32, 32), cabezaMat);
  cabeza.position.set(x, y, z);
  escena.add(cabeza);

  const mandMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const mandibula = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.2, 0.3), mandMat);
  mandibula.position.set(x, y - 0.45, z + 0.05);
  escena.add(mandibula);

  const ojoMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
  const ojo1 = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), ojoMat);
  const ojo2 = ojo1.clone();
  ojo1.position.set(x - 0.18, y + 0.1, z + 0.45);
  ojo2.position.set(x + 0.18, y + 0.1, z + 0.45);
  escena.add(ojo1, ojo2);

  const narizGeo = new THREE.ConeGeometry(.09, 1.1, 5);
  const nariz = new THREE.Mesh(narizGeo, ojoMat);
  nariz.position.set(x, y - 0.05, z + 0.25);
  nariz.rotation.x = Math.PI;
  escena.add(nariz);

  const pomuloMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const pomulo1 = new THREE.Mesh(new THREE.SphereGeometry(0.07, 16, 16), pomuloMat);
  const pomulo2 = pomulo1.clone();
  pomulo1.position.set(x - 0.22, y, z + 0.15);
  pomulo2.position.set(x + 0.22, y, z + 0.15);
  escena.add(pomulo1, pomulo2);
};
