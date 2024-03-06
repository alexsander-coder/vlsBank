import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Container, Content, Filters } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import bkp from "../../repositories/bkp";


export interface IData {
    id: string,
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string;
}


const List: React.FC = () => {

    const [data, setData] = useState<IData[]>([]);

    const [filter, setFilter] = useState<string>('');

    const handleFilterClick = (type: string) => {
        setFilter(type);
    };


    const months = [
        { value: 7, label: 'Julho' },
        { value: 8, label: 'Agosto' },
        { value: 9, label: 'Setembro' }
    ]

    const years = [
        { value: 2022, label: '2022' },
        { value: 2023, label: '2023' },
        { value: 2024, label: '2024' }
    ]

    const formatCurrency = (money: string) => {
        var value: number = parseFloat(money);
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }


    useEffect(() => {
        const response = bkp.map(item => ({
            id: String(Math.random() * data.length),
            description: item.description,
            amountFormatted: formatCurrency(item.amount),
            frequency: item.frequency,
            dataFormatted: item.date,
            tagColor: '#4e41f0'
        }));

        console.log(response)
        setData(response);
    }, []);


    useEffect(() => {
        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setFilter('');
            }
        };

        window.addEventListener('keyup', handleKeyUp);

        return () => window.removeEventListener('keyup', handleKeyUp);
    }, []);

    return (
        <Container>
            <ContentHeader title="Entrada" lineColor="rgb(255, 76, 76)">
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className="tag-filter tag-filter-entry"
                    onClick={() => handleFilterClick('entrada')}
                >
                    Entrada
                </button>
                <button
                    type="button"
                    className="tag-filter tag-filter-exit"
                    onClick={() => handleFilterClick('saida')}
                >
                    Saída
                </button>
            </Filters>

            <Content>
                {
                    data.filter(item => filter === '' || item.frequency === filter).map(item => (
                        <HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subTitle={item.dataFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}

export default List;