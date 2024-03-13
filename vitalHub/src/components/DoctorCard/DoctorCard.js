import { DoctorContainer, DoctorContent, DoctorContentImage, DoctorText, DoctorTitle, DoctorTouchable } from "./Style"

export const DoctorCard = ({
    onPress,
    doctorName,
    doctorRole,
}) => {
    return (
        <DoctorContainer>
            <DoctorTouchable onPress={onPress}>
                <DoctorContentImage source={{ uri: "https://github.com/Joao-Henrike.png" }} />

                <DoctorContent>
                    <DoctorTitle>{doctorName}</DoctorTitle>

                    <DoctorText>{doctorRole}</DoctorText>
                </DoctorContent>
            </DoctorTouchable>
        </DoctorContainer>
    )
}