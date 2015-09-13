/**
 * Created by greg on 11/09/15.
 */

import {Behavior} from 'marionette';
import d3 from 'd3';

export default Behavior.extend({

  defaults: {
    tag: 'svg',
    width: 200,
    height: 200,

    data: [],

    shape: 'rect'
  },

  onShow(){
    var container = d3.select(this.el)
        .append(this.options.tag)
        .attr('width', this.options.width)
        .attr('height', this.options.height);

    var shapes = container.selectAll(this.options.shape)
      .data(this.options.data)
      .enter().append(this.options.shape);

    var attrs = shapes
      .attr('x', function (d) {
        return d.x_axis;
      })
      .attr('y', function (d) {
        return d.y_axis;
      })
      .attr('width', function (d) {
        return d.width;
      })
      .attr('height', function (d) {
        return d.height;
      })
      .style('fill', function (d) {
        return d.color;
      });
  }
});
