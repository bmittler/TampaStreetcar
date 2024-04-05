require([
  "esri/views/SceneView",
  "esri/WebScene",
  "esri/layers/GeoJSONLayer",
  "esri/layers/GraphicsLayer",
  "esri/Graphic",
  "esri/symbols/WebStyleSymbol",
  "esri/geometry/Point"
], function (
  SceneView,
  WebScene,
  GeoJSONLayer,
  GraphicsLayer,
  Graphic,
  WebStyleSymbol,
  Point
) {
  // USF logo Location 82.4928032°W 27.9988070°N
  var LogoPoint = { latitude: 27.998807, longitude: -82.4928032 };
  //TrolleyText 82.5088246°W 27.9798145°N
  var TrolleyText = { latitude: 27.9798145, longitude: -82.5088246 };
  //Trolley 1 Path
  var point1 = { latitude: 28.0210137, longitude: -82.4511617 };
  var point2 = { latitude: 28.0188284, longitude: -82.4511849 };
  var point2turn = { latitude: 28.0188284, longitude: -82.4511849 };
  var point3 = { latitude: 28.0187345, longitude: -82.4553371 };
  var point3turn = { latitude: 28.0187345, longitude: -82.4553371 };
  var point4 = { latitude: 27.9812528, longitude: -82.4553492 };
  var point4turn = { latitude: 27.9812528, longitude: -82.4553492 };
  var point5 = { latitude: 27.9812203, longitude: -82.4612521 };
  var point5turn = { latitude: 27.9812203, longitude: -82.4612521 };
  var point6 = { latitude: 27.9548268, longitude: -82.4610791 };
  var point6turn = { latitude: 27.9548268, longitude: -82.4610791 };
  var point7 = { latitude: 27.9548269, longitude: -82.460018 };
  var point7turn = { latitude: 27.9548269, longitude: -82.460018 };
  var point8 = { latitude: 27.9527155, longitude: -82.4599589 };
  var point8turn = { latitude: 27.9527155, longitude: -82.4599589 };
  var point9 = { latitude: 27.9410628, longitude: -82.4548832 };
  var point9turn = { latitude: 27.9410628, longitude: -82.4548832 };

  //Trolley 2 Path
  //82.4915043°W 27.9723731°N
  var t2point1 = { latitude: 27.9723731, longitude: -82.4915043 };
  //82.4914579°W 27.9699818°N
  var t2point2 = { latitude: 27.9699818, longitude: -82.4914579 };
  var t2point2turn = { latitude: 27.9699818, longitude: -82.4914579 };
  //82.4850603°W 27.9701868°N
  var t2point3 = { latitude: 27.9701868, longitude: -82.4850603 };
  var t2point3turn = { latitude: 27.9701868, longitude: -82.4850603 };
  //82.4850365°W 27.9649414°N
  var t2point4 = { latitude: 27.9649414, longitude: -82.4850365 };
  var t2point4turn = { latitude: 27.9649414, longitude: -82.4850365 };
  //82.4829461°W 27.9649706°N
  var t2point5 = { latitude: 27.9649706, longitude: -82.4829461 };
  var t2point5turn = { latitude: 27.9649706, longitude: -82.4829461 };
  //82.4828139°W 27.9505905°N
  var t2point6 = { latitude: 27.9505905, longitude: -82.4828139 };
  var t2point6turn = { latitude: 27.9505905, longitude: -82.4828139 };
  //82.4806995°W 27.9505625°N
  var t2point7 = { latitude: 27.9505625, longitude: -82.4806995 };
  var t2point7turn = { latitude: 27.9505625, longitude: -82.4806995 };
  //82.4806508°W 27.9446616°N
  var t2point8 = { latitude: 27.9446616, longitude: -82.4806508 };
  var t2point8turn = { latitude: 27.9446616, longitude: -82.4806508 };
  //82.4668980°W 27.9448021°N
  var t2point9 = { latitude: 27.9448021, longitude: -82.466898 };
  var t2point9turn = { latitude: 27.9448021, longitude: -82.466898 };
  //82.4572593°W 27.9484303°N
  var t2point10 = { latitude: 27.9484303, longitude: -82.4572593 };
  var t2point10turn = { latitude: 27.9484303, longitude: -82.4572593 };
  //82.4581478°W 27.9505116°N
  var t2point11 = { latitude: 27.9505116, longitude: -82.4581478 };
  var t2point11turn = { latitude: 27.9505116, longitude: -82.4581478 };
  //82.4599980°W 27.9498441°N
  var t2point12 = { latitude: 27.9498441, longitude: -82.459998 };
  var t2point12turn = { latitude: 27.9498441, longitude: -82.459998 };
  //82.4591370°W 27.9477117°N
  var t2point13 = { latitude: 27.9477117, longitude: -82.459137 };
  var t2point13turn = { latitude: 27.9477117, longitude: -82.459137 };

  //trolley 3 path
  //82.4578363°W 27.9497977°N
  var t3point1 = { latitude: 27.9497977, longitude: -82.4578363 };
  //82.4514617°W 27.9519621°N
  var t3point2 = { latitude: 27.9519621, longitude: -82.4514617 };
  var t3point2turn = { latitude: 27.9519621, longitude: -82.4514617 };
  //82.4514858°W 27.9603280°N
  var t3point3 = { latitude: 27.960328, longitude: -82.4514858 };
  var t3point3turn = { latitude: 27.960328, longitude: -82.4514858 };
  //82.4346811°W 27.9603565°N
  var t3point4 = { latitude: 27.9603565, longitude: -82.4346811 };
  var t3point4turn = { latitude: 27.9603565, longitude: -82.4346811 };
  //82.4348843°W 27.9671252°N
  var t3point5 = { latitude: 27.9671252, longitude: -82.4348843 };
  var t3point5turn = { latitude: 27.9671252, longitude: -82.4348843 };
  //82.4279353°W 27.9671252°N
  var t3point6 = { latitude: 27.9671252, longitude: -82.4279353 };
  var t3point6turn = { latitude: 27.9671252, longitude: -82.4279353 };
  //82.4282139°W 27.9858813°N
  var t3point7 = { latitude: 27.9858813, longitude: -82.4282139 };
  var t3point7turn = { latitude: 27.9858813, longitude: -82.4282139 };
  //82.4264222°W 27.9882031°N
  var t3point8 = { latitude: 27.9882031, longitude: -82.4264222 };
  var t3point8turn = { latitude: 27.9882031, longitude: -82.4264222 };
  //82.4261650°W 27.9958053°N
  var t3point9 = { latitude: 27.9958053, longitude: -82.426165 };
  var t3point9turn = { latitude: 27.9958053, longitude: -82.426165 };

  //Scene with troll Map
  var scene = new WebScene({
    portalItem: {
      id: "e578b4454a9f40e187fa2b03230083a5"
    }
  });

  var view = new SceneView({
    // qualityProfile: "high",
    map: scene,
    container: "viewDiv",
    camera: {
      position: {
        x: -82.42962352,
        y: 27.87631816,
        z: 5500
      },
      heading: 345,
      tilt: 65.4
    }
  });

  //adding Map Gallery Text
  const LogoLayer = new GraphicsLayer({
    //id: "infoLayer",
    elevationInfo: {
      mode: "relative-to-ground"
    }
  });
  //
  scene.add(LogoLayer);

  const USFlogo3D = new Graphic({
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "https://assets.codepen.io/11049283/ViewCollection.glb"
          },
          height: 550,
          heading: 315,
          tilt: 0,
          anchor: "bottom"
        }
      ]
    },

    //82.5067102°W 28.0028511°N
    geometry: new Point({
      ...LogoPoint,
      z: 150
    })
  });

  LogoLayer.add(USFlogo3D);
  //pointer change for hover over trolley text

  view.ui.components = ["attribution"];
  //clicking Map Gallery to open a window
  view.on("click", (event) => {
    const opts = {
      include: LogoLayer
    };
    view.hitTest(event, opts).then((response) => {
      if (response.results.length) {
        window.open("https://digitalcommons.usf.edu/fl_maps/");
      }
    });
  });

  //adding TrolleyMapText
  const TrolleyTextLayer = new GraphicsLayer({
    //id: "infoLayer",
    elevationInfo: {
      mode: "relative-to-ground"
    }
  });

  scene.add(TrolleyTextLayer);

  const TrolleyText3D = new Graphic({
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "https://assets.codepen.io/11049283/DownloadHere.glb"
          },
          height: 550,
          heading: 300,
          tilt: 0,
          anchor: "bottom"
        }
      ]
    },

    //82.5067102°W 28.0028511°N
    geometry: new Point({
      ...TrolleyText,
      z: 150
    })
  });

  TrolleyTextLayer.add(TrolleyText3D);

  //pointer change for hover over trolley text and Map Gallery

  view.on("pointer-move", (event) => {
    const opts = {
      include: [TrolleyTextLayer, LogoLayer]
    };
    view.hitTest(event, opts).then((response) => {
      if (response.results.length) {
        document.getElementById("viewDiv").style.cursor = "pointer";
      } else {
        document.getElementById("viewDiv").style.cursor = "default";
      }
    });
  });

  //clicking Trolley Map to open a window
  view.on("click", (event) => {
    const opts = {
      include: TrolleyTextLayer
    };
    view.hitTest(event, opts).then((response) => {
      if (response.results.length) {
        window.open("https://digitalcommons.usf.edu/fl_maps_local/8//");
      }
    });
  });

  // Trolley 1 3D Model Setup
  const TrolleyGraphicsLayer1 = new GraphicsLayer({
    elevationInfo: {
      mode: "relative-to-ground"
    },
    opacity: 0.9
  });
  scene.add(TrolleyGraphicsLayer1);

  const TrolleyGraphic1 = new Graphic({
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "https://assets.codepen.io/11049283/tampastreetcar.glb"
          },
          height: 140,
          heading: 180,
          tilt: 0,
          anchor: "bottom"
        }
      ]
    },
    geometry: new Point({
      ...point1,
      z: 2
    })
  });

  TrolleyGraphicsLayer1.add(TrolleyGraphic1);

  const TrolleyGeometry1 = TrolleyGraphic1.geometry;
  const TrolleySymbolLayer1 = TrolleyGraphic1.symbol.symbolLayers.getItemAt(0);

  const animateTrolley1 = anime
    .timeline({
      autoplay: true,
      targets: [TrolleyGeometry1, TrolleySymbolLayer1],
      loop: true,
      update: function () {
        TrolleyGraphic1.geometry = TrolleyGeometry1.clone();
        TrolleyGraphic1.symbol = TrolleyGraphic1.symbol.clone();
        TrolleyGraphic1.symbol.symbolLayers = [TrolleySymbolLayer1];
      }
    })
    .add({ ...point2, heading: 180, easing: "linear", duration: 3000 }, 1800)
    .add(
      { ...point2turn, easing: "linear", heading: 270, duration: 1000 },
      "+=100"
    )
    .add({ ...point3, easing: "linear", duration: 3000 }, "+=200")
    .add(
      { ...point3turn, easing: "linear", duration: 1000, heading: 180 },
      "+=100"
    )
    .add({ ...point4, easing: "linear", duration: 31000 }, "+=200")
    .add(
      { ...point4turn, easing: "linear", duration: 1000, heading: 270 },
      "+=100"
    )
    .add({ ...point5, easing: "linear", duration: 4300 }, "+=200")
    .add(
      { ...point5turn, easing: "linear", heading: 180, duration: 1000 },
      "+=100"
    )
    .add({ ...point6, easing: "linear", duration: 22000 }, "+=200")
    .add(
      { ...point6turn, easing: "linear", heading: 90, duration: 1000 },
      "+=100"
    )
    .add({ ...point7, easing: "linear", duration: 1000 }, "+=200")
    .add(
      { ...point7turn, easing: "linear", heading: 179, duration: 1000 },
      "+=100"
    )
    .add({ ...point8, easing: "linear", duration: 2000 }, "+=200")
    .add(
      { ...point8turn, easing: "linear", heading: 161, duration: 1000 },
      "+=100"
    )
    .add({ ...point9, easing: "linear", duration: 10400 }, "+=800")
    .add({ ...point8, easing: "linear", duration: 10400 }, "+=200")
    .add(
      { ...point8turn, easing: "linear", heading: 179, duration: 1000 },
      "+=100"
    )
    .add({ ...point7, easing: "linear", duration: 2000 }, "+=200")
    .add(
      { ...point7turn, easing: "linear", heading: 90, duration: 1000 },
      "+=100"
    )
    .add({ ...point6, easing: "linear", duration: 1000 }, "+=200")
    .add(
      { ...point6turn, easing: "linear", heading: 180, duration: 1000 },
      "+=100"
    )
    .add({ ...point5, easing: "linear", duration: 22000 }, "+=200")
    .add(
      { ...point5turn, easing: "linear", heading: 270, duration: 1000 },
      "+=100"
    )
    .add({ ...point4, easing: "linear", duration: 4300 }, "+=200")
    .add(
      { ...point4turn, easing: "linear", heading: 180, duration: 1000 },
      "+=100"
    )
    .add({ ...point3, easing: "linear", duration: 31000 }, "+=200")
    .add(
      { ...point3turn, easing: "linear", heading: 270, duration: 1000 },
      "+=100"
    )
    .add({ ...point2, easing: "linear", duration: 3000 }, "+=200")
    .add(
      { ...point2turn, easing: "linear", heading: 270, duration: 1000 },
      "+=100"
    )
    .add({ ...point1, easing: "linear", duration: 1800 }, "+=200");

  animateTrolley1.play();

  //trolley 2 setup

  const TrolleyGraphicsLayer2 = new GraphicsLayer({
    elevationInfo: {
      mode: "relative-to-ground"
    },
    opacity: 0.9,
    scale: 5
  });
  scene.add(TrolleyGraphicsLayer2);

  const TrolleyGraphic2 = new Graphic({
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "https://assets.codepen.io/11049283/tampastreetcar.glb"
          },
          height: 140,
          heading: 181,
          tilt: 0,
          anchor: "bottom"
        }
      ]
    },
    geometry: new Point({
      ...t2point1,
      z: 2
    })
  });

  TrolleyGraphicsLayer2.add(TrolleyGraphic2);

  const TrolleyGeometry2 = TrolleyGraphic2.geometry;
  const TrolleySymbolLayer2 = TrolleyGraphic2.symbol.symbolLayers.getItemAt(0);

  const animateTrolley2 = anime
    .timeline({
      autoplay: true,
      targets: [TrolleyGeometry2, TrolleySymbolLayer2],
      loop: true,
      update: function () {
        TrolleyGraphic2.geometry = TrolleyGeometry2.clone();
        TrolleyGraphic2.symbol = TrolleyGraphic2.symbol.clone();
        TrolleyGraphic2.symbol.symbolLayers = [TrolleySymbolLayer2];
      }
    })
    .add(
      { ...t2point1, heading: 179.5, easing: "linear", duration: 5000 },
      "+=200"
    )
    .add(
      { ...t2point2, heading: 179.5, easing: "linear", duration: 2000 },
      "+=200"
    )
    .add(
      { ...t2point2turn, heading: 89, easing: "linear", duration: 1000 },
      "+=100"
    )
    .add(
      { ...t2point3, heading: 89, easing: "linear", duration: 4700 },
      "+=200"
    )
    .add(
      { ...t2point3turn, heading: 180, easing: "linear", duration: 1000 },
      "+=100"
    )
    .add(
      { ...t2point4, heading: 180, easing: "linear", duration: 4400 },
      "+=200"
    )
    .add(
      { ...t2point4turn, heading: 90, easing: "linear", duration: 1000 },
      "+=100"
    )
    .add(
      { ...t2point5, heading: 90, easing: "linear", duration: 2000 },
      "+=200"
    )
    .add(
      { ...t2point5turn, heading: 179, easing: "linear", duration: 1000 },
      "+=100"
    )
    .add(
      { ...t2point6, heading: 179, easing: "linear", duration: 12000 },
      "+=200"
    )
    .add(
      { ...t2point6turn, heading: 90, easing: "linear", duration: 1000 },
      "+=100"
    )
    .add(
      { ...t2point7, heading: 90, easing: "linear", duration: 1500 },
      "+=200"
    )
    .add(
      { ...t2point7turn, heading: 180, easing: "linear", duration: 1000 },
      "+=100"
    )
    .add(
      { ...t2point8, heading: 180, easing: "linear", duration: 5000 },
      "+=200"
    )
    .add(
      { ...t2point8turn, heading: 90, easing: "linear", duration: 1000 },
      "+=100"
    )
    .add(
      { ...t2point9, heading: 90, easing: "linear", duration: 10000 },
      "+=200"
    )
    .add(
      { ...t2point9turn, heading: 65, easing: "linear", duration: 1000 },
      "+=50"
    )
    .add(
      { ...t2point10, heading: 65, easing: "linear", duration: 8000 },
      "+=200"
    )
    .add(
      { ...t2point10turn, heading: -25, easing: "linear", duration: 1000 },
      "+=100"
    )
    .add(
      { ...t2point11, heading: -25, easing: "linear", duration: 2000 },
      "+=200"
    )
    .add(
      { ...t2point11turn, heading: -115, easing: "linear", duration: 1000 },
      "+=100"
    )
    .add(
      { ...t2point12, heading: -115, easing: "linear", duration: 1600 },
      "+=200"
    )
    .add(
      { ...t2point12turn, heading: -205, easing: "linear", duration: 1000 },
      "+=100"
    )
    .add(
      { ...t2point13, heading: -205, easing: "linear", duration: 2000 },
      "+=200"
    )
    .add(
      { ...t2point13turn, heading: -115, easing: "linear", duration: 1000 },
      "+=100"
    )
    .add(
      { ...t2point9, heading: -115, easing: "linear", duration: 7000 },
      "+=200"
    )
    .add(
      { ...t2point9turn, heading: -90, easing: "linear", duration: 1000 },
      "+=50"
    )
    .add(
      { ...t2point8, heading: -90, easing: "linear", duration: 10000 },
      "+=200"
    )
    .add(
      { ...t2point8turn, heading: 0, easing: "linear", duration: 1000 },
      "+=100"
    )
    .add(
      { ...t2point7, heading: 0, easing: "linear", duration: 15000 },
      "+=200"
    )
    .add(
      { ...t2point7turn, heading: -90, easing: "linear", duration: 1000 },
      "+=100"
    )
    .add(
      { ...t2point6, heading: -90, easing: "linear", duration: 1500 },
      "+=200"
    )
    .add(
      { ...t2point6turn, heading: 0, easing: "linear", duration: 1000 },
      "+=100"
    )
    .add(
      { ...t2point5, heading: 0, easing: "linear", duration: 12000 },
      "+=200"
    )
    .add(
      { ...t2point5turn, heading: -90, easing: "linear", duration: 1000 },
      "+=100"
    )
    .add(
      { ...t2point4, heading: -90, easing: "linear", duration: 2000 },
      "+=200"
    )
    .add(
      { ...t2point4turn, heading: 0, easing: "linear", duration: 1000 },
      "+=100"
    )
    .add({ ...t2point3, heading: 0, easing: "linear", duration: 4400 }, "+=200")
    .add(
      { ...t2point3turn, heading: -90, easing: "linear", duration: 1000 },
      "+=200"
    )
    .add(
      { ...t2point2, heading: -90, easing: "linear", duration: 4700 },
      "+=200"
    )
    .add(
      { ...t2point2turn, heading: 0, easing: "linear", duration: 1000 },
      "+=200"
    )
    .add(
      { ...t2point1, heading: -0, easing: "linear", duration: 2000 },
      "+=200"
    );

  animateTrolley2.play();

  const TrolleyGraphicsLayer3 = new GraphicsLayer({
    elevationInfo: {
      mode: "relative-to-ground"
    },
    opacity: 0.9
  });
  scene.add(TrolleyGraphicsLayer3);

  const TrolleyGraphic3 = new Graphic({
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "https://assets.codepen.io/11049283/tampastreetcar.glb"
          },
          height: 140,
          heading: 65,
          tilt: 0,
          anchor: "bottom"
        }
      ]
    },
    geometry: new Point({
      ...t3point1,
      z: 2
    })
  });

  TrolleyGraphicsLayer3.add(TrolleyGraphic3);

  const TrolleyGeometry3 = TrolleyGraphic3.geometry;
  const TrolleySymbolLayer3 = TrolleyGraphic3.symbol.symbolLayers.getItemAt(0);

  const animateTrolley3 = anime
    .timeline({
      autoplay: true,
      targets: [TrolleyGeometry3, TrolleySymbolLayer3],
      loop: true,
      update: function () {
        TrolleyGraphic3.geometry = TrolleyGeometry3.clone();
        TrolleyGraphic3.symbol = TrolleyGraphic3.symbol.clone();
        TrolleyGraphic3.symbol.symbolLayers = [TrolleySymbolLayer3];
      }
    })
    .add({ ...t3point2, heading: 65, easing: "linear", duration: 5000 }, 2000)
    .add(
      { ...t3point2turn, easing: "linear", heading: 0, duration: 1000 },
      "+=100"
    )
    .add({ ...t3point3, easing: "linear", duration: 6900 }, "+=200")
    .add(
      { ...t3point3turn, easing: "linear", heading: 90, duration: 1000 },
      "+=100"
    )
    .add({ ...t3point4, easing: "linear", duration: 12000 }, "+=200")
    .add(
      { ...t3point4turn, easing: "linear", heading: 0, duration: 1000 },
      "+=100"
    )
    .add({ ...t3point5, easing: "linear", duration: 5600 }, "+=200")
    .add(
      { ...t3point5turn, easing: "linear", heading: 90, duration: 2000 },
      "+=100"
    )
    .add({ ...t3point6, easing: "linear", duration: 5100 }, "+=200")
    .add(
      { ...t3point6turn, easing: "linear", heading: 0, duration: 1000 },
      "+=200"
    )
    .add({ ...t3point7, easing: "linear", duration: 15600 }, "+=200")
    .add(
      { ...t3point7turn, easing: "linear", heading: 30, duration: 1000 },
      "+=100"
    )
    .add({ ...t3point8, easing: "linear", duration: 2330 }, "+=200")
    .add(
      { ...t3point8turn, easing: "linear", heading: 0, duration: 1000 },
      "+=100"
    )
    .add({ ...t3point9, easing: "linear", duration: 6300 }, "+=800")
    .add({ ...t3point8, easing: "linear", duration: 6300 }, "+=200")
    .add(
      { ...t3point8turn, easing: "linear", heading: 30, duration: 1000 },
      "+=100"
    )
    .add({ ...t3point7, easing: "linear", duration: 2300 }, "+=200")
    .add(
      { ...t3point7turn, easing: "linear", heading: 0, duration: 1000 },
      "+=100"
    )
    .add({ ...t3point6, easing: "linear", duration: 15600 }, "+=200")
    .add(
      { ...t3point6turn, easing: "linear", heading: 90, duration: 1000 },
      "+=100"
    )
    .add({ ...t3point5, easing: "linear", duration: 5100 }, "+=200")
    .add(
      { ...t3point5turn, easing: "linear", heading: 0, duration: 1000 },
      "+=100"
    )
    .add({ ...t3point4, easing: "linear", duration: 5600 }, "+=200")
    .add(
      { ...t3point4turn, easing: "linear", heading: 90, duration: 1000 },
      "+=100"
    )
    .add({ ...t3point3, easing: "linear", duration: 12300 }, "+=200")
    .add(
      { ...t3point3turn, easing: "linear", heading: 0, duration: 1000 },
      "+=100"
    )
    .add({ ...t3point2, easing: "linear", duration: 6900 }, "+=200")
    .add(
      { ...t3point2turn, easing: "linear", heading: 65, duration: 1000 },
      "+=100"
    )
    .add({ ...t3point1, easing: "linear", duration: 5000 }, "+=200");

  animateTrolley3.play();
});

$(window).on("load", function () {
  setTimeout(function () {
    // allowing 3 secs to fade out loader
    $(".page-loader").fadeOut(1300);
  }, 4500);
});