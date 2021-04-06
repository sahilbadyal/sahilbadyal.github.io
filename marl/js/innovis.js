/**
 * Author: Sahil Badyal
 * 
 */
var innovisPlotSvg;
var timer;
var step;
var sAndF;
var gd;
var hoverTooltip;
var sorted;
var selectedPolicy;
var data;
var randomState;


var nSpidders = 2
var nFlies = 4

var innovis_margin = { top: 40, right: 60, bottom: 40, left: 100 };

var rScale = d3.scaleLinear();
const yScale = d3.scaleLinear();

// This runs when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    grid = d3.select('#spiderandfly');
    width = +grid.style('width').replace('px', '');
    height = +grid.style('height').replace('px', '');;
    innerWidth = width - innovis_margin.left - innovis_margin.right;
    innerHeight = height - innovis_margin.top - innovis_margin.bottom;


    //Container for the gradients
    // var defs = innovisPlotSvg.append("defs");

    // //Filter for the outside glow
    // var filter = defs.append("filter")
    //     .attr("id","glow");
    // filter.append("feGaussianBlur")
    //     .attr("stdDeviation","2.5")
    //     .attr("result","coloredBlur");
    // var feMerge = filter.append("feMerge");
    // feMerge.append("feMergeNode")
    //     .attr("in","coloredBlur");
    // feMerge.append("feMergeNode")
    //     .attr("in","SourceGraphic");

    //  //Filter for the outside blur
    // filter = defs.append("filter")
    //  .attr("id","blur");
    // filter.append("feGaussianBlur")
    //  .attr("stdDeviation","2.5")
    //  .attr("result","coloredBlur");

    //addInnovisLegend();
    // Load the processed data before doing anything else
    Promise.all([
            d3.json('assets/images/5X_4_2_1000.json'), //0
                ])
      .then(function (d) {

        randomState = Math.floor(Math.random() * 998);

        addListeners();

        data = d;
        gd = gridData();
        drawGrid();

        sAndF = getSpirdersAndFlies(data[0][randomState][selectedPolicy][0])

        drawSpidersAndFlies();
        startTimeAnimation()
      })
  
  });

  function getSpirdersAndFlies(inp_data){
      if (sAndF){
        let i = 0;
        spPos = new Set()
        for (var pos=0; pos < inp_data.length - 1; pos=pos+2){
            cg = gd[parseInt(inp_data[pos])][parseInt(inp_data[pos+1])]
            np = (cg.x, cg.y)
            if (pos < nSpidders * 2){
                spPos.add(np)
            }else{
                if (spPos.has(np)){
                    sAndF[i].captured = true
                }
            }
            sAndF[i].x = cg.x
            sAndF[i].y = cg.y
            i++;
        }
        return;
      }
      var dat = Array();
      for (var pos=0; pos < inp_data.length - 1; pos=pos+2){
        cg = gd[parseInt(inp_data[pos])][parseInt(inp_data[pos+1])]
        if (pos < nSpidders * 2)
        {
            dat.push(
                {
                    x: cg.x,
                    y: cg.y, 
                    url: 'assets/images/spider.png',
                    width: cg.width,
                    height: cg.height,
                    captured:false
                 })
        }else{
            dat.push(
                {
                    x: cg.x,
                    y: cg.y, 
                    url: 'assets/images/fly.png',
                    width: cg.width,
                    height: cg.height,
                    captured:false
                 })
        }
    }
    return dat;
  }

//   function addInnovisLegend(){
//     let legend_margin = {
//         left:20,
//         right:10,
//         top: 10,
//         bottom: 10
//     }
//     let colorScheme = d3.schemeSet2;
//     let i=0, w=0;
//     for (const [key, value] of Object.entries(innovis_regions)) {

//         innovisPlotSvg.append("rect")
//         .attr("x", legend_margin.left + w )
//         .attr("y", legend_margin.top)
//         .attr("width",15)
//         .attr("height",15)
//         .style("fill", colorScheme[i++])
//         .style('stroke', 'black');
    
//         innovisPlotSvg.append("text")
//             .attr("x", legend_margin.left + w - 20)
//             .attr("y", legend_margin.top + 30)
//             .text(value)
//             .style("font-size", "10px")
//             .attr("alignment-baseline","middle")
//             .attr("font-weight",25)
//             .style('fill', 'black');
        
//         w += 100;

//       }

// }

  function addListeners() {
    const policyTag = document.getElementById("policy");
    const randomize = document.getElementById("randomize");

    policyTag.selectedIndex = 0;

    selectedPolicy = policyTag.value;
    

    // hoverTooltip = d3.select("body").append("div")
    // .attr("class", "innovis-tooltip-box")
    // .style("opacity", 0);

    policyTag.addEventListener('change', (event) => {
        selectedPolicy = policyTag.value;
        grid.selectAll(".agents").remove();
        sAndF = null
        let dat = data[0][randomState][selectedPolicy][0]
        sAndF = getSpirdersAndFlies(dat)
        drawSpidersAndFlies();
        startTimeAnimation()
        console.log("policy_changed");
      });

      randomize.addEventListener('click', (event) => {
        randomState = Math.floor(Math.random() * 998);
        policyTag.selectedIndex = 0;
        selectedPolicy = policyTag.value;
        grid.selectAll(".agents").remove();
        sAndF = null
        let dat = data[0][randomState][selectedPolicy][0]
        sAndF = getSpirdersAndFlies(dat)
        drawSpidersAndFlies();
        startTimeAnimation()
        console.log("policy_changed");
      });

  }
  
// function regionChangeEventFromHeatMap(region){
//     const regionTag = document.getElementById("innovis-region");
//     regionTag.value = region;
//     innovis_region_selection = region;
//     innovisPlotSvg.selectAll(".innovis-circle-elem").remove();
//     drawGrid();
//     console.log("region_changed by heatmap");
// }

// function mergeDayWiseData(){
//     let zero = true;
//     let ones = true;
//     for (const prop in global_daysMap) {
//         zero &= !global_daysMap[prop];
//         ones &= global_daysMap[prop];
//         if(global_daysMap[prop]){
//             if(!selectedDays.includes(prop)){
//                 selectedDays.push(prop);
//             }
//         }else{
//             selectedDays = arrayRemove(selectedDays, prop);
//         }
//     }
//     if(zero || ones){
//         selectedDay = "overall";
//         let init_data = rawData['unsorted'][selectedAttrib][selectedDay];
//         let init_s_data = rawData['sorted'][selectedAttrib][selectedDay];
  
//         rScale.domain([init_s_data[1][0], init_s_data[1][1]]).range([5,40]).clamp(true);
        
//         if (sorted){
//             gd = gridData(init_s_data[0]);
//         }else{
//             gd = gridData(init_data);
//         }
//         return;
//     }

//     let new_key = "";
//     selectedDays.forEach((element) => {
//         if(element == 'overall'){// skip this one
//         }else{
//             new_key += element;
//         }
//     });
//     if(new_key in rawData['unsorted'][selectedAttrib]){
//         selectedDay = new_key;
//         let init_data = rawData['unsorted'][selectedAttrib][selectedDay];
//         let init_s_data = rawData['sorted'][selectedAttrib][selectedDay];
  
//         rScale.domain(init_s_data[1]).range([5,40]).clamp(true);
        
//         if (sorted){
//             gd = gridData(init_s_data[0]);
//         }else{
//             gd = gridData(init_data);
//         }
//         return;
//     }
//     let index = 0;
//     let ds = [];
//     selectedDays.forEach((element) => {
//         if(index==0){// skip this one
//         }else if (index == 1){
//             let data = rawData['unsorted'][selectedAttrib][element];
//             for (let i=0; i<data.length; i++){
//                     ds.push({...data[i]});
//             }
//         }else{
//             let data = rawData['unsorted'][selectedAttrib][element];
//             for (let i=0; i < data.length; i++){
//                 let val = parseInt(ds[i][selectedAttrib]) + parseInt(data[i][selectedAttrib]);
//                 ds[i][selectedAttrib] = val.toString();
//             }
//         }
//         index++;
//     });
//     let sorted_data = [...ds];
//     sorted_data.sort((a,b)=> parseInt(a[selectedAttrib]) > parseInt(b[selectedAttrib]));
//     rawData['unsorted'][selectedAttrib][new_key] = ds;
//     rawData['sorted'][selectedAttrib][new_key] = [
//         sorted_data,
//         [
//             sorted_data[0][selectedAttrib], 
//             sorted_data[sorted_data.length-1][selectedAttrib]
//         ]
//     ]
//     selectedDay = new_key;
//     rScale.domain(rawData['sorted'][selectedAttrib][selectedDay][1]).range([5,40]).clamp(true);
//     if (sorted){
//         gd = gridData(sorted_data);
//     }else{
//         gd = gridData(ds);
//     }
// }


// function arrayRemove(arr, value) { 
    
//     return arr.filter(function(ele){ 
//         return ele != value; 
//     });
// }


function animate(){
    step++;
    console.log(step)
    let dat = data[0][randomState][selectedPolicy][step]
    getSpirdersAndFlies(dat)
    drawSpidersAndFlies()
    if (step==data[0][randomState][selectedPolicy].length-1){
        clearInterval(timer);
        step=0;
    }
}

function startTimeAnimation(){
    step=0;
    timer = setInterval(animate, 1000);
}




function gridData() {
    var n_rows = 5;
    var nData = new Array();
    var xpos = 0; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
    var ypos = 2;
    var width = 50;
    var height = 50;

    // iterate for rows 
    for (var row = 0; row < n_rows; row++) {
        nData.push( new Array() );

        // iterate for cells/columns inside rows
        for (var column = 0; column < n_rows; column++) {
            nData[row].push({
                x: xpos,
                y: ypos,
                width: width,
                height: height,
            })
            // increment the x position. I.e. move it over by 50 (width variable)
            xpos += width;
        }
        // reset the x position after a row is complete
        xpos = 0;
        // increment the y position for the next row. Move it down 50 (height variable)
        ypos += height; 
    }
    return nData;
}

function drawGrid(){

    //console.log(selectedDay, gd);
    //console.log(gd);
    var row = grid.selectAll(".row")
    .data(gd)
    .enter().append("g")
    .attr("class", "row");



    row.selectAll(".square")
    .data(function(d) { return d; })
    .enter().append("rect")
    .attr("class","square")
    .attr("x", function(d) { return d.x; })
    .attr("y", function(d) { return d.y; })
    .attr("width", function(d) { return d.width; })
    .attr("height", function(d) { return d.height; })
    .style("fill", "#fff")
    .style("stroke", "#222");
       
}

function drawSpidersAndFlies(){

    console.log(sAndF);

    var row = grid.selectAll(".agents")
         .data(sAndF);

    row.join(
        enter => {
        // add a row with class row
        const dotVar = enter.append('g')
                .attr('transform', d => { return `translate(${d.x},${d.y})` })
                .attr("class", "agents");
        // append a circle in the g
        dotVar.append("svg:image")
        .attr('class','objects')
        .attr('xlink:href', d => {return d.url})
        .attr("width", function(d) { return d.width; })
        .attr("height", function(d) { return d.height; })
        .transition()
        .duration(500)
        // append text in g
        //   dotVar.append('text')
        //     .style('alignment-baseline', 'middle')
        //     .style('text-anchor', 'middle')
        //     .attr('class', 'dotText')
        //     .text(d => d.ID);

        // add event listeners for mouse movements to display the tooltip
        //   dotVar.on('mouseover', function (d, i) {
        //     d3.select(this).classed("hover", true);
        //     d3.select(this).select('circle').classed("innovis-circle", false);
        //     hoverTooltip.transition()
        //       .duration(50)
        //       .style("opacity", 1);
        //       let toolTipData ="Ride: " + d.name + "<br />"+attributeMap[selectedAttrib]+": " + d.value;
        //       hoverTooltip.html(toolTipData)
        //       .style("left", (d3.event.pageX + 10) + "px")
        //       .style("top", (d3.event.pageY - 15) + "px");
        //   })
        //     .on('mousemove', function (d, i) {
        //       hoverTooltip.transition()
        //         .duration(50)
        //         .style("opacity", 1);
        //       let toolTipData ="Ride: " + d.name + "<br />"+attributeMap[selectedAttrib]+": " + d.value;
        //       hoverTooltip.html(toolTipData)
        //         .style("left", (d3.event.pageX + 10) + "px")
        //         .style("top", (d3.event.pageY - 15) + "px");
        //     })
        //     .on('mouseout', function (d, i) {
        //       d3.select(this).classed("hover", false);
        //       d3.select(this).select('circle').classed("innovis-circle", true);
        //       hoverTooltip.transition()
        //         .duration(50)
        //         .style("opacity", 0);
        //     });
        },
        update => {
        // add the transition for update
        update.call(update => {
            update.transition()
            .duration(500)
            // .attr("opacity", d => {
            //     if (d.captured) return 0; else return 1;
            // })
            .attr('transform', d => `translate(${d.x},${d.y})`)
        });
        },
        exit => {
        // add the transition for exit
        exit
            .selectAll('text')
            .attr('opacity', 0)
        exit
            .selectAll('objects')
            .transition()
            .duration(500)
            .attr('r', 0);
        exit.call(exit => exit.transition()
            .duration(500)
            .remove());
        }
  );

}

const spiderAndFlyInfo = () =>{
    var data = {
        header: "Spider And Fly Problem",
        body: {
            info:'This Visualization shows various random instances of the spider and fly problem.',
            usage:{
                head: 'Usage',
                items:[
                    'Select the policy you want to see (defaults to foot fall).',
                    'Click on random state to view a new state.',
                ]
            }
        }
    }
    modalShow(data)
}
  