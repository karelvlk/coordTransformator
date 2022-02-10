
import React from 'react';
import { createUseStyles } from 'react-jss'
import Transformator from '../Transformator.js'
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Stack } from '@fluentui/react';
import { Image } from 'office-ui-fabric-react/lib/Image';
import Img from '../../smallPlanet.png'

const useStyles = createUseStyles({
  wrapper: {
    padding: '20px',
  },
  
  heading: {
    borderBottom: '3px solid #ffc300',
    paddingBottom: 5
  }
})

function App() {
  const classes = useStyles()
  return(
    <Stack className={classes.wrapper}>
      <Stack horizontal className={classes.heading}>
        <Stack.Item grow>
          <Text variant={'xLarge'}>Coords Tranformer</Text> 
        </Stack.Item>
        <Image
          src={Img}
          height={50}
        />
      </Stack>
      <Transformator/>
    </Stack>
  )
}

export default App;
