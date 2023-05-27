// import React from 'react'
// import { Grid, Header, Form, Icon, Image, Input, Item, Segment } from 'semantic-ui-react'

// function TheatreList({ isTheatresLoading, theatreTextSearch, theatres, handleInputChange, handleSearchTheatre }) {
//   let theatreList
//   if (theatres.length === 0) {
//     theatreList = <Item key='no-theatre'>No theatre</Item>
//   } else {
//     theatreList = theatres.map(theatre => {
//       return (
//         <Item key={theatre.id}>
//           <Item.Content>
//             <Item.Header>{theatre.theatrename}</Item.Header>
//             <Item.Meta>{theatre.theatreplace}</Item.Meta>
//             <Item.Description>
//               {theatre.theatrescreens}
//             </Item.Description>
//           </Item.Content>
//         </Item>
//       )
//     })
//   }

//   return (
//     <Segment loading={isTheatresLoading} color='blue'>
//       <Grid stackable divided>
//         <Grid.Row columns='2'>
//           <Grid.Column width='3'>
//             <Header as='h2'>
//               <Icon name='film' />
//               <Header.Content>Theatres</Header.Content>
//             </Header>
//           </Grid.Column>
//           <Grid.Column>
//             <Form onSubmit={handleSearchTheatre}>
//               <Input
//                 action={{ icon: 'search' }}
//                 name='theatreTextSearch'
//                 placeholder='Search by name or location'
//                 value={theatreTextSearch}
//                 onChange={handleInputChange}
//               />
//             </Form>
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//       <Item.Group divided unstackable relaxed link>
//         {theatreList}
//       </Item.Group>
//     </Segment>
//   )
// }

// export default TheatreList
