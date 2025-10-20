import * as THREE from './three.module.js';

export const crearFlor = (escena, x, y, z) => {
  const petaloMat = new THREE.MeshStandardMaterial({ color: 0xffa500, emissive: 0x331000 });
  const centroMat = new THREE.MeshStandardMaterial({ color: 0xff6600 });
  const centro = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), centroMat);
  centro.position.set(x, y, z);
  escena.add(centro);

  for (let i = 0; i < 6; i++) {
    const petalo = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), petaloMat);
    const ang = (i / 6) * Math.PI * 2;
    petalo.position.set(x + Math.cos(ang) * 0.55, y, z + Math.sin(ang) * 0.55);
    escena.add(petalo);
  }
};
