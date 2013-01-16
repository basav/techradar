var radar_data = [
{"name":"Polyglot Persistence", "pc":{"r":125,"t":140},"movement":"c"},   
{"name":"Mobile first", "pc":{"r":65,"t":170},"movement":"c"},  
{"name":"Kanban", "pc":{"r":135,"t":170},"movement":"c"},   
{"name":"Functional Programming", "pc":{"r":65,"t":120},"movement":"c"},  
{"name":"Gradle", "pc":{"r":115,"t":80},"movement":"c"},   
{"name":"D3", "pc":{"r":172,"t":35},"movement":"c"},
{"name":"Rake for Java", "pc":{"r":179,"t":60},"movement":"c"},
{"name":"Light Table", "pc":{"r":125,"t":70},"movement":"c"},
{"name":"VIM", "pc":{"r":80,"t":30},"movement":"c"},
{"name":"Shell Scripting", "pc":{"r":70,"t":50},"movement":"c"},
 {"name":"OpenShift by Red Hat", "pc":{"r":130,"t":220},"movement":"c"},
  {"name":"Clojure", "pc":{"r":70,"t":290},"movement":"c"},
   {"name":"Java 8", "pc":{"r":30,"t":320},"movement":"c"},
    {"name":"ClojureScript", "pc":{"r":120,"t":340},"movement":"c"},
 {"name":"AngularJS", "pc":{"r":125,"t":300},"movement":"c"},   
 {"name":"Play Framework 2.0", "pc":{"r":70,"t":320},"movement":"c"},    
 {"name":"HTML5 for offline apps", "pc":{"r":70,"t":340},"movement":"c"},
 {"name":"PhoneGap", "pc":{"r":125,"t":280},"movement":"c"}
];

//left to right -> top to bottom
var radar_quadrants = [
{"name":"Techniques", "start":0, "end":4},
{"name":"Tools", "start":4, "end":10},
{"name":"Platforms", "start":10, "end":11},
{"name":"Languages", "start":11, "end":18}
];
//
var radar_arcs = [{'r':50,'name':'Master'},{'r':100,'name':'Deeper'},{'r':150,'name':'Learn'},{'r':200,'name':'Try'}];

var radar_title = "My Technology Radar - 2013 :)";