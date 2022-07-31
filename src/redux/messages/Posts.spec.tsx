import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Provider } from 'react-redux'

import { makeStore } from '../../app/store'
import Post from './Post'

// describe('<Posts />', () => {
//   it('renders the component', () => {
//     const store = makeStore()
//
//     render(
//       <Provider store={store}>
//         <Post id={5} />
//       </Provider>
//     )
//
//     expect(screen.getByAltText('vitrin')).toBeInTheDocument()
//   })
//
// })
