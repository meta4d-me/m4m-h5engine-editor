/**
@license
Copyright (c) 2022 meta4d.me Authors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */
//类名对应的编号
export enum nameEnum{
Prefab2D = 1 ,
exC2DComponent = 2 ,
Prefab = 3 ,
gameObjectInfo = 4 ,
aniplayer = 5 ,
Aniclip = 6 ,
skinnedMeshRenderer = 7 ,
Mat = 8 ,
mapUniInfo = 9 ,
ImageSetting = 10 ,
Mesh = 11 ,
Bounds = 12 ,
subMeshInfo = 13 ,
fileInfo = 14 ,
meshFilter = 15 ,
meshRenderer = 16 ,
boxcollider = 17 ,
camera = 18 ,
spherecollider = 19 ,
asbone = 20 ,
meshcollider = 21 ,
rawImage2D = 22 ,
image2D = 23 ,
}
//属性名对应的编号
//因为不同类可能有同名属性，所以采用 类名$属性名 的格式来记录
export enum prtEnum{
Prefab2D$tag = 1 ,
Prefab2D$tranName = 2 ,
Prefab2D$children = 3 ,
Prefab2D$width = 4 ,
Prefab2D$height = 5 ,
Prefab2D$_visible = 6 ,
Prefab2D$localTranslate = 7 ,
Prefab2D$localScale = 8 ,
Prefab2D$insid = 9 ,
Prefab2D$components = 10 ,
Prefab2D$layoutState = 11 ,
Prefab2D$layoutValueMap = 12 ,
Prefab$className = 13 ,
Prefab$tranName = 14 ,
Prefab$localRotate = 15 ,
Prefab$localTranslate = 16 ,
Prefab$localScale = 17 ,
Prefab$gameObject = 18 ,
gameObjectInfo$components = 19 ,
aniplayer$className = 20 ,
aniplayer$clips = 21 ,
Aniclip$fileName = 22 ,
Aniclip$aniclipName = 23 ,
Aniclip$fps = 24 ,
Aniclip$loop = 25 ,
Aniclip$boneCount = 26 ,
Aniclip$bones = 27 ,
Aniclip$indexDic = 28 ,
Aniclip$frameCount = 29 ,
Aniclip$frames = 30 ,
aniplayer$bones = 31 ,
aniplayer$startPos = 32 ,
aniplayer$animNames = 33 ,
Prefab$children = 34 ,
skinnedMeshRenderer$className = 35 ,
skinnedMeshRenderer$materials = 36 ,
Mat$className = 37 ,
Mat$shader = 38 ,
Mat$srcshader = 39 ,
Mat$mapUniform = 40 ,
mapUniInfo$value = 41 ,
Mat$fileName = 42 ,
skinnedMeshRenderer$center = 43 ,
skinnedMeshRenderer$size = 44 ,
skinnedMeshRenderer$mesh = 45 ,
skinnedMeshRenderer$rootBone = 46 ,
skinnedMeshRenderer$bones = 47 ,
skinnedMeshRenderer$player = 48 ,
Prefab$insid = 49 ,
ImageSetting$className = 50 ,
ImageSetting$imageName = 51 ,
ImageSetting$filterMode = 52 ,
ImageSetting$format = 53 ,
ImageSetting$mipmap = 54 ,
ImageSetting$wrap = 55 ,
Mesh$className = 56 ,
Mesh$meshName = 57 ,
Mesh$originVF = 58 ,
Mesh$bounds = 59 ,
Bounds$extents = 60 ,
Bounds$center = 61 ,
Mesh$posCount = 62 ,
Mesh$vec10tpose = 63 ,
Mesh$trisindex = 64 ,
Mesh$subMesh = 65 ,
subMeshInfo$size = 66 ,
Mesh$tmpVArr = 67 ,
Mesh$minimum = 68 ,
Mesh$maximum = 69 ,
subMeshInfo$matIndex = 70 ,
subMeshInfo$start = 71 ,
fileInfo$fileCount = 72 ,
aniplayer$clipKeys = 73 ,
Prefab$outPath = 74 ,
ImageSetting$outPath = 75 ,
Mat$outPath = 76 ,
Mesh$outPath = 77 ,
mapUniInfo$valueKey = 78 ,
skinnedMeshRenderer$materialsKey = 79 ,
skinnedMeshRenderer$meshKey = 80 ,
ImageSetting$imageKey = 81 ,
mapUniInfo$type = 82 ,
gameObjectInfo$tag = 83 ,
meshFilter$className = 84 ,
meshFilter$mesh = 85 ,
meshRenderer$className = 86 ,
meshRenderer$materialsKey = 87 ,
meshRenderer$lightmapIndex = 88 ,
boxcollider$className = 89 ,
boxcollider$center = 90 ,
boxcollider$size = 91 ,
ImageSetting$premultiplyAlpha = 92 ,
meshFilter$meshKey = 93 ,
gameObjectInfo$visible = 94 ,
meshRenderer$materials = 95 ,
Mat$fileKey = 96 ,
meshRenderer$lightmapScaleOffset = 97 ,
mapUniInfo$valueInfo = 98 ,
camera$className = 99 ,
camera$near = 100 ,
camera$far = 101 ,
camera$CullingMask = 102 ,
camera$fov = 103 ,
camera$size = 104 ,
camera$opvalue = 105 ,
subMeshInfo$line = 106 ,
spherecollider$className = 107 ,
spherecollider$radius = 108 ,
spherecollider$center = 109 ,
asbone$className = 110 ,
skinnedMeshRenderer$_mesh = 111 ,
meshcollider$className = 112 ,
Mat$InstanceID = 113 ,
Mesh$position = 114 ,
Mesh$color = 115 ,
Mesh$normal = 116 ,
Mesh$UV0 = 117 ,
Mesh$UV1 = 118 ,
Mesh$tangent = 119 ,
Mesh$blendIndex = 120 ,
Mesh$blendWeight = 121 ,
Prefab2D$className = 122 ,
rawImage2D$className = 123 ,
rawImage2D$image = 124 ,
rawImage2D$color = 125 ,
rawImage2D$fileKey = 126 ,
image2D$className = 127 ,
image2D$color = 128 ,
image2D$fillAmmount = 129 ,
image2D$_spriteName = 130 ,
image2D$fileKey = 131 ,
Prefab$name = 132 ,
meshFilter$_mesh = 133 ,
subMeshInfo$useVertexIndex = 134 ,
}
//属性名对应的数据类型编号
export enum typeEnum{
Prefab2D$tag = 0 ,
Prefab2D$tranName = 0 ,
Prefab2D$children = 1100 ,
Prefab2D$width = 9 ,
Prefab2D$height = 9 ,
Prefab2D$_visible = 12 ,
Prefab2D$localTranslate = 13 ,
Prefab2D$localScale = 13 ,
Prefab2D$insid = 5 ,
Prefab2D$components = 1100 ,
Prefab2D$layoutState = 5 ,
Prefab2D$layoutValueMap = 300 ,
Prefab$className = 0 ,
Prefab$tranName = 0 ,
Prefab$localRotate = 18 ,
Prefab$localTranslate = 14 ,
Prefab$localScale = 14 ,
Prefab$gameObject = 1000 ,
gameObjectInfo$components = 1100 ,
aniplayer$className = 0 ,
aniplayer$clips = 1100 ,
Aniclip$fileName = 0 ,
Aniclip$aniclipName = 0 ,
Aniclip$fps = 9 ,
Aniclip$loop = 12 ,
Aniclip$boneCount = 5 ,
Aniclip$bones = 100 ,
Aniclip$indexDic = 300 ,
Aniclip$frameCount = 5 ,
Aniclip$frames = 300 ,
aniplayer$bones = 135 ,
aniplayer$startPos = 136 ,
aniplayer$animNames = 100 ,
Prefab$children = 1100 ,
skinnedMeshRenderer$className = 0 ,
skinnedMeshRenderer$materials = 1100 ,
Mat$className = 0 ,
Mat$shader = 0 ,
Mat$srcshader = 0 ,
Mat$mapUniform = 300 ,
mapUniInfo$value = 0 ,
Mat$fileName = 0 ,
skinnedMeshRenderer$center = 14 ,
skinnedMeshRenderer$size = 14 ,
skinnedMeshRenderer$mesh = 0 ,
skinnedMeshRenderer$rootBone = 5 ,
skinnedMeshRenderer$bones = 105 ,
skinnedMeshRenderer$player = 5 ,
Prefab$insid = 5 ,
ImageSetting$className = 0 ,
ImageSetting$imageName = 0 ,
ImageSetting$filterMode = 0 ,
ImageSetting$format = 0 ,
ImageSetting$mipmap = 12 ,
ImageSetting$wrap = 0 ,
Mesh$className = 0 ,
Mesh$meshName = 0 ,
Mesh$originVF = 4 ,
Mesh$bounds = 1000 ,
Bounds$extents = 14 ,
Bounds$center = 14 ,
Mesh$posCount = 5 ,
Mesh$vec10tpose = 109 ,
Mesh$trisindex = 106 ,
Mesh$subMesh = 1100 ,
subMeshInfo$size = 5 ,
Mesh$tmpVArr = 109 ,
Mesh$minimum = 14 ,
Mesh$maximum = 14 ,
subMeshInfo$matIndex = 5 ,
subMeshInfo$start = 5 ,
fileInfo$fileCount = 300 ,
aniplayer$clipKeys = 100 ,
Prefab$outPath = 0 ,
ImageSetting$outPath = 0 ,
Mat$outPath = 0 ,
Mesh$outPath = 0 ,
mapUniInfo$valueKey = 0 ,
skinnedMeshRenderer$materialsKey = 100 ,
skinnedMeshRenderer$meshKey = 0 ,
ImageSetting$imageKey = 0 ,
mapUniInfo$type = 5 ,
gameObjectInfo$tag = 0 ,
meshFilter$className = 0 ,
meshFilter$mesh = 0 ,
meshRenderer$className = 0 ,
meshRenderer$materialsKey = 100 ,
meshRenderer$lightmapIndex = 5 ,
boxcollider$className = 0 ,
boxcollider$center = 14 ,
boxcollider$size = 14 ,
ImageSetting$premultiplyAlpha = 12 ,
meshFilter$meshKey = 0 ,
gameObjectInfo$visible = 12 ,
meshRenderer$materials = 1100 ,
Mat$fileKey = 0 ,
meshRenderer$lightmapScaleOffset = 15 ,
mapUniInfo$valueInfo = 1000 ,
camera$className = 0 ,
camera$near = 9 ,
camera$far = 9 ,
camera$CullingMask = 7 ,
camera$fov = 9 ,
camera$size = 9 ,
camera$opvalue = 9 ,
subMeshInfo$line = 12 ,
spherecollider$className = 0 ,
spherecollider$radius = 9 ,
spherecollider$center = 14 ,
asbone$className = 0 ,
skinnedMeshRenderer$_mesh = 23 ,
meshcollider$className = 0 ,
Mat$InstanceID = 0 ,
Mesh$position = 114 ,
Mesh$color = 116 ,
Mesh$normal = 114 ,
Mesh$UV0 = 113 ,
Mesh$UV1 = 113 ,
Mesh$tangent = 114 ,
Mesh$blendIndex = 158 ,
Mesh$blendWeight = 158 ,
Prefab2D$className = 0 ,
rawImage2D$className = 0 ,
rawImage2D$image = 0 ,
rawImage2D$color = 16 ,
rawImage2D$fileKey = 0 ,
image2D$className = 0 ,
image2D$color = 16 ,
image2D$fillAmmount = 9 ,
image2D$_spriteName = 0 ,
image2D$fileKey = 0 ,
Prefab$name = 0 ,
meshFilter$_mesh = 23 ,
subMeshInfo$useVertexIndex = 5 ,
}
