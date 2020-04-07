import React from "react";
import MenuItem from "../menu-items/menu-item";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../reducer/directory/directorySelector'
import "./directory.style.scss";

const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSection }) => (
        <MenuItem key={id} {...otherSection} />
      ))}
    </div>
  );
};

const mapStateToProps=createStructuredSelector({
  sections:selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
