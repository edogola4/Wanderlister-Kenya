/* --------------------------------------------------------
/* Customized Particle Animation for Nature and Travel Website
/* -------------------------------------------------------- */

particlesJS('particles-js',  // Target the 'particles-js' element

    {  // Configuration object for the particle effect
      "particles": {  // Control particles' behavior and appearance
        "number": {
          "value": 80,  // Increase particle count for a fuller, more immersive experience
          "density": {
            "enable": true,
            "value_area": 1000  // Spread particles more across the screen for a natural look
          }
        },
        "color": {
          "value": "#4caf50"  // Nature-inspired green color for particles
        },
        "shape": {
          "type": "circle",  // Use round particles to resemble nature elements like pollen or bubbles
          "stroke": {
            "width": 0,
            "color": "#ffffff"  // Keep stroke color transparent
          },
          "polygon": {
            "nb_sides": 5  // Leaves a soft, organic feeling with rounded edges
          },
          "image": {
            "src": "img/nature-icon.svg",  // Optional nature-related image particles (e.g., leaf, water droplet)
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.8,  // Slightly higher opacity for clearer particles
          "random": false,
          "anim": {  
            "enable": false,
            "speed": 1,
            "opacity_min": 0.3,
            "sync": false
          }
        },
        "size": {
          "value": 6,  // Use moderate particle sizes for a gentle, natural effect
          "random": true,
          "anim": {
            "enable": true,
            "speed": 8,  // Smooth size transition for a calming, organic effect
            "size_min": 1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,  // Enable connections between particles
          "distance": 150,  // Shorter connection distance for a cozy effect
          "color": "#4caf50",  // Green lines to match the nature theme
          "opacity": 0.7,  // Softer, natural opacity for connecting lines
          "width": 1  // Thin, unobtrusive lines
        },
        "move": {
          "enable": true,
          "speed": 2,  // Slower speed for a more serene, relaxing movement
          "direction": "none",  // Particles move freely in all directions
          "random": true,  
          "straight": false,  // Particles will have free-flowing, organic paths
          "out_mode": "out",  
          "attract": {
            "enable": false
          }
        }
      },
      "interactivity": {  // Configure how users can interact with the particles
        "detect_on": "canvas",  
        "events": {
          "onhover": {
            "enable": true,  // Enable hover interaction
            "mode": "bubble"  // Particles will "bubble" up when hovered over
          },
          "onclick": {
            "enable": true,  // Enable click interaction
            "mode": "push"  // Add more particles on click
          },
          "resize": true  // Adjust particle layout when window is resized
        },
        "modes": {
          "grab": {
            "distance": 400,  
            "line_linked": {
              "opacity": 0.8  // Higher opacity for visible lines when grabbing
            }
          },
          "bubble": {  
            "distance": 200,
            "size": 10,  // Enlarge particles on hover for a more dynamic effect
            "duration": 2,  
            "opacity": 1,  
            "speed": 3
          },
          "repulse": {
            "distance": 100  // Repel particles when the user hovers
          },
          "push": {
            "particles_nb": 6  // Increase the number of particles when clicked
          },
          "remove": {
            "particles_nb": 2  // Number of particles removed on click
          }
        }
      },
      "retina_detect": true,  // Ensure retina display compatibility
      "config_demo": {  
        "hide_card": true,  
        "background_color": "#ffffff",  // Light background to highlight particles
        "background_image": "",  // No background image for a clean look
        "background_position": "50% 50%",  
        "background_repeat": "no-repeat",  
        "background_size": "cover"  // Use background cover style
      }
    }
  
  );
