var React= require("react");
var Nav =  require('Nav');

// var Main = React.createClass({
//    render: function(){
//       return(
//          <div>
//             <Nav/>
//          <h2>Main Component</h2>
//          {this.props.children}
//          </div>
//          );
//    }
// });

//The one below is a refactored version//
var Main = (props) => {
      return(
         <div>
            <Nav/>
         <h2>Main Component</h2>
         {props.children}
         </div>
         );

};
module.exports =  Main;