import "./_components.js";
import { burger } from "./functions/burger.js";
import { YMapDefaultMarker } from "@yandex/ymaps3-default-ui-theme";

if (document.querySelector(".contacts")) {
  initMap();
  async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

    const map1 = new YMap(
      document.getElementById("map1"),

      {
        location: {
          center: [37.588144, 55.733842],
          zoom: 16,
        },
      },
      [
        // Add a map scheme layer
        new YMapDefaultSchemeLayer({}),
        // Add a layer of geo objects to display the markers
        new YMapDefaultFeaturesLayer({}),
      ]
    );

    map1.addChild(
      new YMapDefaultMarker({
        coordinates: [37.588144, 55.733842],
        title: "Днепровская улица, 25",
        color: "darkblue",
        size: "normal",
        iconName: "fallback",
      })
    );

    const map2 = new YMap(
      document.getElementById("map2"),

      {
        location: {
          center: [37.588144, 55.733842],
          zoom: 16,
        },
      },
      [
        // Add a map scheme layer
        new YMapDefaultSchemeLayer({}),
        // Add a layer of geo objects to display the markers
        new YMapDefaultFeaturesLayer({}),
      ]
    );

    map2.addChild(
      new YMapDefaultMarker({
        coordinates: [37.588144, 55.733842],
        title: "Рязанский проспект, 86/1c1",
        color: "darkblue",
        size: "normal",
        iconName: "fallback",
      })
    );
  }
}
