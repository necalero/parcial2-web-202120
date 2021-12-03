import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const Chart = ({ width = 600, height = 600, data }) => {
  const barChart = useRef();

  useEffect(() => {
    document.querySelector('#chartArea').innerHTML='';
    drawGraph(data);
  },[data]);

  const drawGraph = (products) => {
    const canvas = d3.select("#chartArea");
    console.log(products);
    const width = 500;
    const height = 600;
    const margin = { top: 10, left: 50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const svg = canvas.append("svg");
    svg.attr("width", width);
    svg.attr("height", height);

    let g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const y = d3.scaleLinear().domain([0, 500]).range([iheight, 0]);

    const x = d3
      .scaleBand()
      .domain(products.map((d) => d.name))
      .range([0, iwidth])
      .padding(0.1);

    //Add tooltip
    const tooldiv = canvas
      .append("div")
      .style("visibility", "hidden")
      .style("position", "absolute")
      .style("background-color", "rgb(255,255,255)");

    //Draw-bars
    const bars = g.selectAll("rect").data(products);
    bars
      .enter()
      .append("rect")
      .attr("class", "bar")
      .style("fill", "blue")
      .attr("x", (d) => x(d.name))
      .attr("y", (d) => y(d.stock))
      .attr("height", (d) => iheight - y(d.stock))
      .attr("width", x.bandwidth())
      .on("mouseover", (e, d) => {
        tooldiv
          .style("visibility", "visible")
          .text(`${d.name}:` + `${d.stock}`);
      })
      .on("mousemove", (e, d) => {
        tooldiv
          .style("top", e.pageY - 25 + "px")
          .style("left", e.pageX - 25 + "px");
      })
      .on("mouseout", () => {
        tooldiv.style("visibility", "hidden");
      });

    //Y-Axis
    g.append("g").classed("y--axis", true).call(d3.axisLeft(y));
  };

  return (
    <div id='chartArea'>
      <svg ref={barChart}></svg>
    </div>
  );
};
