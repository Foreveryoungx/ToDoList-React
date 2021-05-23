
import  React from 'react';
import {Input, Segment, Table} from "semantic-ui-react";
const InputBox = () => {
    return (
        <Segment color={'black'}>
        <Table attached='bottom'>
            <Input transparent placeholder='Input item'  />
        </Table>
        </Segment>
    );
};

export default InputBox;

