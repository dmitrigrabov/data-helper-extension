import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 600px;
  width: 300px;
`

const App = (): JSX.Element => {
  return (
    <Container>
      <h1>Popup Page</h1>
      <p>If you are seeing this, React is working!</p>
    </Container>
  )
}

export default App
