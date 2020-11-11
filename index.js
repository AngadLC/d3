console.log(d3)
console.log("making the smile face")
/*const svg = d3.select('svg')
const width = parseFloat(svg.attr('width')) 
// svg.style('background-color','red')
const circle = svg.append('circle')
// const width = 400
const height = parseFloat(svg.attr('height'))
// const height = 200
circle.attr('r',height/4)
    .attr('cx',width/2)
    .attr('cy',height/2)
    .attr('fill','yellow')
    .attr('stroke','black')

const lefteye = svg.append('circle')
    .attr('r',10)
    .attr('cx',width/2 -40)
    .attr('cy',height/2 -50)
    .attr('fill','black')
const righteye = svg.append('circle')
    .attr('r',10)
    .attr('cx',width/2 +40)
    .attr('cy',height/2 -50)
    .attr('fill','black')
const arc = d3.arc()
const g = svg.append('g')
    .attr('transform','translate(485,220)')
const mouth = g.append('path')
    .attr('d', arc({
        innerRadius: 80,
        outerRadius: 100,
        startAngle:Math.PI/2,
        endAngle: Math.PI*3/2
      }))
      */
// making the MAPchart

const svg = d3.select('svg');

const projection = d3.geoNaturalEarth1();
const pathGenerator = d3.geoPath().projection(projection);

svg.append('path')
    .attr('class', 'sphere')
    .attr('d', pathGenerator({type: 'Sphere'}));

d3.json('https://unpkg.com/world-atlas@1.1.4/world/110m.json')
  .then(data => {
    const countries = topojson.feature(data, data.objects.countries);
    svg.selectAll('path').data(countries.features)
      .enter().append('path')
        .attr('class', 'country')
        .attr('d', pathGenerator)
        
  });