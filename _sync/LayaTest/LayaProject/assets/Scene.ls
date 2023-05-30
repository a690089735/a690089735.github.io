{
  "_$ver": 1,
  "_$id": "lx8mwule",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "9f85d930-3b2b-4ed7-b880-968bc868bb6f",
      "scriptPath": "../src/ShootBullet.ts",
      "text": "",
      "bulletPrefab": {
        "_$uuid": "5cf1c18e-7259-4620-881f-419da5b40397",
        "_$type": "Prefab"
      }
    }
  ],
  "_$child": [
    {
      "_$id": "lnu3eob9",
      "_$type": "Sprite",
      "name": "Sprite",
      "x": 568,
      "y": 319.5,
      "width": 512,
      "height": 313,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "texture": {
        "_$uuid": "c13c1b8e-c516-4a0f-98ad-e356f45f0365",
        "_$type": "Texture"
      },
      "_$comp": [
        {
          "_$type": "ad0e797a-dc3d-491a-bba5-ab456c661981",
          "scriptPath": "../src/DragMove.ts",
          "sprite": {
            "_$ref": "lnu3eob9"
          }
        }
      ]
    }
  ]
}