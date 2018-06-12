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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { URL_PREFIX } from 'constants/index';
import 'components/OfferListItem/OfferListItem.scss';

const styles = (theme) => ({
  card: {
    width: '100%',
    minHeight: 460
  },
  cardHeader: {
    minHeight: 80,
    boxSizing: 'border-box'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    boxSizing: 'border-box',
    minHeight: 64
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
  listItem: {
    minHeight: 70,
    boxSizing: 'border-box'
  },
  listItemSecondaryAction: {
    paddingRight: 24
  }
});

class OfferListItemClass extends Component {

  static propTypes = {
    data: PropTypes.object,
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
    }, classes } = this.props;

    return (
      <div className="offer-list__item">
        <Card className={classes.card}>
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar aria-label="Offer" className={classes.avatar}>
                O
              </Avatar>
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
              <ListItem className={classes.listItem}>
                <ListItemText primary={productName} secondary={productBrand} />
                <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
                  <div className={classnames({
                    'offer-list__item__price-original--crossed-out': reducedPrice && reducedPrice.amount,
                  })}>
                    {originalPrice.currencyCode}{originalPrice.amount}
                  </div>
                  {
                    reducedPrice && reducedPrice.amount ?
                    (
                      <div className="offer-list__item__price-reduced">
                        {reducedPrice.currencyCode}{reducedPrice.amount}
                      </div>
                    )
                    :
                    ''
                  }
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <Button size="small" color="primary">
              <Link to={`${URL_PREFIX}/offer/${id}`}>Edit offer</Link>
            </Button>
            {
              description ?
              (<IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show description"
              >
                <ExpandMoreIcon />
              </IconButton>)
              :
              ''
            }
          </CardActions>
          {
            description ?
            (<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  {description}
                </Typography>
              </CardContent>
            </Collapse>)
            :
            ''
          }
          
        </Card>
      </div>
    )
  }
};

export const OfferListItem = withStyles(styles)(OfferListItemClass);
