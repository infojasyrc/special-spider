import React, {Component} from 'react';
import {Card, CardMedia, Grid, IconButton, withStyles} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import ImageIcon from '@material-ui/icons/AddAPhoto';

const styles = theme => ({
  addImageIcon: {
    width: '2em',
    height: '1.25em'
  },
  addImageButton: {
    marginTop: '15%',
    marginLeft: '30%',
    width: '2.5em',
    height: '2.5em'
  },
  addImageButtonContainer: {
    marginTop: '1em',
    marginRight: '1em'
  },
  image: {
    borderRadius: '0.1em',
    marginTop: '1em',
    marginRight: '1em',
    position: 'relative'
  },
  imageDelete: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: theme.colors.transparentBlack,
    color: theme.colors.white
  },
  imagesContainer: {
    marginTop: '3em'
  }
});

class ImagesPreview extends Component {

  handleDelete = (id, type) => {
    const {onDelete} = this.props;

    if (!onDelete) {
      return;
    }

    onDelete(id, type);
  }

  renderImage = (id, src, type) => {
    const {classes, enableEdit} = this.props;

    let deleteIcon = null;

    if (enableEdit) {
      deleteIcon = <IconButton
        className={classes.imageDelete}
        onClick={() => {
        this.handleDelete(id, type)
      }}>
        <DeleteIcon/>
      </IconButton>;
    }

    return (
      <Grid
        item
        key={type === 'image'
        ? id
        : `file${id}`}
        xs={6}
        sm={4}
        md={2}>
        <Card className={classes.image}>
          <CardMedia component="img" image={src}/> {deleteIcon}
        </Card>
      </Grid>
    );
  }

  render() {
    const {classes, images, selectedImages, enableEdit, onChange} = this.props;

    const imageItems = images.map((image, index) => {
      return this.renderImage(image.id, image.url, 'image');
    });

    let addedImages = null;

    if (selectedImages) {
      addedImages = selectedImages.map((image, index) => {
        return this.renderImage(index, image, 'file');
      });
    }

    let addImage = <Grid item xs={6} sm={4} md={2}>
      <div key="add" className={classes.addImageButtonContainer}>
        <IconButton
          className={classes.addImageButton}
          color="secondary"
          variant="contained"
          component="label">
          <ImageIcon className={classes.addImageIcon}/>
          <input
            type="file"
            style={{
            display: "none"
          }}
            onChange={onChange}/>
        </IconButton>
      </div>
    </Grid>;

    if (!enableEdit) {
      addImage = null;
    }

    return (
      <Grid container className={classes.imagesContainer}>
        {addImage}
        {imageItems}
        {addedImages}
      </Grid>
    );
  }
}

export default withStyles(styles)(ImagesPreview);
