import React, { useState } from "react";
import { Modal } from "react-native";
import { Button, ButtonCancel, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style";
import { Title } from "../Title/Style";
import { SelectDateContainer } from "./Style";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { StyledSelect } from "../Select/Style";
import { ContainerFlex } from "../Container/Style";
import { ConfirmAppointment } from "../ConfirmAppointment/ConfirmAppointment";

export const SelectDate = ({
    visible,
    navigation,
    setShowSelectDate,
    tipoConsulta,
    endereco,
    clinica,
    doutor,
    role,
    ...rest
}) => {
    const [showConfirmAppointment, setShowConfirmAppointment] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const currentDate = new Date();
    const startingDate = new Date(currentDate);
    const endingDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const Dados = [
        { id: 0, doctorName: "Jão Sena", doctorRole: "Urologista" },
        { id: 1, doctorName: "Gus", doctorRole: "Psiquiatra" },
        { id: 2, doctorName: "Gomes Pedro Teixeira", doctorRole: "Médico" },
        { id: 3, doctorName: "Creepo", doctorRole: "Desenholorogista" }
    ];

    console.log("SelectDate rendered with visible =", visible);

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType='fade'>
            <SelectDateContainer>
                <Title>Selecionar data</Title>
                <Calendar
                    minDate={startingDate.toDateString()}
                    hideArrows
                    maxDate={endingDate.toDateString()}
                    onDayPress={(day) => {
                        console.log("Selected Date:", day.dateString); // Verificar a data selecionada
                        setSelectedDate(day.dateString);
                    }}
                />
                <StyledSelect
                    onValueChange={(value) => console.log(value)}
                    placeholder={{ label: "Selecione um horário disponível", value: "default" }}
                    items={[
                        { label: "5:00", value: "5am" },
                        { label: "6:00", value: "6am" },
                        { label: "7:00", value: "7am" },
                        { label: "8:00", value: "8am" },
                        { label: "9:00", value: "9am" },
                        { label: "10:00", value: "10am" },
                        { label: "11:00", value: "11am" },
                        { label: "12:00", value: "12am" },
                        { label: "13:00", value: "13pm" },
                        { label: "14:00", value: "14pm" },
                        { label: "15:00", value: "15pm" },
                        { label: "16:00", value: "16pm" },
                        { label: "17:00", value: "17pm" },
                        { label: "18:00", value: "18pm" },
                        { label: "19:00", value: "19pm" },
                        { label: "20:00", value: "20pm" },
                    ]}
                />
                <Button onPress={() => setShowConfirmAppointment(true)}>
                    <ButtonTitle>Continuar</ButtonTitle>
                </Button>
                <ButtonCancel onPress={() => setShowSelectDate(false)}>
                    <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                </ButtonCancel>
                <ConfirmAppointment
                    visible={showConfirmAppointment}
                    setShowConfirmAppointment={setShowConfirmAppointment}
                    navigation={navigation}
                    tipoConsulta={tipoConsulta}
                    endereco={endereco}
                    clinica={clinica}
                    doutor={doutor}
                    role={role}
                    selectedDate={selectedDate}
                />
            </SelectDateContainer>
        </Modal >
    );
};
