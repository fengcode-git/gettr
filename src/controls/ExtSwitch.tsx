import { FormControlLabel, Switch } from '@mui/material'
import React from 'react'

interface IFormikConfig {
    values: any,
    handleChange: any
}

interface Props {
    formik: IFormikConfig,
    name: string,
    label: string
}

const ExtSwitch = ({ formik, name, label }: Props) => {
    const switchObj = (
        <Switch name={name} checked={formik.values[name]} onChange={formik.handleChange}></Switch>
    )
    return (
        <div>
            <FormControlLabel label={label} control={switchObj}></FormControlLabel>
        </div>
    )
}

export default ExtSwitch
