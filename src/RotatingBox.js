import React, { Component } from 'react';
import * as THREE from 'three';

class RotatingBox extends React.Component {

  componentDidMount() {
    const width = this.rotatingBox.clientWidth;
    const height = this.rotatingBox.clientHeight;

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera();
    let renderer = new THREE.WebGLRenderer();

    renderer.setSize(width, height);
    this.rotatingBox.appendChild(renderer.domElement);

    let geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBacisMaterial({ color: '#cc0000' });
    var cube = new THREE.Mesh(geometry.material);

    scene.add(cube);

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 4;

    // camera isn't rotate, but cube is rotate
    cube.position.x = -3;
    cube.position.y = 0;
    cube.position.z = 0;

    renderer.render(scene, camera);
  }

  render() {
    return (
      <div
        style={{width: '100vw', height: '100vh'}}
        ref={rotatingBox => this.rotatingBox = rotatingBox}
      >
        hi
      </div>
    )
  }
}

export default RotatingBox;
