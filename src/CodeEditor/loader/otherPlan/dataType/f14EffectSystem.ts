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
import { AssetBundleFileInfo } from "./AssetBundleFileInfo";

// tslint:disable-next-line: class-name
export class f14EffectSystem extends AssetBundleFileInfo {
    public static classType = m4m["f14EffectSystem"] = f14EffectSystem;
    public className: string = "";
    public Name: string = "";
    public lifeTime: number = 0;
    public beloop: boolean = false;
    public layers: layer[] = [];

}
// tslint:disable-next-line: class-name
class layer {
    public static classType = m4m["layer"] = layer;
    public Name: string = "";
    public type: string = "";
    public singlemeshdata: Singlemeshdata = new Singlemeshdata();
    public frames: frame[] = [];

}
class Singlemeshdata {
    public static classType = m4m["Singlemeshdata"] = Singlemeshdata;
    public mesh: string = "";
    public material: string = "";
    public position: string = "";
    public scale: string = "";
    public euler: string = "";
    public color: string = "";
    // tslint:disable-next-line: variable-name
    public tex_ST: string = "";
    public enableTexAnimation: boolean = false;
    public uvType: string = "";
    public uSpeed: number = 0;
    public vSpeed: number = 0;
    public row: number = 0;
    public column: number = 0;
    public count: number = 0;
    public beBillboard: boolean = false;
    public bindAxis: string = "";

}
// tslint:disable-next-line: class-name
class frame {
    public static classType = m4m["frame"] = frame;
    public frameindex: number = 0;
    public vec3Atts: att[] = [];
    public vec4Atts: att[] = [];
    public colorAtts: att[] = [];

}
// tslint:disable-next-line: class-name
class att {
    public static classType = m4m["att"] = att;
    public name: string = "";
    public value: string = "";

}
