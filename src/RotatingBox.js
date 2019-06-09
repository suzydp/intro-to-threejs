import React, { Component } from 'react';
import * as THREE from 'three';

class RotatingBox extends Component {
 componentDidMount() {
   const width = this.rotatingBox.clientWidth;
   const height = this.rotatingBox.clientHeight;

   let scene = new THREE.Scene();
   let camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
   let renderer = new THREE.WebGLRenderer();

   renderer.setSize(width, height);
   this.rotatingBox.appendChild(renderer.domElement);

   var geometry = new THREE.BoxGeometry(1, 1, 1);
   var material = new THREE.MeshBasicMaterial({ color: '#bada55' });
   var cube = new THREE.Mesh(geometry, material);

   scene.add(cube);

   camera.position.x = 0;
   camera.position.y = 0;
   camera.position.z = 5;

   cube.position.x = 0;
   cube.position.y = 0;
   cube.position.z = 0;

   renderer.render(scene, camera);
 }
 render() {
   return (
     <div
       style={{ width: '100vw', height: '100vh' }}
       ref={rotatingBox => (this.rotatingBox = rotatingBox)}
     />
   );
 }
}

export default RotatingBox;