import React from 'react'
import { Box } from '@mui/material'
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
       <Box sx={{backgroundColor: '#F7F8F9'}} display="flex" flexDirection="column" minHeight="100vh">
           {children}
       </Box>
    )
}
export default PageWrapper