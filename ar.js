<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
<script>
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
      console.log("Camera permission granted");
    })
    .catch(function(err) {
      console.log("Camera permission denied: " + err);
    });
</script>
<a-scene
    vr-mode-ui="enabled: false;"
    renderer="logarithmicDepthBuffer: true;"
    embedded
    arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
  >
    <a-nft
      type="nft"
      url="https://raw.githubusercontent.com/njblackheritagetrail/virtualmuseum/main/drakeHouseQRCode.png"
      smooth="true"
      smoothCount="10"
      smoothTolerance=".01"
      smoothThreshold="5"
    >        
    </a-nft>
</a-scene>
