
import React from 'react'
import { createUseStyles } from 'react-jss'
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { Stack } from 'office-ui-fabric-react/lib/Stack'
import { Text } from 'office-ui-fabric-react/lib/Text'

const useStyles = createUseStyles({
  row: {
    margin: '3px',
  },
  
  label: {
    width: '250px',
  },

  selectBox: {
    width: '254px',
    height: '24px'
  },
})

export default function SelectBox(props) {
  const classes = useStyles()
  const dropdownStyles = { dropdown: { width: 254 } };

  const options = [
    { key: '2065', text: 'S-JTSK' ,name: props.name},
    { key: '4326', text: 'WGS84' ,name: props.name},
  ];

  const handleChange = (e, item) => {
    props.handleChange(item.name, item.key)
  } 

  return (
    <Stack horizontal verticalAlign="center" className={classes.row}>
      <Stack.Item className={classes.label}>        
        <Text variant={'medium'}>{props.label}</Text>
      </Stack.Item>
      <Stack.Item>
        <Dropdown
          selectedKey={props.whichSelector}
          onChange={handleChange}
          placeholder="Select System"
          options={options}
          styles={dropdownStyles}
        />
      </Stack.Item>
    </Stack>
   )
}