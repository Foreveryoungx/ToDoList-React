import React from 'react'
import { Table} from 'semantic-ui-react'
import Items from "./Items";
const TableExampleBasic = () => (
    <Table >
        <Table.Body>
            <Table.Row>
                <Table.Cell>{ <Items Item='First Item'/> }</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>{<Items Item='Second Item'/>}</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>{<Items Item='Third Item'/>}</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>{<Items Item='Forth Item'/>}</Table.Cell>

            </Table.Row>
        </Table.Body>
    </Table>

)

export default TableExampleBasic