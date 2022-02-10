
import React from 'react'
import { createUseStyles } from 'react-jss'
import SelectBox from './SelectBox.js'
import InputLine from './InputLine.js'
import { IconButton, PrimaryButton } from 'office-ui-fabric-react'
import { Stack } from 'office-ui-fabric-react/lib/Stack';

const useStyles = createUseStyles({
  form: {
    marginTop: '24px',
  },

  btn: {
    marginTop: '5px',
    marginBottom: '5px',
    width: '507px',
  },

  underline: {
    borderBottom: '1px solid #ffc300'
  },
})

export default function Form(props){
  const classes = useStyles()
  const emojiIcon = { iconName: 'sort' }; 

  const ok = props.fromForm && props.toForm;

  return (
    <Stack className={classes.form}>
      <Stack horizontal verticalAlign="center">
        <Stack.Item className={classes.underline}>
          <SelectBox 
            label='From coordination system:'
            whichSelector={props.fromForm}
            handleChange={props.handleChange}
            name='from'
          />
          <SelectBox 
            label='To coordination system:'
            whichSelector={props.toForm}
            handleChange={props.handleChange}
            name='to'
          />
        </Stack.Item>
        <IconButton iconProps={emojiIcon}  title="Emoji" ariaLabel="Emoji" onClick={props.changeSelectBox}/>
      </Stack>
      <Stack horizontal verticalAlign="center">
        <Stack.Item>
          <InputLine
            label='X coordinate:'
            handleChange={props.handleChange}
            name='x'
            coord={props.xForm}
            fromForm={props.fromForm}
          />
          <InputLine
            label='Y coordinate:'
            handleChange={props.handleChange}
            name='y'
            coord={props.yForm}
            fromForm={props.fromForm}
          />
        </Stack.Item>
        <IconButton iconProps={emojiIcon}  title="Emoji" ariaLabel="Emoji" onClick={props.changeCoords}/>
      </Stack>
      <PrimaryButton text="Submit" className={classes.btn} onClick={props.handleSubmit} disabled={!ok}/>
    </Stack>
  )
}