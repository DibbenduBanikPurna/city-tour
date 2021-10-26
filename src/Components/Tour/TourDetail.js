import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';


import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const TourDetail = ({ tour, handleDelete }) => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="col-md-3">
            <Card sx={{ maxWidth: 345 }}>

                <img
                    component="img"
                    height="194"
                    src={require(`../../Images/${tour.img}`).default}
                    alt="Paella dish"

                />
                <span onClick={() => handleDelete(tour.id)} className="material-icons-outlined"> <ClearIcon /> </span>
                <CardContent>
                    <h4 style={{ color: 'green' }}>{tour.city}</h4>
                    <Typography variant="body2" color="text.dark">
                        {tour.name}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>

                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <p className="text-warning">Info</p>
                        <ExpandMoreIcon className="text-success" />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>

                        <Typography paragraph>
                            {tour.info}
                        </Typography>



                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}
export default TourDetail