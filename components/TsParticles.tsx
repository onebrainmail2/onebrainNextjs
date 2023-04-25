import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
export default function TsParticles() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div className="TsParticles">
       <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": 1
        },
        "particles": {
          "bounce": {
            "horizontal": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            },
            "vertical": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            }
          },
          "collisions": {
            "bounce": {
              "horizontal": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              },
              "vertical": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              }
            },
            "enable": false,
            "mode": "bounce"
          },
          "color": {
            "value": "#ff00d0",
            "animation": {
              "enable": false,
              "speed": 20,
              "sync": true
            }
          },
          "life": {
            "count": 0,
            "delay": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 0,
              "sync": false
            },
            "duration": {
              "random": {
                "enable": false,
                "minimumValue": 0.0001
              },
              "value": 0,
              "sync": false
            }
          },
          "links": {
            "blink": false,
            "color": {
              "value": "#006eff"
            },
            "consent": false,
            "distance": 100,
            "enable": true,
            "frequency": 1,
            "opacity": 0.26,
            "shadow": {
              "blur": false,
              "color": {
                "value": "#fb00ff"
              },
              "enable": true
            },
            "triangles": {
              "enable": true,
              "frequency": 1,
              "color": {
                "value": "#0062ff"
              },
              "opacity": 0.01
            },
            "width": 2,
            "warp": true
          },
          "move": {
            "angle": {
              "offset": 45,
              "value": 90
            },
            "attract": {
              "enable": false,
              "rotate": {
                "x": 600,
                "y": 1200
              }
            },
            "direction": "none",
            "distance": 0,
            "enable": true,
            "gravity": {
              "acceleration": 9.81,
              "enable": false,
              "maxSpeed": 50
            },
            "noise": {
              "delay": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0
              },
              "enable": false
            },
            "outModes": {
              "default": "out",
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            },
            "random": false,
            "size": false,
            "speed": 1,
            "straight": false,
            "trail": {
              "enable": false,
              "length": 10,
              "fillColor": {
                "value": "#000000"
              }
            },
            "vibrate": false,
            "warp": false
          },
          "number": {
            "density": {
              "enable": true,
              "area": 800,
              "factor": 1000
            },
            "limit": 0,
            "value": 80
          },
          "opacity": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 0.5,
            "animation": {
              "enable": false,
              "minimumValue": 0.1,
              "speed": 3,
              "sync": false
            }
          },
          "reduceDuplicates": false,
          "rotate": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "sync": false
            },
            "direction": "clockwise",
            "path": false
          },
          "shadow": {
            "blur": 0,
            "color": {
              "value": "#000000"
            },
            "enable": false,
            "offset": {
              "x": 0,
              "y": 0
            }
          },
          "shape": {
            "options": {
              "polygon": {
                "sides": 5
              },
              "image": {
                "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "type": "circle"
          },
          "size": {
            "random": {
              "enable": true,
              "minimumValue": 1
            },
            "value": 2,
            "animation": {
              "destroy": "none",
              "enable": false,
              "minimumValue": 0.1,
              "speed": 20,
              "startValue": "max",
              "sync": false
            }
          },
          "stroke": {
            "width": 0,
            "color": {
              "value": "",
              // "animation": {
              //   "enable": false,
              //   "speed": 0,
              //   "sync": true
              // }
            }
          },
          "twinkle": {
            "lines": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            },
            "particles": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            }
          }
        },
        "interactivity": {
          "detectsOn": "canvas",
          "events": {
            "onClick": {
              "enable": true,
              "mode": "push"
            },
            "onDiv": {
              "selectors": [],
              "enable": false,
              "mode": [],
              "type": "circle"
            },
            "onHover": {
              "enable": false,
              "mode": "repulse",
              "parallax": {
                "enable": false,
                "force": 2,
                "smooth": 10
              }
            },
            "resize": true
          },
          "modes": {
            "attract": {
              "distance": 200,
              "duration": 0.4,
              "speed": 1
            },
            "bounce": {
              "distance": 200
            },
            "bubble": {
              "distance": 400,
              "duration": 2,
              "opacity": 0.8,
              "size": 40
            },
            "connect": {
              "distance": 80,
              "links": {
                "opacity": 0.5
              },
              "radius": 60
            },
            "grab": {
              "distance": 400,
              "links": {
                "blink": false,
                "consent": false,
                "opacity": 1
              }
            },
            "light": {
              "area": {
                "gradient": {
                  "start": {
                    "value": "#ffffff"
                  },
                  "stop": {
                    "value": "#000000"
                  }
                },
                "radius": 1000
              },
              "shadow": {
                "color": {
                  "value": "#000000"
                },
                "length": 2000
              }
            },
            "push": {
              "quantity": 4
            },
            "remove": {
              "quantity": 2
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4,
              "speed": 1
            },
            "slow": {
              "factor": 3,
              "radius": 200
            },
            "trail": {
              "delay": 1,
              "quantity": 1,
              "particles": {
                "bounce": {
                  "horizontal": {
                    "random": {}
                  },
                  "vertical": {
                    "random": {}
                  }
                },
                "collisions": {
                  "bounce": {
                    "horizontal": {
                      "random": {}
                    },
                    "vertical": {
                      "random": {}
                    }
                  }
                },
                "color": {
                  "animation": {}
                },
                "life": {
                  "delay": {
                    "random": {}
                  },
                  "duration": {
                    "random": {}
                  }
                },
                "links": {
                  "shadow": {},
                  "triangles": {}
                },
                "move": {
                  "angle": {},
                  "attract": {
                    "rotate": {}
                  },
                  "gravity": {},
                  "noise": {
                    "delay": {
                      "random": {}
                    }
                  },
                  "outModes": {},
                  "trail": {}
                },
                "number": {
                  "density": {}
                },
                "opacity": {
                  "animation": {},
                  "random": {}
                },
                "rotate": {
                  "animation": {}
                },
                "shadow": {
                  "offset": {}
                },
                "shape": {},
                "size": {
                  "animation": {},
                  "random": {}
                },
                "stroke": {
                  "color": {
                    "value": "",
                    "animation": {
                      "enable": false,
                      "speed": 0,
                      "sync": false
                    }
                  }
                },
                "twinkle": {
                  "lines": {},
                  "particles": {}
                }
              }
            }
          }
        },
        "retina_detect": true,
        "autoPlay": true,
        "background": {
          "color": {
            "value": "#000000"
          },
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover",
          "opacity": 1
        },
        "backgroundMask": {
          "composite": "destination-out",
          "cover": {
            "color": {
              "value": "#fff"
            },
            "opacity": 1
          },
          "enable": false
        },
        "backgroundMode": {
          "enable": true,
          "zIndex": 0
        },
        "detectRetina": true,
        "fpsLimit": 60,
        "infection": {
          "cure": false,
          "delay": 0,
          "enable": false,
          "infections": 0,
          "stages": []
        },
        "manualParticles": [],
        "motion": {
          "disable": false,
          "reduce": {
            "factor": 4,
            "value": false
          }
        },
        "pauseOnBlur": true,
        "themes": []
    }}
    />
    </div>
  );
}

