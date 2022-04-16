import React, { Component } from "react";
import Header from "../../common/header/Header";
import "./Details.css";
import React, { useState } from "react";
import {Typography} from '@mui/material';
import GridList from '@material-ui/core/GridList';
import GridListTileBar from '@material-ui/core/GridListTileBar';


class Details extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="BookShow">
          (
          <Button variant="contained" color="primary">
            Book Show
          </Button>
          )
          <Typography variant="h6">Genre</Typography>
          <Typography variant="h6">Duration</Typography>
          <Typography variant="h6">ReleaseDate</Typography>
          <Typography variant="h6">Rating</Typography>
          <Typography variant="h6">Plot</Typography>
          <Typography variant="h6">Trailer</Typography>
          <Typography variant="h6">RatetheMovie</Typography>

        </div>
      </div>
    );
  }
}
const styles = theme => ({ });

class MyComponent extends React.Component {
    render() {
        const { classes, currentUser, images, width } = this.props;

        let columns = width === 'xs' || width === 'sm'  ? 1 : 2;

        return (
            <div className={classes.root}>
                <GridList cellHeight={180} cols={columns} className={classes.gridList}>
                    {images.map(image => (
                    <GridListTile key={image.id}>
                        <img src={ image.path } />
                        <GridListTileBar
                            title={ image.name }
                        />
                    </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

MyComponent.propTypes = {
    currentUser: PropTypes.object,
    images: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        currentUser: state.user.currentUser
    };
}



export default Details;
