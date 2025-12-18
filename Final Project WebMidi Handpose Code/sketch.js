/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates hand tracking on live video through ml5.handPose.
 */

//handpose stuff below
let handPose; // variable to store the model
let video; // variable to store video frames
let hands = []; // array to store hand poses (up to 2)
let pinch = 1000;
let pinched = false; // variable to remember pinched state
let centerX = 0;
let centerY = 0;

function preload() {
  // Load the handPose model
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
  background(0);
}

function draw() {
  // Draw the webcam video
  // image(video, 0, 0, width, height);

  if (hands.length > 0) {
    // Below code is for the "pinch gesture"
    // In order to do a different gesture, need to figure out ml5 key points for things like a hand wave -- or just on the x/y axis
    let indexTip = hands[0].keypoints[8]; // store the index finger tip
    let thumbTip = hands[0].keypoints[4];
    centerX = lerp(indexTip.x, thumbTip.x, 0.5);
    centerY = lerp(indexTip.y, thumbTip.y, 0.5);
    pinch = dist(indexTip.x, indexTip.y, thumbTip.x, thumbTip.y);
    if (pinch < 10) {
      // this threshold should be scaled to
      //accomodate different depths
      strokeWeight(10);
      if (pinched == false) {
        let coord = createVector(centerX, centerY);

        pinched = true;
      }
    } else {
      strokeWeight(1);
      pinched = false;
    }

    // Below notes from Craig to assign midi to Rekordbox
    // in the below web midi functions, 21 is the controller number (channel 3)
    // to add controls to parameters copy that same lane and change 21 to 22 (for each parameter)

    // When I tried assigning all 3 midi parameters it was not working, later Craig told me comment out
    //the other lines of midi code while I'm assigning each one (which worked in the end as well!)
    // the next issue is that it still wasn't working. After hours of trying to trouble shoot (was it that handpose wasn't working?
    // was my camera not working right? Was rekordbox not working right? Was Chrome not working right? My laptop? VS code?)
    // After literal hours of trouble shooting I remembered what Craig told me about the Audio Midi Set up in Utilities
    // and decided to check that out. I was pretty sure that the IAC driver was what I needed to check. When I looked there I saw
    // that only port 1 was there, while I was using channel/ port/ bus 3 in my code which was what the directions said. I'm wondering
    // if the setitng changed or defaulted on their own to port 1. Anyway, once I changed the below code to channel 1 instead of 3, the
    // code worked with webmidi and Rekordbox.

    WebMidi.outputs[0].channels[1].sendControlChange(
      // Tempo / BPM change deck 2
      21,
      map(pinch, 0, 100, 0, 127, true).toFixed(0)
    );

    WebMidi.outputs[0].channels[1].sendControlChange(
      //FX1 level/ depth
      23,
      map(centerX, 0, width, 127, 0, true).toFixed(0)
    );

    WebMidi.outputs[0].channels[1].sendControlChange(
      //volume channel fader Deck 1
      24,
      map(centerY, 0, height, 127, 0, true).toFixed(0)
    );
  }
}

// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}
