import { Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";
import { Spaceship } from "../../gql/generated/graphql";
import RocketIcon from "@mui/icons-material/Rocket";

interface Props {
    spaceship: Spaceship;
}

interface Property {
    text: string;
    value: number;
}

export const ShipCard: FC<Props> = ({ spaceship }) => {
    const properties: Property[] = [
        { text: "Battery capacity", value: spaceship.batteryCapacity },
        { text: "Cargo capacity", value: spaceship.cargoCapacity },
        { text: "Crew size", value: spaceship.crewSize },
        { text: "Max speed", value: spaceship.maxSpeed },
        { text: "Range", value: spaceship.range },
        { text: "Weight", value: spaceship.weight },
    ];

    return (
        <Card sx={{ padding: "1rem", display: "flex", flexDirection: "column" }}>
            <RocketIcon sx={{ height: "5rem", width: "5rem", alignSelf: "center" }} />
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
                    Name
                </Typography>
                {properties.map((property) => (
                    <Typography
                        key={property.text}
                        color="text.secondary"
                    >{`${property.text}: ${property.value}`}</Typography>
                ))}
            </CardContent>
        </Card>
    );
};
