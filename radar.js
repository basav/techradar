function init(h,w) {

 document.getElementById('title').text = radar_title;

 var labelFont = "18px sans-serif"; 
 var radar = new pv.Panel()
      .width(w)
      .height(h)
     .add(pv.Dot)
       .def("active", false)
       .data(radar_data)
       .left(function(d) { var x = polar_to_raster(d.pc.r, d.pc.t)[0];
              console.log("name:" + d.name + ", x:" + x); return x;})
         .bottom(function(d) { var y = polar_to_raster(d.pc.r, d.pc.t)[1];                                 
                  console.log("name:" + d.name + ", y:" + y); return y;})
         .title(function(d) { return d.name;})
         .angle(45)
         .fillStyle("#aec7e8")
         .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})
         .anchor("top").add(pv.Label)
             .text(function(d) {return this.index + 1 + ".";}) 
             .textBaseline("left");

    //Techniques Label
    radar.add(pv.Label)
         .left(55)
         .top(18)
         .fillStyle("#aec7e8") 
         .text(radar_quadrants[0].name)
         .font(labelFont);

  ////Techniques Data Label
    radar.add(pv.Dot) 
        .data(radar_data.slice(radar_quadrants[0].start,radar_quadrants[0].end)) 
        .left(5) 
        .top(function() {return (36 + this.index * 18);}) 
        .size(8) 
        .strokeStyle(null) 
        .angle(45)
        .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})        
        .fillStyle("#aec7e8") 
      .anchor("right").add(pv.Label).text(function(d) {return this.index + 1 + ". " + d.name;} );

    //platforms
    radar.anchor("left").add(pv.Label)
         .left(5)
         .top(h-180)
         .fillStyle("#aec7e8") 
         .text(radar_quadrants[2].name)
         .font(labelFont);

    radar.add(pv.Dot) 
        .data(radar_data.slice(radar_quadrants[2].start,radar_quadrants[2].end)) 
        .left(5) 
        .top(function() {return ((h - 180) + 36 + this.index * 18);}) 
        .size(8) 
        .strokeStyle(null) 
        .angle(45)
        .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})        
        .fillStyle("#aec7e8") 
      .anchor("right").add(pv.Label).text(function(d) {return this.index + 1 + radar_quadrants[2].start + ". " + d.name;} );

  //Tools
  radar.anchor("left").add(pv.Label)
       .left(w-100)  
       .top(18)
       .text(radar_quadrants[1].name)
       .font(labelFont);
      

  radar.add(pv.Dot) 
        .data(radar_data.slice(radar_quadrants[1].start,radar_quadrants[1].end)) 
        .left(w-90) 
        .top(function() {return (46 + this.index * 18);}) 
        .size(8)
        .angle(45)
        .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})         
        .strokeStyle(null) 
        .fillStyle("#aec7e8")         
        .anchor("right").add(pv.Label).text(function(d) {return this.index + 1 + radar_quadrants[1].start + ". " + d.name;} );

  //Languages
  radar.anchor("left").add(pv.Label)
       .left(w-140)
       .top(h - 180)
       .fillStyle("#aec7e8") 
       .text(radar_quadrants[3].name)
       .font(labelFont);

    radar.add(pv.Dot) 
        .data(radar_data.slice(radar_quadrants[3].start,radar_quadrants[3].end)) 
        .left(w-140) 
        .top(function() {return ((h-180) + 36 + this.index * 18);}) 
        .size(8) 
        .strokeStyle(null) 
        .angle(45)
        .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})        
        .fillStyle("#aec7e8") 
        .anchor("right").add(pv.Label).text(function(d) {return this.index + 1 + radar_quadrants[3].start + ". " + d.name;} );

//arcs
radar.add(pv.Dot)
       .data(radar_arcs)
       .left(w/2)
       .bottom(h/2)
       .radius(function(d){return d.r;})
       .strokeStyle("#ccc")
       .anchor("top")       
       .add(pv.Label).text(function(d) { return d.name;});


//quadrant lines
radar.add(pv.Line)
        .data([(h/2-radar_arcs[3].r),h-(h/2-radar_arcs[3].r)])
        .lineWidth(1)
        .left(w/2)        
        .bottom(function(d) {return d;})       
        .strokeStyle("#bbb");

radar.add(pv.Line)
                .data([115,w-115])
                .lineWidth(1)
                .bottom(h/2)
                .left(function(d) {return d;})       
                .strokeStyle("#bbb");
       
 //radar.anchor('radar');
 radar.render();
     
  };