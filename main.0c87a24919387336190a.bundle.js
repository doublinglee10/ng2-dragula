webpackJsonp([0,2],{205:function(e,n,t){"use strict";var a=t(590);n.dragula=a.default||a},206:function(e,n,t){"use strict";var a=t(205),i=t(0),o=function(){function e(){this.cancel=new i.EventEmitter,this.cloned=new i.EventEmitter,this.drag=new i.EventEmitter,this.dragend=new i.EventEmitter,this.drop=new i.EventEmitter,this.out=new i.EventEmitter,this.over=new i.EventEmitter,this.remove=new i.EventEmitter,this.shadow=new i.EventEmitter,this.dropModel=new i.EventEmitter,this.removeModel=new i.EventEmitter,this.events=["cancel","cloned","drag","dragend","drop","out","over","remove","shadow","dropModel","removeModel"],this.bags=[]}return e.prototype.add=function(e,n){var t=this.find(e);if(t)throw new Error('Bag named: "'+e+'" already exists.');return t={name:e,drake:n},this.bags.push(t),n.models&&this.handleModels(e,n),t.initEvents||this.setupEvents(t),t},e.prototype.find=function(e){for(var n=0,t=this.bags;n<t.length;n++){var a=t[n];if(a.name===e)return a}},e.prototype.destroy=function(e){var n=this.find(e),t=this.bags.indexOf(n);this.bags.splice(t,1),n.drake.destroy()},e.prototype.setOptions=function(e,n){var t=this.add(e,a.dragula(n));this.handleModels(e,t.drake)},e.prototype.handleModels=function(e,n){var t,a,i,o,r=this;n.on("remove",function(t,i){n.models&&(o=n.models[n.containers.indexOf(i)],o.splice(a,1),r.removeModel.emit([e,t,i]))}),n.on("drag",function(e,n){t=e,a=r.domIndexOf(e,n)}),n.on("drop",function(s,d,l){if(n.models&&d){if(i=r.domIndexOf(s,d),o=n.models[n.containers.indexOf(l)],d===l)o.splice(i,0,o.splice(a,1)[0]);else{var c=t===s,u=n.models[n.containers.indexOf(d)],v=c?o[a]:JSON.parse(JSON.stringify(o[a]));c&&o.splice(a,1),u.splice(i,0,v),d.removeChild(s)}r.dropModel.emit([e,s,d,l])}})},e.prototype.setupEvents=function(e){e.initEvents=!0;var n=this,t=function(t){function a(){var a=Array.prototype.slice.call(arguments);n[t].emit([e.name].concat(a))}e.drake.on(t,a)};this.events.forEach(t)},e.prototype.domIndexOf=function(e,n){return Array.prototype.indexOf.call(n.children,e)},e.decorators=[{type:i.Injectable}],e.ctorParameters=function(){return[]},e}();n.DragulaService=o},207:function(e,n){function t(e){throw new Error("Cannot find module '"+e+"'.")}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=207},324:function(e,n,t){"use strict";var a=t(0),i=t(206),o=t(205),r=function(){function e(e,n){this.el=e,this.dragulaService=n,this.container=e.nativeElement}return e.prototype.ngOnInit=function(){var e=this,n=this.dragulaService.find(this.dragula),t=function(){e.dragulaModel&&(e.drake.models?e.drake.models.push(e.dragulaModel):e.drake.models=[e.dragulaModel])};n?(this.drake=n.drake,t(),this.drake.containers.push(this.container)):(this.drake=o.dragula({containers:[this.container]}),t(),this.dragulaService.add(this.dragula,this.drake))},e.prototype.ngOnChanges=function(e){if(e&&e.dragulaModel&&this.drake)if(this.drake.models){var n=this.drake.models.indexOf(e.dragulaModel.previousValue);this.drake.models.splice(n,1,e.dragulaModel.currentValue)}else this.drake.models=[e.dragulaModel.currentValue]},e.decorators=[{type:a.Directive,args:[{selector:"[dragula]"}]}],e.ctorParameters=function(){return[{type:a.ElementRef},{type:i.DragulaService}]},e.propDecorators={dragula:[{type:a.Input}],dragulaModel:[{type:a.Input}]},e}();n.DragulaDirective=r},325:function(e,n,t){"use strict";function a(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}a(t(205)),a(t(324)),a(t(206)),a(t(613))},326:function(e,n,t){"use strict";var a=t(431),i=(t.n(a),t(407)),o=t(0),r=t(430),s=t(428);r.a.production&&t.i(o.enableProdMode)(),t.i(i.a)().bootstrapModule(s.a)},427:function(e,n,t){"use strict";var a=t(0);t.d(n,"a",function(){return i});var i=function(){function e(){}return e=__decorate([t.i(a.Component)({selector:"example-app",template:'\n    <div class="examples">\n      <example-a></example-a>\n    \n      <example-b></example-b>\n    \n      <another-example></another-example>\n    \n      <such-example></such-example>\n    \n      <very-example></very-example>\n    \n      <much-example></much-example>\n    \n      <wow-example></wow-example>\n    \n      <repeat-example></repeat-example>\n    \n      <nested-repeat-example></nested-repeat-example>\n    </div>\n  ',encapsulation:a.ViewEncapsulation.None}),__metadata("design:paramtypes",[])],e)}()},428:function(e,n,t){"use strict";var a=t(0),i=t(401),o=t(273),r=t(139),s=t(325),d=(t.n(s),t(429)),l=t(427);t.d(n,"a",function(){return c});var c=function(){function e(){}return e=__decorate([t.i(a.NgModule)({declarations:[l.a].concat(d.a),imports:[o.b,i.a,s.DragulaModule,r.b],providers:[],bootstrap:[l.a]}),__metadata("design:paramtypes",[])],e)}()},429:function(e,n,t){"use strict";var a=t(0),i=t(325);t.n(i);t.d(n,"a",function(){return g});var o=function(){function e(){}return e=__decorate([t.i(a.Component)({selector:"example-a",template:t(593)}),__metadata("design:paramtypes",[])],e)}(),r=function(){function e(e){var n=this;this.dragulaService=e,e.drag.subscribe(function(e){n.onDrag(e.slice(1))}),e.drop.subscribe(function(e){n.onDrop(e.slice(1))}),e.over.subscribe(function(e){n.onOver(e.slice(1))}),e.out.subscribe(function(e){n.onOut(e.slice(1))})}return e.prototype.hasClass=function(e,n){return new RegExp("(?:^|\\s+)"+n+"(?:\\s+|$)").test(e.className)},e.prototype.addClass=function(e,n){this.hasClass(e,n)||(e.className=e.className?[e.className,n].join(" "):n)},e.prototype.removeClass=function(e,n){this.hasClass(e,n)&&(e.className=e.className.replace(new RegExp("(?:^|\\s+)"+n+"(?:\\s+|$)","g"),""))},e.prototype.onDrag=function(e){var n=e[0];this.removeClass(n,"ex-moved")},e.prototype.onDrop=function(e){var n=e[0];this.addClass(n,"ex-moved")},e.prototype.onOver=function(e){var n=e[0];this.addClass(n,"ex-over")},e.prototype.onOut=function(e){var n=e[0];this.removeClass(n,"ex-over")},e=__decorate([t.i(a.Component)({selector:"example-b",template:t(594)}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.DragulaService&&i.DragulaService)&&n||Object])],e);var n}(),s=function(){function e(e){this.dragulaService=e,e.setOptions("third-bag",{removeOnSpill:!0})}return e=__decorate([t.i(a.Component)({selector:"another-example",template:t(592)}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.DragulaService&&i.DragulaService)&&n||Object])],e);var n}(),d=function(){function e(e){this.dragulaService=e,e.setOptions("fourth-bag",{revertOnSpill:!0})}return e=__decorate([t.i(a.Component)({selector:"such-example",template:t(598)}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.DragulaService&&i.DragulaService)&&n||Object])],e);var n}(),l=function(){function e(e){this.dragulaService=e,e.setOptions("fifth-bag",{copy:!0})}return e=__decorate([t.i(a.Component)({selector:"very-example",template:t(599)}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.DragulaService&&i.DragulaService)&&n||Object])],e);var n}(),c=function(){function e(e){this.dragulaService=e,e.setOptions("sixth-bag",{moves:function(e,n,t){return console.log(e,n),"handle"===t.className}})}return e=__decorate([t.i(a.Component)({selector:"much-example",template:t(595)}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.DragulaService&&i.DragulaService)&&n||Object])],e);var n}(),u=function(){function e(){this.clicked={one:!1,two:!1,three:!1,four:!1,five:!1,six:!1,seven:!1}}return e.prototype.onclick=function(e){var n=this;this.clicked[e]=!0,setTimeout(function(){n.clicked[e]=!1},2e3)},e=__decorate([t.i(a.Component)({selector:"wow-example",template:t(600)}),__metadata("design:paramtypes",[])],e)}(),v=function(){function e(e){var n=this;this.dragulaService=e,this.many=["The","possibilities","are","endless!"],this.many2=["Explore","them"],e.dropModel.subscribe(function(e){n.onDropModel(e.slice(1))}),e.removeModel.subscribe(function(e){n.onRemoveModel(e.slice(1))})}return e.prototype.onDropModel=function(e){var n=e[0],t=e[1],a=e[2];console.log("onDropModel:"),console.log(n),console.log(t),console.log(a)},e.prototype.onRemoveModel=function(e){var n=e[0],t=e[1];console.log("onRemoveModel:"),console.log(n),console.log(t)},e=__decorate([t.i(a.Component)({selector:"repeat-example",template:t(597)}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.DragulaService&&i.DragulaService)&&n||Object])],e);var n}(),p=function(){function e(){this.groups=[{name:"Group A",items:[{name:"Item A"},{name:"Item B"},{name:"Item C"},{name:"Item D"}]},{name:"Group B",items:[{name:"Item 1"},{name:"Item 2"},{name:"Item 3"},{name:"Item 4"}]}]}return e=__decorate([t.i(a.Component)({selector:"nested-repeat-example",template:t(596)}),__metadata("design:paramtypes",[])],e)}(),g=[o,r,s,d,l,c,u,v,p]},430:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var a={production:!0}},431:function(e,n,t){"use strict";var a=t(615),i=(t.n(a),t(449)),o=(t.n(i),t(442)),r=(t.n(o),t(438)),s=(t.n(r),t(444)),d=(t.n(s),t(443)),l=(t.n(d),t(441)),c=(t.n(l),t(440)),u=(t.n(c),t(448)),v=(t.n(u),t(437)),p=(t.n(v),t(436)),g=(t.n(p),t(446)),m=(t.n(g),t(439)),h=(t.n(m),t(447)),f=(t.n(h),t(445)),b=(t.n(f),t(450)),y=(t.n(b),t(616)),x=(t.n(y),t(433));t.n(x)},592:function(e,n){e.exports="<div class='parent'>\n    <label for='hy'>Need to be able to quickly delete stuff when it spills out of the chosen containers? Note how you\n        can easily sort the items in any containers by just dragging and dropping.</label>\n    <div class='wrapper'>\n        <div class='container' [dragula]='\"third-bag\"'>\n            <div>Banana Boat</div>\n            <div>Orange Juice</div>\n            <div>Cuban Cigar</div>\n            <div>Terrible Comedian</div>\n            <div>Anxious Cab Driver</div>\n            <div>Thriving Venture</div>\n            <div>Calm Clam</div>\n        </div>\n    </div>\n    <pre>\n      <code>\n&lt;div [dragula]=&#039;&quot;third-bag&quot;&#039;&gt;&lt;/div&gt;\n\nclass AnotherExample &#123;\n  constructor(private dragulaService: DragulaService) &#123;\n    dragulaService.setOptions('third-bag', &#123;\n      removeOnSpill: true\n    });\n  }\n}\n      </code>\n    </pre>\n</div>"},593:function(e,n){e.exports="<div class='parent'>\n    <label for='hy'>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer?\n        Great stuff.</label>\n    <div class='wrapper'>\n        <div class='container' [dragula]='\"first-bag\"'>\n            <div>You can move these elements between these two containers</div>\n            <div>Moving them anywhere else isn't quite possible</div>\n            <div>There's also the possibility of moving elements around in the same container, changing their position\n            </div>\n        </div>\n        <div class='container' [dragula]='\"first-bag\"'>\n            <div>This is the default use case. You only need to specify the containers you want to use</div>\n            <div>More interactive use cases lie ahead</div>\n            <div>Make sure to check out the <a href='https://github.com/bevacqua/dragula#readme'>documentation on\n                GitHub!</a></div>\n        </div>\n    </div>\n    <pre>\n      <code>\n&lt;div [dragula]=&#039;&quot;first-bag&quot;&#039;&gt;&lt;/div&gt;\n&lt;div [dragula]=&#039;&quot;first-bag&quot;&#039;&gt;&lt;/div&gt;\n      </code>\n    </pre>\n</div>"},594:function(e,n){e.exports="<div class=\"parent\">\n    <label for=\"hy\">There are plenty of events along the lifetime of a drag event. <a href=\"https://github.com/bevacqua/dragula#drakeon-events\">all of them</a> in the docs!</label>\n    <div class=\"wrapper\">\n        <div class=\"container\" [dragula]=\"'second-bag'\">\n            <div>As soon as you start dragging an element, a <code>drag</code> event is fired</div>\n            <div>Whenever an element is cloned because <code>copy: true</code>, a <code>cloned</code> event fires</div>\n            <div>The <code>shadow</code> event fires whenever the placeholder showing where an element would be dropped is moved to a different container or position</div>\n            <div>A <code>drop</code> event is fired whenever an element is dropped anywhere other than its origin <em>(where it was initially dragged from)</em></div>\n        </div>\n        <div class=\"container\" [dragula]=\"'second-bag'\">\n            <div>If the element gets removed from the DOM as a result of dropping outside of any containers, a <code>remove</code> event gets fired</div>\n            <div>A <code>cancel</code> event is fired when an element would be dropped onto an invalid target, but retains its original placement instead</div>\n            <div>The <code>over</code> event fires when you drag something over a container, and <code>out</code> fires when you drag it away from the container</div>\n            <div>Lastly, a <code>dragend</code> event is fired whenever a drag operation ends, regardless of whether it ends in a cancellation, removal, or drop</div>\n        </div>\n    </div>\n    <pre>\n      <code>\n&lt;div [dragula]=&#039;&quot;second-bag&quot;&#039;&gt;&lt;/div&gt;\n&lt;div [dragula]=&#039;&quot;second-bag&quot;&#039;&gt;&lt;/div&gt;\n\nclass ExampleB &#123;\n\n  constructor(private dragulaService: DragulaService) &#123;\n    dragulaService.drag.subscribe((value) => &#123;\n      this.onDrag(value.slice(1));\n    });\n    dragulaService.drop.subscribe((value) => &#123;\n      this.onDrop(value.slice(1));\n    });\n    dragulaService.over.subscribe((value) => &#123;\n      this.onOver(value.slice(1));\n    });\n    dragulaService.out.subscribe((value) => &#123;\n      this.onOut(value.slice(1));\n    });\n  }\n\n  private hasClass(el: any, name: string) &#123;\n    return new RegExp('(?:^|\\\\s+)' + name + '(?:\\\\s+|$)').test(el.className);\n  }\n\n  private addClass(el: any, name: string) &#123;\n    if (!this.hasClass(el, name)) &#123;\n      el.className = el.className ? [el.className, name].join(' ') : name;\n    }\n  }\n\n  private removeClass(el: any, name: string) &#123;\n    if (this.hasClass(el, name)) &#123;\n      el.className = el.className.replace(new RegExp('(?:^|\\\\s+)' + name + '(?:\\\\s+|$)', 'g'), '');\n    }\n  }\n\n  private onDrag(args) &#123;\n    let [e, el] = args;\n    this.removeClass(e, 'ex-moved');\n  }\n\n  private onDrop(args) &#123;\n    let [e, el] = args;\n    this.addClass(e, 'ex-moved');\n  }\n\n  private onOver(args) &#123;\n    let [e, el, container] = args;\n    this.addClass(el, 'ex-over');\n  }\n\n  private onOut(args) &#123;\n    let [e, el, container] = args;\n    this.removeClass(el, 'ex-over');\n  }\n}\n      </code>\n    </pre>\n</div>"},595:function(e,n){e.exports="<div class='parent'>\n    <label for='hy'>Drag handles float your cruise?</label>\n    <div class='wrapper'>\n        <div class='container' [dragula]='\"sixth-bag\"'>\n            <div><span class='handle'>+</span>Move me, but you can use the plus sign to drag me around.</div>\n            <div><span class='handle'>+</span>Note that <code>handle</code> element in the <code>moves</code> handler is\n                just the original event target.\n            </div>\n        </div>\n        <div class='container' [dragula]='\"sixth-bag\"'>\n            <div><span class='handle'>+</span>This might also be useful if you want multiple children of an element to\n                be able to trigger a drag event.\n            </div>\n            <div><span class='handle'>+</span>You can also use the <code>moves</code> option to determine whether an\n                element can be dragged at all from a container, <em>drag handle or not</em>.\n            </div>\n        </div>\n    </div>\n    <pre>\n      <code>\n&lt;div [dragula]=&#039;&quot;sixth-bag&quot;&#039;&gt;&lt;/div&gt;\n&lt;div [dragula]=&#039;&quot;sixth-bag&quot;&#039;&gt;&lt;/div&gt;\n\nclass MuchExample &#123;\n  constructor(private dragulaService: DragulaService) &#123;\n    dragulaService.setOptions('sixth-bag', &#123;\n      moves: function (el, container, handle) &#123;\n        return handle.className === 'handle';\n      }\n    });\n  }\n}\n      </code>\n    </pre>\n    <div>There are a few similar mechanisms to determine whether an element can be dragged from a certain container <a\n            href='https://github.com/bevacqua/dragula#optionsmoves'>(<code>moves</code>)</a>, whether an element can be\n        dropped into a certain container at a certain position <a\n                href='https://github.com/bevacqua/dragula#optionsaccepts'>(<code>accepts</code>)</a>, and whether an\n        element is able to originate a drag event <a href='https://github.com/bevacqua/dragula#optionsinvalid'>(<code>invalid</code>)</a>.\n    </div>\n</div>"},596:function(e,n){e.exports="<div class='parent'>\n    <label for='hy'><strong>Angular-specific example.</strong> Fancy some nested <code>ngFor</code>?</label>\n    <div class='wrapper'>\n        <div class='container' *ngFor='let group of groups' [dragula]=\"'nested-bag'\">\n            <span>{{group.name}}</span>\n            <div *ngFor='let item of group.items' [innerHtml]='item.name'></div>\n        </div>\n    </div>\n    <pre>\n      <code>\n&lt;div class='wrapper'&gt;\n  &lt;div class='container' *ngFor='let group of groups' [dragula]='&quot;nested-bag&quot;'&gt;\n    &lt;div *ngFor='let item of group.items' [innerHtml]='item.name'&gt;&lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n\nclass NestedRepeatExample &#123;\n  public groups: Array&lt;any&gt; = [\n    &#123;\n      name: 'Group A',\n      items: [&#123;name: 'Item A'},&#123;name: 'Item B'},&#123;name: 'Item C'},&#123;name: 'Item D'}]\n    },\n    &#123;\n      name: 'Group B',\n      items: [&#123;name: 'Item 1'},&#123;name: 'Item 2'},&#123;name: 'Item 3'},&#123;name: 'Item 4'}]\n    }\n  ];\n}\n      </code>\n    </pre>\n</div>"},597:function(e,n){e.exports="<div class='parent'>\n    <label for='hy'><strong>Angular-specific example.</strong> Fancy some <code>ngFor</code>?</label>\n    <div class='wrapper'>\n        <div class='container' [dragula]='\"another-bag\"' [dragulaModel]='many'>\n            <div *ngFor='let text of many' [innerHtml]='text'></div>\n        </div>\n        <div class='container' [dragula]='\"another-bag\"' [dragulaModel]='many2'>\n            <div *ngFor='let text of many2' [innerHtml]='text'></div>\n        </div>\n    </div>\n    <div class='wrapper'>\n        <div class='container'>\n            <pre>{{many | json}}</pre>\n        </div>\n        <div class='container'>\n            <pre>{{many2 | json}}</pre>\n        </div>\n    </div>\n    <pre>\n      <code>\n&lt;div class='wrapper'&gt;\n  &lt;div class='container' [dragula]='&quot;another-bag&quot;' [dragulaModel]='many'&gt;\n    &lt;div *ngFor='let text of many' [innerHtml]='text'&gt;&lt;/div&gt;\n  &lt;/div&gt;\n  &lt;div class='container' [dragula]='&quot;another-bag&quot;' [dragulaModel]='many2'&gt;\n    &lt;div *ngFor='let text of many2' [innerHtml]='text'&gt;&lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n\nclass RepeatExample &#123;\n  public many: Array&lt;string&gt; = ['The', 'possibilities', 'are', 'endless!'];\n  public many2: Array&lt;string&gt; = ['Explore', 'them'];\n\n  constructor(private dragulaService: DragulaService) &#123;\n    dragulaService.dropModel.subscribe((value) => &#123;\n      this.onDropModel(value.slice(1));\n    });\n    dragulaService.removeModel.subscribe((value) => &#123;\n      this.onRemoveModel(value.slice(1));\n    });\n  }\n\n  private onDropModel(args) &#123;\n    let [el, target, source] = args;\n    // do something else\n  }\n\n  private onRemoveModel(args) &#123;\n    let [el, source] = args;\n    // do something else\n  }\n}\n      </code>\n    </pre>\n</div>"},598:function(e,n){e.exports="<div class='parent'>\n    <label for='hy'>By default, dropping an element outside of any known containers will keep the element in the last\n        place it went over. You can make elements go back to origin if they're dropped outside of known containers,\n        too.</label>\n    <div class='wrapper'>\n        <div class='container' [dragula]='\"fourth-bag\"'>\n            <div>Moving items between containers works as usual</div>\n            <div>If you try to drop an item outside of any containers, though, it'll retain its original position</div>\n            <div>When that happens, a <code>cancel</code> event will be raised</div>\n        </div>\n        <div class='container' [dragula]='\"fourth-bag\"'>\n            <div>Note that the dragged element will go back to the place you originally dragged it from, even if you\n                move it over other containers\n            </div>\n            <div>This is useful if you want to ensure drop events only happen when the user intends for them to happen\n                explicitly, avoiding surprises\n            </div>\n        </div>\n    </div>\n    <pre>\n      <code>\n&lt;div [dragula]=&#039;&quot;fourth-bag&quot;&#039;&gt;&lt;/div&gt;\n&lt;div [dragula]=&#039;&quot;fourth-bag&quot;&#039;&gt;&lt;/div&gt;\n\nclass SuchExample &#123;\n  constructor(private dragulaService: DragulaService) &#123;\n    dragulaService.setOptions('fourth-bag', &#123;\n      revertOnSpill: true\n    });\n  }\n}\n      </code>\n    </pre>\n</div>"},599:function(e,n){e.exports="<div class='parent'>\n    <label for='hy'>Copying stuff is common too, so we made it easy for you.</label>\n    <div class='wrapper'>\n        <div class='container' [dragula]='\"fifth-bag\"'>\n            <div>When elements are copyable, they can't be sorted in their origin container</div>\n            <div>Copying prevents original elements from being dragged. A copy gets created and <em>that</em> gets\n                dragged instead\n            </div>\n            <div>Whenever that happens, a <code>cloned</code> event is raised</div>\n        </div>\n        <div class='container' [dragula]='\"fifth-bag\"'>\n            <div>Note that the clones get destroyed if they're not dropped into another container</div>\n            <div>You'll be dragging a copy, so when they're dropped into another container you'll see the duplication.\n            </div>\n        </div>\n    </div>\n    <pre>\n      <code>\n&lt;div [dragula]=&#039;&quot;fifth-bag&quot;&#039;&gt;&lt;/div&gt;\n&lt;div [dragula]=&#039;&quot;fifth-bag&quot;&#039;&gt;&lt;/div&gt;\n\nclass VeryExample &#123;\n  constructor(private dragulaService: DragulaService) &#123;\n    dragulaService.setOptions('fifth-bag', &#123;\n      copy: true\n    });\n  }\n}\n      </code>\n    </pre>\n</div>"},600:function(e,n){e.exports='<div class=\'parent\'>\n    <label><strong>Click or Drag!</strong> Fires a click when the mouse button is released before a <code>mousemove</code> event, otherwise a drag event is fired. No extra configuration is necessary.</label>\n    <div class=\'wrapper\'>\n        <div class=\'container\' [dragula]=\'"seventh-bag"\'>\n            <div (click)=\'onclick("one")\'>{{clicked.one ? "Clicked!" : "Clicking on these elements triggers a regular click event you can listen to."}}</div>\n            <div (click)=\'onclick("two")\'>{{clicked.two ? "Clicked!" : "Try dragging or clicking on this element."}}</div>\n            <div (click)=\'onclick("three")\'>{{clicked.three ? "Clicked!" : "Note how you can click normally?"}}</div>\n            <div (click)=\'onclick("four")\'>{{clicked.four ? "Clicked!" : "Drags don\'t trigger click events."}}</div>\n            <div (click)=\'onclick("five")\'>{{clicked.five ? "Clicked!" : "Clicks don\'t end up in a drag, either."}}</div>\n            <div (click)=\'onclick("six")\'>{{clicked.six ? "Clicked!" : "This is useful if you have elements that can be both clicked or dragged."}}</div>\n            <div (click)=\'onclick("seven")\'>{{clicked.seven ? "ZOMG, THAT TICKLES! PLEASE. STOP." : "Business as usual."}}</div>\n        </div>\n    </div>\n    <pre>\n      <code>\n&lt;div [dragula]=&#039;&quot;seventh-bag&quot;&#039;&gt;&lt;/div&gt;\n\nclass WowExample &#123;\n  public clicked: any = &#123;\n    \'one\': false,\n    \'two\': false,\n    \'three\': false,\n    \'four\': false,\n    \'five\': false,\n    \'six\': false,\n    \'seven\': false\n  };\n\n  public onclick(key): void &#123;\n    this.clicked[key] = true;\n    setTimeout(() => &#123;\n      this.clicked[key] = false;\n    }, 2000);\n  }\n}\n      </code>\n    </pre>\n</div>'},613:function(e,n,t){"use strict";var a=t(0),i=t(324),o=t(206),r=function(){function e(){}return e.decorators=[{type:a.NgModule,args:[{exports:[i.DragulaDirective],declarations:[i.DragulaDirective],providers:[o.DragulaService]}]}],e.ctorParameters=function(){return[]},e}();n.DragulaModule=r},617:function(e,n,t){e.exports=t(326)}},[617]);
//# sourceMappingURL=main.0c87a24919387336190a.bundle.map