import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Button, Divider, styled } from '@mui/material'
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Component = styled(Box)`
margin-top:10px;
background-color:white;
`


const Deal = styled(Box)`
    padding:15px 20px;
    display:flex;
    `
const Timer = styled(Box)
    `display:flex;
margin-left:10px;
align-item:center;
color:7f7f7f;
`
const DealText = styled(Typography)
    `font-size:22px;
font-weight:600;
margin-right:25px;
line-height:32px;
`
const ViewAllButton = styled(Box)`
margin-left:auto;
background-color:#2874f0;
border-radius:2px;
font-size:13px,
font-weight:600;
padding:2px 8px
`
const Text = styled(Typography)
    `font-size:14px;
margin-top:5px;
`
const Image = styled('img')({
    width: 'auto',
    height: 150,

})
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <span>Time Over </span>;
    } else {
        // Render a countdown
        return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>;
    }
};


const Slide = ({ products, title, timer }) => {
    return (
        <Component>

            <Deal>
                <DealText>{title}</DealText>

                {
                    timer && <Timer>
                        <img width="24px" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg" alt="" />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />,
                    </Timer>
                }

                <ViewAllButton varient="contained" color="primary">View All</ViewAllButton>
            </Deal>
            <Divider />


            <Carousel responsive={responsive} swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                centerMode={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container">
                {products.map(product => (
                    <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                        <Box textAlign="center" styled={{ padding: "25px 15px" }}>
                            <Image src={product.url} alt="" />
                            <Text style={{ fontWeight: 600, color: "#212121" }}>{product.title_shortTitle}</Text>
                            <Text style={{ color: "green" }}>{product.discount}</Text>
                            <Text style={{ color: "#212121" }}>{product.tagline}</Text>

                        </Box>
                    </Link>
                ))
                }

            </Carousel>
            <Divider />


        </Component>
    )
}
export default Slide;