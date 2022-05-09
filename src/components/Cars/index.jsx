import React from "react";
import TableCell from "@mui/material/TableCell";
import { useSelector } from "react-redux";
import AddCarModal from "./addCarModal";

const Cars = ({ clientId }) => {
  const cars = useSelector((state) => state.carsReducer.cars);
  const carsByClients = cars.filter((car) => car.client === clientId);
  return (
    <>
      {carsByClients.map((car) => {
        return (
          <div align="right">
            <TableCell>
              {car.vinData.mark} {car.vinData.model}
            </TableCell>
          </div>
        );
      })}
      <AddCarModal clientId={clientId} />
    </>
  );
};

export default Cars;
