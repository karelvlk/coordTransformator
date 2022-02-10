
import React from 'react'
import { createUseStyles } from 'react-jss'
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

const useStyles = createUseStyles({
  row: {
    margin: '3px',
  },

  label: {
    width: '250px',
  },

  coordTextBox: {
    width: '254px',
    padding: '0',
  },
})

function isIcon(from) {
  // eslint-disable-next-line eqeqeq
  if (from == 4326){
    console.log('IS ICON')
    return { iconName: 'LocationDot' }
  }
}

export default function InputLine(props){
  const classes = useStyles()

  const handleChange = (e, value) => {
    props.handleChange(props.name, value)
  } 

  const icon = isIcon(props.fromForm)

  return (
    <Stack horizontal verticalAlign="center" className={classes.row}>
      <Stack.Item className={classes.label}> 
        <Text variant={'medium'}>{props.label}</Text>
      </Stack.Item>
      <Stack.Item>
        <TextField 
          onChange={handleChange}
          value={props.coord}
          className={classes.coordTextBox} 
          type="number"
          iconProps = {icon}
        />
      </Stack.Item>
    </Stack>
  )
}