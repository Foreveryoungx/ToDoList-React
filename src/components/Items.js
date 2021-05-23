import React from "react";
import {Header, Grid, Button, Table, Segment} from "semantic-ui-react";
const Items = ({Item}) => {
    return (
        <Segment color={'black'}>
        <Grid textAlign='center' >
                <Header as='h2'>{Item }</Header>
        </Grid>
            <Button inverted color='red'>X</Button>
        </Segment>


    )
}

export default Items;