import Paths from "@/libs/client/utils/Paths"
import { styled,Box } from "@mui/material"

const StyleImage = styled('img')({
    maxHeight: '30px'
})

const Logo = () => {
    return (
        <Box width="275px">
            <StyleImage src={Paths.LOGO_PATH}></StyleImage>
        </Box>
    )
}
export default Logo