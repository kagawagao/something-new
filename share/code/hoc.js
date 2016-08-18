import React from 'react'
const connectToStores = (Component, stores, getStateFromStores) => {
  return class StoreConnection extends React.Component({
    getInitialState() {
      return getStateFromStores(this.props)
    }
    componentDidMount() {
      stores.forEach(store =>
        store.addChangeListener(this.handleStoresChanged)
      );
    }
    componentWillUnmount() {
      stores.forEach(store =>
        store.removeChangeListener(this.handleStoresChanged)
      )
    }
    handleStoresChanged() {
      if (this.isMounted()) {
        this.setState(getStateFromStores(this.props))
      }
    }
    render() {
      return <Component {...this.props} {...this.state} />
    }
  })
}


class ProfilePage extends React.Component({
  propTypes: {
    userId: PropTypes.number.isRequired,
    user: PropTypes.object // note that user is now a prop
  }
  render() {
    var { user } = this.props; // get user from props
    return <div>{user ? user.name : 'Loading'}</div>;
  }
})
// Now wrap ProfilePage using a higher-order component:
export default connectToStores(ProfilePage, [UserStore], props => ({
  user: UserStore.get(props.userId)
})
