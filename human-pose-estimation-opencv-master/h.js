function addExample(label) {
    const inputs = [];
    if (poses.length > 0) {
      const keypoints = poses[0].pose.keypoints;
      keypoints.forEach((keypoint) => {
        inputs.push(keypoint.position.x, keypoint.position.y);
      });
      // Add the example with the corresponding label
      knnClassifier.addExample(inputs, label);
      console.log(`Example added for ${label}`);
    }
  }
  
  document.addEventListener('keydown', (event) => {
    if (event.key === 'j') {
      addExample('jumping');
    } else if (event.key === 's') {
      addExample('sitting');
    } else if (event.key === 'w') {
      addExample('waving');
    }
  });
  