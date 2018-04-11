import React, {PureComponent} from 'react'
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 300
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    width: 320
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
});

class LoginForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		const { classes } = this.props;

		return (
			<form className={classes.container} onSubmit={this.handleSubmit}>
				<div>
					<TextField
            required
            id="email"
            name="email"
            label="Email"
            className={classes.textField}
            margin="normal"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
				</div>
				<div>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            className={classes.textField}
            type="password"
            margin="normal"
            value={this.state.password}
            onChange={this.handleChange}
          />
				</div>
        <Button variant="raised" color="primary" className={classes.button} type="submit">
          Log in
        </Button>
			</form>
		)
	}
}

export default withStyles(styles)(LoginForm);
