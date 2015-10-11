Template.dashboardLayout.rendered = function() {

}

Template.dashboardLayout.created = function() {

}

Template.dashboardLayout.destroyed = function() {

}

Template.dashboardLayout.events({
  'click #user-profile' : function(event, template) {
    event.preventDefault();
    Router.go('/profile/');
  }
});


//main chart template that contains the primary data
Template.mainChart.rendered = function() {
  nv.addGraph(function() {
    var chart = nv.models.scatterChart()
                  .showDistX(true)
                  .showDistY(true)
                  .color(d3.scale.category10().range());

    chart.xAxis.tickFormat(d3.format('.02f'));
    chart.yAxis.tickFormat(d3.format('.02f'));

    d3.select('#chart svg')
        .datum(data(4,40))
      .transition().duration(500)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});

}

Template.mainChart.created = function() {

}

Template.mainChart.destroyed = function() {

}

var data = (function (groups, points) {
      randomArray = [],
      shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
      random = d3.random.normal();

  for (i = 0; i < groups; i++) {
    randomArray.push({
      key: 'Position' + i,
      values: []
    });

    for (j = 0; j < points; j++) {
      randomArray[i].values.push({
        x: random()
      , y: random()
      , size: Math.random()
      //, shape: shapes[j % 6]
      });
    }
  }

  return randomArray;
});