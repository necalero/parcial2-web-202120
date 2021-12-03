import React, { useState, useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import * as d3 from "d3";
import axios from "axios";

export const Report = () => {
  const [products, setProducts] = useState([]);

  const URL = "http://localhost:3001/api/products?q=";
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      const canvas = d3.select('#chartArea');
      const data = [
        {name: "Juan", age: 3},
        {name: "Orlando", age: 39},
        {name: "María", age: 7},
        {name: "Sandra", age: 35},
        {name: "Fernanda", age: 16},
        {name: "Maribel", age: 45},
        {name: "Sofía", age: 6}
    ];
    
    const width = 500;
    const height = 600;
    const margin = { top:10, left:50, bottom: 40, right: 10};
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top -margin.bottom;
    
    const svg = canvas.append("svg");
    svg.attr("width", width);
    svg.attr("height", height);
    
    let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
    
    const y = d3.scaleLinear() 
        .domain([0, 30])
        .range([iheight, 0]);
    
    const x = d3.scaleBand()
    .domain(data.map(d => d.name) ) 
    .range([0, iwidth])
    .padding(0.1); 
    

    //Add tooltip
    const tooldiv = d3.select('#chartArea')
    .append('div')
    .style('visibility','hidden')
    .style('position','absolute')
    .style('background-color', 'rgb(255,255,255)')
    
    
    //Draw-bars
    const bars = g.selectAll("rect").data(data);
    bars.enter().append("rect")
    .attr("class", "bar")
    .style("fill", "blue")
    .attr("x", d => x(d.name))
    .attr("y", d => y(d.age))
    .attr("height", d => iheight - y(d.age))
    .attr("width", x.bandwidth())
    .on('mouseover', (e,d)=>{
      console.log(e)
      console.log(d)
      tooldiv.style('visibility', 'visible')
        .text(`${d.name}:`+`${d.age}`)
    })
    .on('mousemove', (e,d)=>{
      tooldiv.style('top', (e.pageY-25)+ 'px')
              .style('left', (e.pageX-25) + 'px')
    })
    .on('mouseout', ()=>{
      tooldiv.style('visibility', 'hidden')
    })
    
    
    
    //Y-Axis
    g.append("g")
    .classed("y--axis", true)
    .call(d3.axisLeft(y));
      


  }, []);

  

  return (
    <section id="report">
      <div className="report-container">
        <h1>
          <FormattedMessage id="stock" />
        </h1>
        <div id='chartArea'>
        </div>
      </div>
    </section>
  );
};
