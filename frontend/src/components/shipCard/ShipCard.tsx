import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { Spaceship } from "../../gql/generated/graphql";
import RocketIcon from "@mui/icons-material/Rocket";
import { STATE } from "../../constants/enums";
import { PlayableSpaceshipProperty, spaceshipPropertyLabels } from "../../constants/spaceshipproperties";

interface Props {
    spaceship: Spaceship;
    state?: STATE;
    highlightedProperty?: PlayableSpaceshipProperty;
}

interface Property {
    name: Exclude<keyof Spaceship, "id">;
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
        { name: "batteryCapacity", text: spaceshipPropertyLabels.batteryCapacity, value: spaceship.batteryCapacity },
        { name: "cargoCapacity", text: spaceshipPropertyLabels.cargoCapacity, value: spaceship.cargoCapacity },
        { name: "cost", text: spaceshipPropertyLabels.cost, value: spaceship.cost },
        { name: "crewSize", text: spaceshipPropertyLabels.crewSize, value: spaceship.crewSize },
        { name: "maxSpeed", text: spaceshipPropertyLabels.maxSpeed, value: spaceship.maxSpeed },
        { name: "range", text: spaceshipPropertyLabels.range, value: spaceship.range },
        { name: "weight", text: spaceshipPropertyLabels.weight, value: spaceship.weight },
    ];

    return (
        <Card
            sx={{
                padding: "0.5rem 0",
                display: "flex",
                flexDirection: "column",
                backgroundColor: backgroundColor,
                minWidth: "250px",
                flex: 1,
            }}
        >
            <RocketIcon sx={{ height: "3rem", width: "3rem", alignSelf: "center" }} />
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
                    {spaceship.name}
                </Typography>
                {properties.map((property) => (
                    <Box key={property.text}>
                        <Typography color={property.name === highlightedProperty ? "text.primary" : "text.secondary"}>
                            {property.text}: {property.value}
                        </Typography>
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
};
