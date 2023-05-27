// import React, { Component } from 'react'
// import { Navigate } from 'react-router-dom'
// import { Container } from 'semantic-ui-react'
// import TheatreList from './TheatreList'
// import AuthContext from '../context/AuthContext'
// import { theatreApi } from '../misc/TheatreApi'
// import { handleLogError } from '../misc/Helpers'

// class UserPage extends Component {
//   static contextType = AuthContext

//   state = {
//     theatres: [],
//     theatreTextSearch: '',
//     isUser: true,
//     isTheatresLoading: false
//   }

//   componentDidMount() {
//     const Auth = this.context
//     const user = Auth.getUser()
//     const isUser = user.role === 'USER'
//     this.setState({ isUser })

//     this.handleGetTheatres()
//   }

//   handleInputChange = (e, { name, value }) => {
//     this.setState({ [name]: value })
//   }

//   handleGetTheatres = () => {
//     const Auth = this.context
//     const user = Auth.getUser()

//     this.setState({ isTheatresLoading: true })
//     theatreApi.getTheatres(user)
//       .then(response => {
//         this.setState({ theatres: response.data })
//       })
//       .catch(error => {
//         handleLogError(error)
//       })
//       .finally(() => {
//         this.setState({ isTheatresLoading: false })
//       })
//   }

//   handleSearchTheatre = () => {
//     const Auth = this.context
//     const user = Auth.getUser()

//     const text = this.state.theatreTextSearch
//     theatreApi.getTheatres(user, text)
//       .then(response => {
//         const theatres = response.data
//         this.setState({ theatres })
//       })
//       .catch(error => {
//         handleLogError(error)
//         this.setState({ theatres: [] })
//       })
//   }

//   render() {
//     if (!this.state.isUser) {
//       return <Navigate to='/' />
//     } else {
//       const { isTheatresLoading, theatres, theatreTextSearch } = this.state
//       return (
//         <Container>
//           <TheatreList
//             isTheatresLoading={isTheatresLoading}
//             theatreTextSearch={theatreTextSearch}
//             theatres={theatres}
//             handleInputChange={this.handleInputChange}
//             handleSearchTheatre={this.handleSearchTheatre}
//           />
//         </Container>
//       )
//     }
//   }
// }

// export default UserPage