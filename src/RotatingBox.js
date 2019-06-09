import React from 'react';
import * as THREE from 'three';
import { thisTypeAnnotation } from '@babel/types';

class RotatingBox extends React.Component {

  componentDidMount() {
    const width = this.rotatingBox.clientWidth;
    const height = this.rotatingBox.clientHeight;

    let scene = new THREE.scene();
    let camera = new THREE.PerspectiveCamera();
    let renderer = new thisTypeAnnotation.WebGLRenderer();

    renderer.setSize(width, height);
    this.rotatingBox.appendChild(renderer.domElement);

    let geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBacisMaterial({ color: 0xff000 });
    var cube = new THREE.Mesh(geometry.material);

    scene.add(cube);

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 4;

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
