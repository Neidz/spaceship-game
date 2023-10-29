import { Card, CardContent, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { Spaceship } from "../../gql/generated/graphql";
import RocketIcon from "@mui/icons-material/Rocket";
import { STATE } from "../../constants/enums";

interface Props {
    spaceship: Spaceship;
    state?: STATE;
    highlightedProperty?: Exclude<keyof Spaceship, "id" | "name">;
}

interface Property {
    name: keyof Spaceship;
    text: string;
    value: number;
}

export const ShipCard: FC<Props> = ({ spaceship, state = STATE.NEUTRAL, highlightedProperty }) => {
    const theme = useTheme();
    const backgroundColor =
        state === STATE.WON
            ? theme.palette.success.main
            : state === STATE.LOST
            ? theme.palette.error.main
            : theme.palette.background.paper;

    const properties: Property[] = [
        { name: "batteryCapacity", text: "Battery capacity", value: spaceship.batteryCapacity },
        { name: "cargoCapacity", text: "Cargo capacity", value: spaceship.cargoCapacity },
        { name: "cost", text: "Cost", value: spaceship.cost },
        { name: "crewSize", text: "Crew size", value: spaceship.crewSize },
        { name: "maxSpeed", text: "Max speed", value: spaceship.maxSpeed },
        { name: "range", text: "Range", value: spaceship.range },
        { name: "weight", text: "Weight", value: spaceship.weight },
    ];

    return (
        <Card sx={{ padding: "1rem", display: "flex", flexDirection: "column", backgroundColor: backgroundColor }}>
            <RocketIcon sx={{ height: "5rem", width: "5rem", alignSelf: "center" }} />
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
                    {spaceship.name}
                </Typography>
                {properties.map((property) => (
                    <Typography
                        key={property.text}
                        color={property.name === highlightedProperty ? "text.primary" : "text.secondary"}
                    >{`${property.text}: ${property.value}`}</Typography>
                ))}
            </CardContent>
        </Card>
    );
};
