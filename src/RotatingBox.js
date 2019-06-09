import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

class RotatingBox extends Component {
  componentDidMount() {
    const width = this.rotatingBox.clientWidth;
    const height = this.rotatingBox.clientHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    // drag and drop
    this.controls = new OrbitControls(this.camera, this.render.domElement);

    this.renderer.setSize(width, height);
    this.rotatingBox.appendChild(this.renderer.domElement);

    var texture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/crate.gif');
    var material = new THREE.MeshBasicMaterial({ map:texture })
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    // var material = new THREE.MeshBasicMaterial({ color: '#bada55' });

    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    // should call drag and drop in case of called 'this.camera' above
    this.initializeCamera();
    this.animate(this);
  }

   componentWillUnmount() {
    cancelAnimationFrame(this.frameId);
    this.mount.removeChild(this.renderer.domElement);
  }

  initializeOrbits = () => {
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.2;
    this.controls.panSpeed = 0.8;
  }
  
  initializeCamera = () => {
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 5;
  }

   animate = () => {
     // calling a request the next time cpu is free
     this.cubeAnimation = requestAnimationFrame(this.animate);
     this.renderer.render(this.scene, this.camera);
     this.cube.rotation.x += 0.01;
     this.cube.rotation.y += 0.01;
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