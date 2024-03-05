import React from "react";
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";


const Dashboard: React.FC = () => {

    const options = [
        { value: '1', label: 'Opção 1' },
        { value: '2', label: 'Opção 2' },
    ];

    return (
        <Container>
            <ContentHeader title="Transações" lineColor="rgb(255, 76, 76)">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    )
}


export default Dashboard;