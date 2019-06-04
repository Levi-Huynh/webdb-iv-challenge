import React, {Component} from 'react';

import {connect} from 'react-redux';
import {getActions} from '../actions/index';
import Recipe from './Recipe';

class RecipesList extends Component {
    state = {
   
    };
  
     componentDidMount() {
         //call our action
       this.props.getActions(this.props.match.params.id);
     }
  
    render() {
 console.log("quote props", this.props);
   
      return (
     
   
          <div className="PostDetails">
         {this.props.actions.map(a => {
return (
    <Recipe key={a.description} action={a} actions={this.props.actions}/>
);
         })}
              
             </div>
      );
    }
  }
  
  const mapStateToProps = state => {
  
    return {
  actions: state.actions,
    
    };
  };
  
  export default connect(
    mapStateToProps, {getActions:getActions }
    
  )(RecipesList);
  