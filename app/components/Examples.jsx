var React =  require('react');

// var Examples = React.createClass({
//    render: function(){
//       return (
//          <h3>Examples Components</h3>
//       );
//    }
// });
var Examples = (props)=> {
   return (
      <div>
         <h3>Examples</h3>
         <p>Welcome to the examples page</p>
      </div>
      
   )
};
module.exports= Examples;