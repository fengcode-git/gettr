import { TextFieldProps, Box, TextField } from '@mui/material'
import React from 'react'


interface IFormikConfig {
    values: any,
    handleChange: any,
    handleBlur: any,
    touched: any,
    errors: any
    autoFocus?: boolean
}

interface Props {
    formik: IFormikConfig,
    name: string
}

const ExtInput = ({ formik, value, onChange, onBlur, error, helperText, name, variant = "standard", autoFocus = false, ...rest }: Props & TextFieldProps) => {
    return (
        <Box marginTop={2}>
            <TextField
                fullWidth
                autoFocus={autoFocus}
                name={name}
                variant={variant}
                value={formik.values[name]}
                onChange={formik.handleChange}
                error={formik.touched[name] && Boolean(formik.errors[name])}
                helperText={formik.touched[name] && formik.errors[name]}
                {...rest}
            />
        </Box>
    )
}



export default ExtInput
