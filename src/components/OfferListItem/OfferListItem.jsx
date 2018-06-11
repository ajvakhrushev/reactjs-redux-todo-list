import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import 'components/OfferListItem/OfferListItem.scss';

const styles = (theme) => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class OfferListItem extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { data: {
      id,
      name,
      category,
      productName,
      productBrand,
      originalPrice,
      reducedPrice,
      productImagePointer,
      description
    } } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Offer" className={classes.avatar}>
                O
              </Avatar>
            }
            action={
              reducedPrice && reducedPrice.amount ?
              (
                <span>
                  SALE {reducedPrice.currencyCode} {reducedPrice.amount}
                </span>
              )
              :
              ''
            }
            title={name}
            subheader={category}
          />
          <CardMedia
            className={classes.media}
            image={productImagePointer.itemName}
            title={name}
          />
          <CardContent>
            <List>
              <ListItem>
                <ListItemText primary={productName} secondary={productBrand} />
                <ListItemSecondaryText>
                  {originalPrice.currencyCode} {originalPrice.amount}
                </ListItemSecondaryText>
              </ListItem>
            </List>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <Button size="small" color="primary">
              <Link to={}></Link>
            </Button>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show description"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                {description}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    )
  }
};

export default withStyles(styles)(OfferListItem);
