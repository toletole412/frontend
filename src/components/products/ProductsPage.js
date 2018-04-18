import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ProductsList from './ProductsList'
import { fetchAllProducts, filterProducts } from '../../actions/products'
import Button from 'material-ui/Button'
import Dialog, { DialogContent, DialogContentText, withMobileDialog, } from 'material-ui/Dialog'
import SearchProductForm from './SearchProductForm';
import Tune from '@material-ui/icons/Tune'
import Cached from '@material-ui/icons/Cached'
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import { withStyles } from "material-ui/styles";
import compose from "lodash/fp/compose";
import Checkbox from 'material-ui/Checkbox';

// const classes = {
  const styles = theme => ({
  tuneIcon: {
    position: "relative",
    right: 50,
  },
  button: {
    //margin: theme.spacing.unit,
    backgroundColor: `#588D61`,
    color: "white",
    '&:hover': {
      backgroundColor: `#8FBC8F`,
    },
  },

});

class ProductsPage extends PureComponent {
  state = {
    open: false,
  }

  componentWillMount(props) {
    this.props.fetchAllProducts()
  }

 
  submit = (preferences) => {
    this.props.filterProducts(preferences)
   
    this.setState({ open: false })
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }


  render() {
      const { fullScreen, classes, products, currentUserRole } = this.props
    if (!products) return null
    console.log(products)

    return(
      <div>

        <Button
          onClick={this.handleClickOpen}
          variant="raised"
          className={classes.button}
        >
        {/* <Tune className={classes.tuneIcon}/> */}
      
          Filter
        </Button>

        <Button
          onClick={this.submit}
          variant="raised"
          className={classes.button}
        >
          <Cached className={classes.cachedIcon} />
          <div>All</div>
          
        </Button>

        <FormControlLabel disabled control={<Checkbox value="checkedD" />} label="Disabled" />

<p>{
        // !products[0].currency ? "< select product >" : products[0].currency
        } </p>


        
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          aria-labelledby="responsive-dialog-title"
        >

          <DialogContent>
            <DialogContentText>
              <SearchProductForm onSubmit = {this.submit}/>
            </DialogContentText>
          </DialogContent>

          <Button
            color="primary"
            className="submit-btn"
            type="submit"
            onClick={_ => this.handleClose()}
            style={{
              display: 'block',
              margin: 'auto',
              marginTop: -15,
              marginBottom: 10
            }}
          >
            Cancel
                        </Button>

          </Dialog>


        <ProductsList products={ products } />
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    products: state.products
  }
}

export default compose(
  withMobileDialog(),
withStyles(styles),
connect(mapStateToProps, { fetchAllProducts, filterProducts })
)
(ProductsPage)



