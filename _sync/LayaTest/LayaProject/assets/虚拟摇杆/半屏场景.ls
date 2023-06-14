{
  "_$ver": 1,
  "_$id": "7opfrdgv",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$child": [
    {
      "_$id": "8ewselj7",
      "_$type": "Box",
      "name": "BoxLeft",
      "y": 320,
      "width": 200,
      "height": 200,
      "anchorY": 0.5,
      "left": 0,
      "centerY": 0,
      "bgColor": "rgba(255, 255, 255, 1)",
      "_$comp": [
        {
          "_$type": "86cee8ba-e66a-4ce5-93a0-4e55ef2bdec5",
          "scriptPath": "../src/虚拟摇杆/ScreenHalf.ts",
          "virtualStickPrefab": {
            "_$uuid": "029cd8dc-dba0-4faf-baab-ddd43c493269",
            "_$type": "Prefab"
          }
        }
      ]
    },
    {
      "_$id": "yvfl7uww",
      "_$type": "Box",
      "name": "BoxRight",
      "x": 1136,
      "y": 320,
      "width": 200,
      "height": 200,
      "anchorX": 1,
      "anchorY": 0.5,
      "right": 0,
      "centerY": 0,
      "bgColor": "rgba(0, 0, 0, 1)",
      "_$comp": [
        {
          "_$type": "86cee8ba-e66a-4ce5-93a0-4e55ef2bdec5",
          "scriptPath": "../src/虚拟摇杆/ScreenHalf.ts",
          "virtualStickPrefab": {
            "_$uuid": "029cd8dc-dba0-4faf-baab-ddd43c493269",
            "_$type": "Prefab"
          }
        }
      ]
    }
  ]
}