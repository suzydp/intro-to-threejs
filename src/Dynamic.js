import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import FirstPersonControls from 'three';
import Stats from 'react-canvas-stats';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class Dynamic extends Component {
  componentDidMount() {
    const scene = new THREE.Scene();
    scene.background = new THREE.color( 0xaaccff );
    scene.fog = new THREE.FogExp2( 0xaaccff, 0.0007 );

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 20000);
    camera.position.y = 200;

    let clock = new THREE.Clock();
    
    let controls = new THREE.FirstPersonControls( camera );
    controls.movementSpeed = 500;
    controls.lookSpeed = 0.1;

    const worldWidth = 128, worldDepth = 128;

    const mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    const geometry = new THREE.PlaneBufferGeometry( 20000, 20000, worldWidth - 1, worldDepth - 1 );
    geometry.rotateX( - Math.PI / 2 );

    const texture = new THREE.TextureLoader().load('textures/water.jpg');
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 5, 5 );

    const material = new THREE.MeshBasicMaterial({ color: 0x0044ff, map: texture });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const stats = new Stats();
    document.body.appendChild( stats.dom );

    window.addEventListener( 'resize', this.onWindowResize, false );
  }

  onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectMatrix();

    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.controls.handleResize();
  }

  animate = () => {
    this.dynamicAnimation = requestAnimationFrame(this.animate);
    this.render();
    this.stats.update();
  }

  render = () => {
    let delta = this.clock.getDelta();
    let time = this.clock.getElapsedTime() * 10;

    let position = this.geometry.attributes.position;

    for ( let i = 0; i < position.count; i++ ) {
      let y = 35 * Math.sin( i / 5 + ( time + i ) / 7 );
      position.setY( i, y );
    }

    position.needsUpdate = true;

    this.controls.update( delta );
    this.renderer.render( this.scene, this.Mathcamera );
  }
  

  render() {
    return (
      <div>
        <div
          style={{ width: '100vw', height: '100vh' }}
          ref={dynamic => (this.dynamic = dynamic)}
        />
        <Link href="/">Back To Top</Link>
      </div>
    );
  }
}

export default Dynamic;